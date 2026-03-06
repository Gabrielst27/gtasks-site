import { CardLink } from '@/components/CardLink';
import { ProjectsList } from '@/components/projects/ProjectsList';
import { getProfile } from '@/lib/auth/manage-login';
import { Role } from '@/models/user';
import { ERoutes } from '@/utils/routes.enum';
import { Plus } from 'lucide-react';
import { Activity, Suspense } from 'react';

export default async function AppPage() {
  const profile = await getProfile();
  if (!profile) {
    return null;
  }
  const isAdmin = profile.role === Role.ADMIN;
  return (
    <section>
      <Activity mode={isAdmin ? 'visible' : 'hidden'}>
        <CardLink href={ERoutes.NEW_PROJECT}>
          <div className="cursor-pointer flex justify-center items-center gap-2">
            <Plus width={20} />
            Novo Projeto
          </div>
        </CardLink>
      </Activity>
      <Suspense>
        <ProjectsList />
      </Suspense>
    </section>
  );
}
