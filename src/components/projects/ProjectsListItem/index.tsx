import { ProjectModel } from '@/models/project';
import clsx from 'clsx';
import { Ellipsis } from 'lucide-react';

export type ProjectsListItemProps = {
  project: ProjectModel;
};

export function ProjectsListItem({ project }: ProjectsListItemProps) {
  //TODO: create button component
  //TODO: implement Link to redirect to project page on click
  //TODO: create options button
  return (
    <div
      className={clsx(
        'p-4 my-4 w-full',
        'bg-card-background',
        'rounded-2xl',
        'flex flex-col gap-2',
      )}
    >
      <div className="flex justify-between gap-6">
        <h1 className="text-xl font-bold truncate">{project.name}</h1>
        <button>
          <Ellipsis />
        </button>
      </div>
      <div
        className={clsx(
          'bg-background',
          'p-4',
          'rounded-2xl',
          'flex flex-col gap-2',
        )}
      >
        <h2 className="font-bold">Descrição do projeto:</h2>
        {!!project.description && (
          <p className="line-clamp-6">{project.description}</p>
        )}
        {!project.description && (
          <p className="italic text-slate-500">Sem descrição.</p>
        )}
      </div>
    </div>
  );
}
