import { ProjectsListItem } from '@/components/projects/ProjectsListItem';
import { getProjectsCached } from '@/lib/projects/queries/get-projects';

export async function ProjectsList() {
  const projectsResponse = await getProjectsCached();
  let content: React.ReactNode = (
    <div>
      <h1>Nenhum projeto ainda</h1>
    </div>
  );
  if (projectsResponse.items && projectsResponse.items.length) {
    content = (
      <div>
        {projectsResponse.items.map((project) => {
          return <ProjectsListItem key={project.id} project={project} />;
        })}
      </div>
    );
  }
  return content;
}
