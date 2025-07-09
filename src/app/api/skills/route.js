import { NextResponse } from 'next/server';
import ConnectDB from '@/app/lib/connectDB';
import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import Skills from '@/app/models/SkillsSchema';

export const config = {
    api: {
        bodyParser: false,
    },
};


// GET all skills with optional category filtering
export async function GET() {
    try {
        await ConnectDB();

        const skills = await Skills.find({});

        return NextResponse.json(skills);

    } catch (error) {
        console.error('Error fetching skills:', error);
        return NextResponse.json(
            { error: 'Failed to fetch skills' },
            { status: 500 }
        );
    }
}

async function parseFormData(req) {
    try {
        const formData = await req.formData();
        const data = {};
        const file = formData.get('logo');

        formData.forEach((value, key) => {
            if (key !== 'logo') {
                data[key] = value;
            }
        });

        return { ...data, file };
    } catch (error) {
        console.error('Error parsing form data:', error);
        throw new Error('Failed to parse form data');
    }
}

export async function POST(request) {
    try {
        await ConnectDB();
        const { file, ...formData } = await parseFormData(request);

        // Input validation and processing
        const name = formData.name?.trim();
        const link = formData.link?.trim();
        const category = formData.category?.trim() || 'other';
        const proficiency = parseInt(formData.proficiency) || 3;
        const isFeatured = formData.isFeatured === 'true';

        if (!name || !link) {
            return NextResponse.json(
                { error: 'Name and link are required fields' },
                { status: 400 }
            );
        }

        if (!file) {
            return NextResponse.json(
                { error: 'Logo file is required' },
                { status: 400 }
            );
        }

        // File validation
        const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json(
                { error: 'Invalid file type. Only JPEG, PNG, SVG, and WebP are allowed.' },
                { status: 400 }
            );
        }

        // Sanitize filename while preserving original name
        const originalName = file.name;
        const sanitizedFilename = originalName
            .replace(/[^a-zA-Z0-9-_.]/g, '_') 
            .replace(/_+/g, '_') 
            .replace(/^_+|_+$/g, '');

        // Create unique directory for each upload to prevent filename conflicts
        const uploadDirName = uuidv4();
        const uploadsDir = path.join(process.cwd(), 'public', 'uploads', uploadDirName);
        const relativePath = path.join('/uploads', uploadDirName, sanitizedFilename);
        const absolutePath = path.join(uploadsDir, sanitizedFilename);

        // Ensure upload directory exists
        await fs.mkdir(uploadsDir, { recursive: true });

        // Save file with original (sanitized) name
        const fileBuffer = await file.arrayBuffer();
        await fs.writeFile(absolutePath, Buffer.from(fileBuffer));

        // Check for duplicate skill name
        const existingSkill = await Skills.findOne({ name });
        if (existingSkill) {
            // Clean up uploaded files
            await fs.rm(uploadsDir, { recursive: true }).catch(console.error);
            return NextResponse.json(
                { error: 'Skill with this name already exists' },
                { status: 409 }
            );
        }

        // Create new skill document with original filename
        const newSkill = new Skills({
            name,
            logo: relativePath,
            originalLogoName: originalName, 
            link,
            category,
            proficiency,
            isFeatured,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        const savedSkill = await newSkill.save();

        return NextResponse.json(
            {
                _id: savedSkill._id,
                ...savedSkill.toObject()
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error creating skill:', error);
        return NextResponse.json(
            { error: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}

