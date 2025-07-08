import ConnectDB from "@/app/lib/connectDB";
import ProjectSchema from "@/app/models/ProjectSchema";

export async function GET() {
    await ConnectDB();
    try {
        const projects = await ProjectSchema.find({}).sort({ createdAt: -1 });
        return new Response(JSON.stringify(projects), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({
            message: 'Failed to fetch projects',
            error: error.message
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export async function POST(req) {
    await ConnectDB();
    try {
        const { title, description, techStack, repoLink, liveDemo } = await req.json();

        const newProject = new ProjectSchema({
            title,
            description,
            techStack: typeof techStack === 'string'
                ? techStack.split(',').map(tech => tech.trim())
                : techStack,
            repoLink,
            liveDemo: liveDemo || null
        });

        const savedProject = await newProject.save();

        return new Response(JSON.stringify({
            success: true,
            data: savedProject
        }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Database save error:', error);
        return new Response(JSON.stringify({
            success: false,
            error: error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}