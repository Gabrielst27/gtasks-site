import { SingleProject } from '@/components/projects/SingleProject';
import { getProjectBySlugCached } from '@/lib/projects/queries/get-projects';
import { Metadata } from 'next';

export type ProjectSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlugCached(slug);
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectSlugPage({
  params,
}: ProjectSlugPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlugCached(slug);
  return (
    <section>
      <SingleProject project={project} />
    </section>
  );
}
