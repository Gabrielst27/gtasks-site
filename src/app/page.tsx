import { ProjectsList } from '@/components/projects/ProjectsList';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <section>
      <Suspense>
        <ProjectsList />
      </Suspense>
    </section>
  );
}
