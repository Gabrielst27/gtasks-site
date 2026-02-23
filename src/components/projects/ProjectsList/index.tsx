import { getProjectsCached } from "@/lib/queries/get-projects";

export async function ProjectsList() {
  const projects = await getProjectsCached();
  return <div>{...projects.map((project) => <h1>{project.name}</h1>)}</div>;
}
