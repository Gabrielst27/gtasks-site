import { mapToProject } from "@/lib/mappers/project-mapper";
import { GetManyProjectsResponse } from "@/lib/responses/get-many-projects-reponse";
import { ProjectModel } from "@/models/project";
import { cacheLife, cacheTag } from "next/cache";

const apiUrl = process.env.GTASKS_API_URL ?? "";
const controllerUrl = process.env.API_PROJECTS_CONTROLLER ?? "";
const path = `${apiUrl}/${controllerUrl}`;

export async function getProjectsCached(): Promise<ProjectModel[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("projects");

  const response = await fetch(path, {
    method: "GET",
  });
  const json: GetManyProjectsResponse = await response.json();
  const projects = json.items.map((item) => mapToProject(item));
  return projects;
}
