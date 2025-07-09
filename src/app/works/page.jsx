import ProjectsClient from './ProjectsClient';
import ConnectDB from "@/app/lib/connectDB";
import ProjectSchema from "@/app/models/ProjectSchema";

async function getProjects() {
  await ConnectDB();
  try {
    const projects = await ProjectSchema.find({})
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.error('Database fetch error:', error);
    return [];
  }
}

export default async function WorksPage() {
  const initialProjects = await getProjects();
  
  return <ProjectsClient initialProjects={initialProjects} />;
}