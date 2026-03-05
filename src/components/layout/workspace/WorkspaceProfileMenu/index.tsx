'use client';

import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Dialog } from '@/components/Dialog';
import { Line } from '@/components/Line';
import { useProfileMenu } from '@/contexts/profile-menu.context';
import { logout } from '@/lib/auth/manage-login';
import { ProfileDto } from '@/utils/dto/users/profile.dto';
import { ERoutes } from '@/utils/routes.enum';
import clsx from 'clsx';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

type WorkspaceProfileMenuProps = {
  profile: ProfileDto;
};

export function WorkspaceProfileMenu({ profile }: WorkspaceProfileMenuProps) {
  const { isOpen, close } = useProfileMenu();
  const [isExitPending, startExitTransition] = useTransition();
  const [isExitDialogOpen, setExitDialog] = useState(false);

  const router = useRouter();
  //TODO: implement find user

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
    <div
      onClick={close}
      className={clsx(
        isOpen ? 'flex justify-end' : 'hidden',
        'backdrop-blur-xs',
        'fixed right-0 left-0 top-0 h-screen w-screen',
      )}
    >
      <div
        role="profile-menu"
        aria-modal={true}
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          'space-y-4',
          'shadow-xl shadow-black',
          'p-6 w-56',
          'bg-card-background',
          ' rounded-2xl',
        )}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <Avatar />
          <h1>{profile.name}</h1>
        </div>
        <Line />
        <div className="flex flex-col items-center justify-center gap-4">
          <Button
            onClick={() => {
              setExitDialog(true);
            }}
            variant="icon"
            text="Sair"
            icon={LogOut}
          />
          <Dialog
            isVisible={isExitDialogOpen}
            title="Deseja sair?"
            content="Sua sessão irá expirar e será necessário realizar login para acessar sua conta"
            onCancel={handleExitCancel}
            onConfirm={handleExitConfirm}
            disabled={isExitPending}
          />
        </div>
      </div>
    </div>
  );
}
