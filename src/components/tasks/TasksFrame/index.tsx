import { Card } from '@/components/Card';
import { Line } from '@/components/Line';
import { TasksTable } from '@/components/tasks/TasksTable';
import { getTasksCached } from '@/lib/tasks/queries/get-tasks';
import { TaskStatus } from '@/models/task';

type TasksFrameProps = {
  projectId: string;
};

export async function TasksFrame({ projectId }: TasksFrameProps) {
  const tasksResult = await getTasksCached(projectId);
  const tasks = tasksResult.items;
  const toDo = tasks.filter((task) => task.status === TaskStatus.TO_DO);
  const inProgress = tasks.filter(
    (task) => task.status === TaskStatus.IN_PROGRESS,
  );
  const done = tasks.filter((task) => task.status === TaskStatus.DONE);
  return (
    <Card px={2} py={4} gap={4}>
      <h1 className="text-center text-xl font-bold">Tarefas</h1>
      <Line />
      <TasksTable title="To do" tasks={toDo} />
      <TasksTable title="In progress" tasks={inProgress} />
      <TasksTable title="Done" tasks={done} />
    </Card>
  );
}
