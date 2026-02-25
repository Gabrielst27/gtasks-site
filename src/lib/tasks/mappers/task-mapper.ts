import {
  TaskResponse,
  TaskResponsePriority,
  TaskResponseStatus,
} from '@/lib/tasks/responses/task-response';
import { TaskModel, TaskPriority, TaskStatus } from '@/models/task';

export function mapToTask(task: TaskResponse): TaskModel {
  const model: TaskModel = {
    id: task.id,
    title: task.title,
    description: task.description,
    dueDate: task.dueDate ? new Date(task.dueDate) : null,
    slug: task.slug,
    status: mapStatusResponseToModelEnum(task.status),
    priority: mapPriorityResponseToModelEnum(task.priority),
    assigneeId: task.assigneeId,
    createdById: task.createdById,
    projectId: task.projectId,
    createdAt: new Date(task.createdAt),
    updatedAt: new Date(task.updatedAt),
  };
  return model;
}

function mapStatusResponseToModelEnum(
  statusEnum: TaskResponseStatus,
): TaskStatus {
  const mapper = {
    to_do: TaskStatus.TO_DO,
    in_progress: TaskStatus.IN_PROGRESS,
    done: TaskStatus.DONE,
  };
  return mapper[statusEnum];
}

function mapPriorityResponseToModelEnum(
  priorityEnum: TaskResponsePriority,
): TaskPriority {
  const mapper = {
    low: TaskPriority.LOW,
    medium: TaskPriority.MEDIUM,
    high: TaskPriority.HIGH,
  };
  return mapper[priorityEnum];
}
