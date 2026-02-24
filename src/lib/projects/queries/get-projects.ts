import { mapToProject } from '@/lib/projects/mappers/project-mapper';
import { GetManyProjectsResponse } from '@/lib/projects/responses/get-many-projects-reponse';
import { ProjectResponse } from '@/lib/projects/responses/project-response';
import { GetManyAppResponse } from '@/lib/response';
import { ProjectModel } from '@/models/project';
import { cacheLife, cacheTag } from 'next/cache';
import { notFound } from 'next/navigation';

const apiUrl = process.env.GTASKS_API_URL ?? '';
const controllerUrl = process.env.API_PROJECTS_CONTROLLER ?? '';

export async function getProjectsCached(): Promise<
  GetManyAppResponse<ProjectModel>
> {
  'use cache';
  cacheLife('minutes');
  cacheTag('projects');

  const path = `${apiUrl}/${controllerUrl}`;
  //TODO: implement getProjectsCached error threatment
  const response = await fetch(path, {
    method: 'GET',
  });
  const json: GetManyProjectsResponse = await response.json();
  const projects = json.items.map((item) => mapToProject(item));
  return {
    ...json,
    items: projects,
  };
}

export async function getProjectByIdCached(id: string): Promise<ProjectModel> {
  'use cache';
  cacheLife('minutes');
  cacheTag(`projects/id-${id}`);

  const path = `${apiUrl}/${controllerUrl}/by-id/${id}`;
  //TODO: implement getProjectByIdCached error threatment
  const response = await fetch(path, {
    method: 'GET',
  });
  const json: ProjectResponse = await response.json();
  const project = mapToProject(json);
  return project;
}

export async function getProjectBySlugCached(
  slug: string,
): Promise<ProjectModel> {
  'use cache';
  cacheLife('minutes');
  cacheTag(`projects/slug-${slug}`);

  const path = `${apiUrl}/${controllerUrl}/by-slug/${slug}`;
  //TODO: implement getProjectBySlugCached error threatment
  const response = await fetch(path, {
    method: 'GET',
  });
  const json: ProjectResponse = await response.json();
  const project = mapToProject(json);
  return project;
}
