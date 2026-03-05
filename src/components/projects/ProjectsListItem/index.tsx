import { CardLink } from '@/components/CardLink';
import { ProjectModel } from '@/models/project';
import { ERoutes } from '@/utils/routes.enum';
import clsx from 'clsx';

export type ProjectsListItemProps = {
  project: ProjectModel;
};

export function ProjectsListItem({ project }: ProjectsListItemProps) {
  //TODO: create button component
  //TODO: implement Link to redirect to project page on click
  //TODO: create options button
  return (
    <CardLink
      className="flex-col p-4"
      href={`${ERoutes.PROJECTS}/${project.slug}`}
      aria-label={`Navegar para o projeto: ${project.name}`}
    >
      <h1 className="text-xl font-bold min-w-0">{project.name}</h1>
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
