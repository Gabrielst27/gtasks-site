import { TaskModel } from '@/models/task';

export function ordertasks(tasks: TaskModel[]): void {
  const priorityOrder: Record<string, number> = {
    high: 0,
    medium: 1,
    low: 2,
  };

  tasks.sort((a, b) => {
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
}
