import { CardLink } from '@/components/CardLink';
import { ProjectModel } from '@/models/project';
import clsx from 'clsx';
import { Ellipsis } from 'lucide-react';
import Link from 'next/link';

export type ProjectsListItemProps = {
  project: ProjectModel;
};

export function ProjectsListItem({ project }: ProjectsListItemProps) {
  //TODO: create button component
  //TODO: implement Link to redirect to project page on click
  //TODO: create options button
  return (
    <CardLink
      href={`projects/${project.slug}`}
      aria-label={`Navegar para o projeto: ${project.name}`}
    >
      <div className="flex items-start justify-between gap-6">
        <h1 className="text-xl font-bold min-w-0">{project.name}</h1>
        <button className="shrink-0">
          <Ellipsis />
        </button>
      </div>
      <div
        className={clsx(
          'bg-text-background',
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
    </CardLink>
  );
}
