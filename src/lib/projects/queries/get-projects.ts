import { getCurrentSession } from '@/lib/auth/manage-login';
import { mapToProject } from '@/lib/projects/mappers/project-mapper';
import { ProjectResponse } from '@/lib/projects/responses/project-response';
import { GetManyAppResponse } from '@/lib/response';
import { GetManyModels } from '@/models/get-many-models';
import { ProjectModel } from '@/models/project';
import { ErrorMessages } from '@/utils/error-messages.enum';
import { verifyQueryRequestError } from '@/utils/queries/verify-query-request-error';
import { cacheLife, cacheTag } from 'next/cache';

const apiUrl = process.env.GTASKS_API_URL ?? '';
const basePath = `${apiUrl}/projects`;

export async function getProjectsCached(
  token: string,
): Promise<GetManyModels<ProjectModel>> {
  'use cache';
  cacheLife('minutes');
  cacheTag('projects');

  if (!token) {
    throw new Error(ErrorMessages.UNAUTHORIZED);
  }

  //TODO: implement getProjectsCached error threatment
  const response = await fetch(basePath, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  verifyQueryRequestError(response);
  const json: GetManyAppResponse<ProjectResponse> = await response.json();
  if (!json.items) {
    return json;
  }
  const projects = json.items.map((item) => mapToProject(item));
  return {
    ...json,
    items: projects,
  };
}

export async function getProjectByIdCached(
  id: string,
  token: string,
): Promise<ProjectModel> {
  'use cache';
  cacheLife('minutes');
  cacheTag(`projects/id-${id}`);

  if (!token) {
    throw new Error(ErrorMessages.UNAUTHORIZED);
  }

  const path = `${basePath}/by-id/${id}`;
  //TODO: implement getProjectByIdCached error threatment
  const response = await fetch(path, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  verifyQueryRequestError(response);
  const json: ProjectResponse = await response.json();
  const project = mapToProject(json);
  return project;
}

export async function getProjectBySlugCached(
  slug: string,
  token: string,
): Promise<ProjectModel> {
  'use cache';
  cacheLife('minutes');
  cacheTag(`projects/slug-${slug}`);

  if (!token) {
    throw new Error(ErrorMessages.UNAUTHORIZED);
  }

  const path = `${basePath}/by-slug/${slug}`;
  //TODO: implement getProjectBySlugCached error threatment
  const response = await fetch(path, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  verifyQueryRequestError(response);
  const json: ProjectResponse = await response.json();
  const project = mapToProject(json);
  return project;
}
