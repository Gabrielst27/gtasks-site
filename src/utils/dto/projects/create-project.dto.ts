import { ProjectModel } from '@/models/project';

export type CreateProjectDto = Omit<
  ProjectModel,
  'id' | 'createdById' | 'createdAt' | 'updatedAt'
>;
