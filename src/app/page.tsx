import { CardLink } from '@/components/CardLink';
import { ProjectsList } from '@/components/projects/ProjectsList';
import { Plus } from 'lucide-react';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <section>
      <CardLink href={'/projects/new-project'}>
        <div className="cursor-pointer flex justify-center items-center gap-2">
          <Plus width={20} />
          Novo Projeto
        </div>
      </CardLink>
      <Suspense>
        <ProjectsList />
      </Suspense>
    </section>
  );
}
