'use client';

import { Avatar } from '@/components/Avatar';
import { Line } from '@/components/Line';
import { useProfileMenu } from '@/contexts/profile-menu.context';
import clsx from 'clsx';

export function ProfileMenu() {
  const { isOpen, close } = useProfileMenu();

  //TODO: implement logout

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
          <h1>Nome do usuário</h1>
        </div>
        <Line />
        <div className="flex flex-col items-center justify-center gap-4">
          <button className="cursor-pointer">Sair</button>
        </div>
      </div>
    </div>
  );
}
