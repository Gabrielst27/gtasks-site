import { TasksFrame } from '@/components/tasks/TasksFrame';
import { ProjectModel } from '@/models/project';
import clsx from 'clsx';
import { Suspense } from 'react';

type SingleProjectProps = {
  project: ProjectModel;
};

export function SingleProject({ project }: SingleProjectProps) {
  //TODO: implement get project collaborators
  return (
    <div className={clsx('flex flex-col gap-6')}>
      <h1 className="font-bold text-xl text-center">{project.name}</h1>
      <Suspense>
        <TasksFrame projectId={project.id} />
      </Suspense>
      <div className="mt-4 p-4 border-t flex flex-col gap-4">
        <h2 className="font-bold text-center ">Descrição</h2>
        {!!project.description && (
          <p className="text-center">{project.description}</p>
        )}
        {!project.description && (
          <p className="text-center italic text-slate-400">Sem descrição.</p>
        )}
      </div>
      <div className="mt-4 p-4 border-t flex flex-col gap-4">
        <h2 className="font-bold text-center ">Colaboradores</h2>
        <p className="text-center">colaboradores</p>
      </div>
    </div>
  );
}
