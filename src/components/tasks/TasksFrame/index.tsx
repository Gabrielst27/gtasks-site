import { Card } from '@/components/Card';
import { Line } from '@/components/Line';
import { TasksTable } from '@/components/tasks/TasksTable';
import { getCurrentSession } from '@/lib/auth/manage-login';
import { getTasksCached } from '@/lib/tasks/queries/get-tasks';
import { TaskStatus } from '@/models/task';
import { ErrorMessages } from '@/utils/error-messages.enum';
import { ERoutes } from '@/utils/routes.enum';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

type TasksFrameProps = {
  projectId: string;
};

export async function TasksFrame({ projectId }: TasksFrameProps) {
  const token = await getCurrentSession();
  try {
    const tasksResult = await getTasksCached(projectId, token);
    const tasks = tasksResult.items;
    const toDo = tasks.filter((task) => task.status === TaskStatus.TO_DO);
    const inProgress = tasks.filter(
      (task) => task.status === TaskStatus.IN_PROGRESS,
    );
    const done = tasks.filter((task) => task.status === TaskStatus.DONE);
    return (
      <Card className="flex-col">
        <h1 className="text-center text-xl font-bold">Tarefas</h1>
        <Line />
        <TasksTable title="To do" tasks={toDo} />
        <TasksTable title="In progress" tasks={inProgress} />
        <TasksTable title="Done" tasks={done} />
      </Card>
    );
  } catch (e) {
    if (e instanceof Error) {
      if (e.message === ErrorMessages.UNAUTHORIZED) {
        toast.error(e.message);
        redirect(ERoutes.LOGIN);
      }
    }
  }
}
