import { WorkspaceHeader } from '@/components/layout/workspace/WorkspaceHeader';
import { Main } from '@/components/layout/Main';
import { WorkspaceProfileMenu } from '@/components/layout/workspace/WorkspaceProfileMenu';
import { WorkspaceSidebar } from '@/components/layout/workspace/WorkspaceSidebar';
import { ProfileMenuProvider } from '@/contexts/profile-menu.context';
import { SidebarProvider } from '@/contexts/sidebar.context';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Gtasks',
    template: '%s | Gtasks',
  },
  description: 'A simple workspace',
};

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <ProfileMenuProvider>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <WorkspaceSidebar className="fixed left-0 top-0 h-screen w-screen md:w-48" />
            <div className="md:ml-48 flex flex-1 flex-col">
              <WorkspaceHeader />
              <Suspense>
                <Main className="flex-1 overflow-y-auto">{children}</Main>
              </Suspense>
            </div>
            <WorkspaceProfileMenu />
          </div>
        </SidebarProvider>
      </ProfileMenuProvider>
    </>
  );
}
