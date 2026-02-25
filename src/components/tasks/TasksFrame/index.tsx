import { TasksTable } from '@/components/tasks/TasksTable';
import { getTasksCached } from '@/lib/tasks/queries/get-tasks';

type TasksFrameProps = {
  projectId: string;
};

export async function TasksFrame({ projectId }: TasksFrameProps) {
  const tasksResult = await getTasksCached(projectId);
  const tasks = tasksResult.items;
  return (
    <div>
      <TasksTable tasks={tasks} />
    </div>
  );
}
