import { GetManyAppResponse } from '@/lib/response';
import { mapToTask } from '@/lib/tasks/mappers/task-mapper';
import { TaskResponse } from '@/lib/tasks/responses/task-response';
import { TaskModel } from '@/models/task';

const basePath = `${process.env.GTASKS_API_URL}/projects`;

export async function getTasksCached(
  projectId: string,
): Promise<GetManyAppResponse<TaskModel>> {
  const path = `${basePath}/${projectId}/tasks`;
  //TODO: implement getTasksCached error threatment
  const response = await fetch(path, {
    method: 'GET',
  });
  const json: GetManyAppResponse<TaskResponse> = await response.json();
  const tasks = json.items.map((task) => mapToTask(task));
  return {
    ...json,
    items: tasks,
  };
}
