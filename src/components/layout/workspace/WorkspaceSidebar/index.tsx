'use client';

import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Dialog } from '@/components/Dialog';
import { ProfileContainer } from '@/components/ProfileContainer';
import { useSidebar } from '@/contexts/sidebar.context';
import { logout } from '@/lib/auth/manage-login';
import { ProfileDto } from '@/utils/dto/users/profile.dto';
import { ERoutes } from '@/utils/routes.enum';
import clsx from 'clsx';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Suspense, useState, useTransition } from 'react';

export type SidebarProps = {
  profile: ProfileDto;
} & React.ComponentProps<'div'>;

export function WorkspaceSidebar({
  profile,
  className,
  ...rest
}: SidebarProps) {
  const { isOpen, close } = useSidebar();
  //TODO: implement logout
  //TODO: implement find user
  const [isExitPending, startExitTransition] = useTransition();
  const [isExitDialogOpen, setExitDialog] = useState(false);

  const router = useRouter();
  function handleExitCancel() {
    setExitDialog(false);
  }

  async function handleExitConfirm() {
    startExitTransition(async () => {
      await logout();
      handleExitCancel();
      router.push(ERoutes.LOGIN);
    });
  }

  return (
    <>
      <Dialog
        isVisible={isExitDialogOpen}
        title="Deseja sair?"
        content="Sua sessão irá expirar e será necessário realizar login para acessar sua conta"
        onCancel={handleExitCancel}
        onConfirm={handleExitConfirm}
        disabled={isExitPending}
      />
      <div
        onClick={close}
        className={clsx(
          isOpen ? 'flex' : 'hidden',
          'md:flex',
          'backdrop-blur-xs',
          className,
        )}
      >
        <div
          role="sidebar"
          aria-modal={true}
          onClick={(e) => e.stopPropagation()}
          className={clsx(
            'flex flex-col justify-start md:justify-between',
            'w-48',
            'py-6 px-2',
            'shadow-xl shadow-black',
            'bg-card-background',
            ' rounded-2xl',
          )}
          {...rest}
        >
          <div className="md:hidden">
            <h1 className="text-center text-3xl font-black p-6 border-b mb-6">
              GTasks
            </h1>
          </div>
          <div className="w-full flex flex-col">
            <div className="hidden md:flex w-full border-b flex-col items-center justify-center gap-4 p-4 mb-4">
              <Avatar />
              <h1>{profile.name}</h1>
            </div>
            <div className="w-full flex flex-col items-center justify-start">
              <a href={ERoutes.WORKSPACE}>Workspace</a>
            </div>
          </div>
          <div className="hidden w-full md:flex flex-col items-center justify-start">
            <Button
              onClick={() => {
                setExitDialog(true);
              }}
              variant="icon"
              text="Sair"
              icon={LogOut}
            />
          </div>
        </div>
      </div>
    </>
  );
}
