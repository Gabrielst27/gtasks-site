import { SingleProject } from '@/components/projects/SingleProject';
import { getCurrentSession } from '@/lib/auth/manage-login';
import { getProjectBySlugCached } from '@/lib/projects/queries/get-projects';
import { ErrorMessages } from '@/utils/error-messages.enum';
import { Metadata } from 'next';

export type ProjectSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const token = await getCurrentSession();
  if (!token) {
    return {
      title: ErrorMessages.UNAUTHORIZED,
    };
  }
  const project = await getProjectBySlugCached(slug, token);
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectSlugPage({
  params,
}: ProjectSlugPageProps) {
  const { slug } = await params;
  const token = await getCurrentSession();
  if (!token) {
    return null;
  }
  try {
    const project = await getProjectBySlugCached(slug, token);
    return (
      <section>
        <SingleProject project={project} />
      </section>
    );
  } catch (e) {
    return null;
  }
}
