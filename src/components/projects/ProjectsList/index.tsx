import { ProjectsListItem } from '@/components/projects/ProjectsListItem';
import { getCurrentSession } from '@/lib/auth/manage-login';
import { getProjectsCached } from '@/lib/projects/queries/get-projects';
import { ErrorMessages } from '@/utils/error-messages.enum';
import { ERoutes } from '@/utils/routes.enum';
import { redirect } from 'next/navigation';

export async function ProjectsList() {
  const token = await getCurrentSession();
  if (!token) {
    return null;
  }
  let content: React.ReactNode = (
    <div>
      <h1>Nenhum projeto ainda</h1>
    </div>
  );
  try {
    const projectsResponse = await getProjectsCached(token);
    if (projectsResponse.items && projectsResponse.items.length) {
      content = (
        <div>
          {projectsResponse.items.map((project) => {
            return <ProjectsListItem key={project.id} project={project} />;
          })}
        </div>
      );
    }
  } catch (e) {
    if (e instanceof Error) {
      if (e.message === ErrorMessages.UNAUTHORIZED) {
        redirect(ERoutes.LOGIN);
      }
    }
  }

  return content;
}
