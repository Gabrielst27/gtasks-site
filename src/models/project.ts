import { Model } from '@/models/model';

export type ProjectModel = {
  id: string;
  name: string;
  description: string;
  createdById: string;
  slug: string;
} & Model;
