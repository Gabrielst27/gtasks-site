import { WorkspaceHeader } from '@/components/layout/workspace/WorkspaceHeader';
import { Main } from '@/components/layout/Main';
import { WorkspaceProfileMenu } from '@/components/layout/workspace/WorkspaceProfileMenu';
import { WorkspaceSidebar } from '@/components/layout/workspace/WorkspaceSidebar';
import { ProfileMenuProvider } from '@/contexts/profile-menu.context';
import { SidebarProvider } from '@/contexts/sidebar.context';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { getProfile } from '@/lib/auth/manage-login';

export const metadata: Metadata = {
  title: 'Workspace',
  description: 'A simple workspace',
};

type AppLayoutProps = {
  children: React.ReactNode;
};

export default async function AppLayout({ children }: AppLayoutProps) {
  const profile = await getProfile();
  return (
    <>
      <ProfileMenuProvider>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <WorkspaceSidebar
              profile={profile}
              className="fixed left-0 top-0 h-screen w-screen md:w-48"
            />
            <div className="md:ml-48 flex flex-1 flex-col">
              <WorkspaceHeader />
              <Suspense>
                <Main className="flex-1 overflow-y-auto">{children}</Main>
              </Suspense>
            </div>
            <WorkspaceProfileMenu profile={profile} />
          </div>
        </SidebarProvider>
      </ProfileMenuProvider>
    </>
  );
}
