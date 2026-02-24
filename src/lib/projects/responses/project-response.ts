import { AppResponse } from '@/lib/response';

export type ProjectResponse = {
  id: string;
  name: string;
  description: string;
  slug: string;
  createdById: string;
} & AppResponse;
