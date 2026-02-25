import { AppResponse } from '@/lib/response';

export enum TaskResponseStatus {
  TO_DO = 'to_do',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export enum TaskResponsePriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export type TaskResponse = {
  id: string;
  title: string;
  description: string;
  slug: string;
  status: TaskResponseStatus;
  priority: TaskResponsePriority;
  assigneeId: string;
  createdById: string;
  dueDate: string;
  projectId: string;
} & AppResponse;
