import { ProjectsListItem } from '@/components/projects/ProjectsListItem';
import { getProjectsCached } from '@/lib/queries/get-projects';
import { Suspense } from 'react';

export async function ProjectsList() {
  const projects = await getProjectsCached();
  return (
    <div>
      {projects.map((project) => {
        return <ProjectsListItem key={project.id} project={project} />;
      })}
    </div>
  );
}
