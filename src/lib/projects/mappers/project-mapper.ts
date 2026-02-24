import { ProjectResponse } from '@/lib/projects/responses/project-response';
import { ProjectModel } from '@/models/project';

export function mapToProject(response: ProjectResponse): ProjectModel {
  return {
    id: response.id,
    name: response.name,
    description: response.description,
    slug: response.slug,
    createdById: response.createdById,
    createdAt: new Date(response.createdAt),
    updatedAt: new Date(response.updatedAt),
  };
}
