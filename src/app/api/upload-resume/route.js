// app/api/upload-resume/route.js
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('resume');

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = 'resume.pdf';
    const publicDir = path.join(process.cwd(), 'public');
    const filePath = path.join(publicDir, filename);

    // Delete previous resume if exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Save new file
    await fs.promises.writeFile(filePath, buffer);

    return NextResponse.json(
      { success: true, message: 'Resume updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Error uploading resume' },
      { status: 500 }
    );
  }
}