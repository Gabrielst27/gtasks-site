import { ProjectModel } from '@/models/project';

export type PublicProjectDto = Omit<ProjectModel, ''>;

export function makePublicProjectFromProjectModel(
  post: ProjectModel,
): PublicProjectDto {
  return post;
}

export function makePartialPublicProject(
  post?: Partial<ProjectModel>,
): PublicProjectDto {
  return {
    id: post?.id || '',
    name: post?.name || '',
    description: post?.description || '',
    createdById: post?.createdById || '',
    slug: post?.slug || '',
    createdAt: post?.createdAt || '',
    updatedAt: post?.updatedAt || '',
  };
}
