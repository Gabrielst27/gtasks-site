import { SingleProject } from '@/components/projects/SingleProject';
import { getCurrentSession } from '@/lib/auth/manage-login';
import { getProjectBySlugCached } from '@/lib/projects/queries/get-projects';
import { Metadata } from 'next';

export type ProjectSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const token = await getCurrentSession();
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
  const project = await getProjectBySlugCached(slug, token);
  return (
    <section>
      <SingleProject project={project} />
    </section>
  );
}
