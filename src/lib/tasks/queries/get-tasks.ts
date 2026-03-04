import { GetManyAppResponse } from '@/lib/response';
import { mapToTask } from '@/lib/tasks/mappers/task-mapper';
import { TaskResponse } from '@/lib/tasks/responses/task-response';
import { TaskModel } from '@/models/task';
import { ErrorMessages } from '@/utils/error-messages.enum';
import { verifyQueryRequestError } from '@/utils/queries/verify-query-request-error';

const basePath = `${process.env.GTASKS_API_URL}/projects`;

export async function getTasksCached(
  projectId: string,
  token: string,
): Promise<GetManyAppResponse<TaskModel>> {
  const path = `${basePath}/${projectId}/tasks`;
  if (!token) {
    throw new Error(ErrorMessages.UNAUTHORIZED);
  }
  //TODO: implement getTasksCached error threatment
  try {
    const response = await fetch(path, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    verifyQueryRequestError(response);
    const json: GetManyAppResponse<TaskResponse> = await response.json();
    const tasks = json
      ? json.items
        ? json.items.length
          ? json.items.map((task) => mapToTask(task))
          : []
        : []
      : [];
    return {
      ...json,
      items: tasks,
    };
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
    throw new Error('Erro desconhecido');
  }
}
