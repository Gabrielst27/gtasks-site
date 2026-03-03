import { AppHeader } from '@/components/layout/AppHeader';
import { Main } from '@/components/layout/Main';
import { ProfileMenu } from '@/components/layout/ProfileMenu';
import { Sidebar } from '@/components/layout/Sidebar';
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
  <ProfileMenuProvider>
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar className="fixed left-0 top-0 h-screen w-screen md:w-48" />
        <div className="md:ml-48 flex flex-1 flex-col">
          <AppHeader />
          <Suspense>
            <Main className="flex-1 overflow-y-auto">{children}</Main>
          </Suspense>
        </div>
        <ProfileMenu />
      </div>
    </SidebarProvider>
  </ProfileMenuProvider>;
}
