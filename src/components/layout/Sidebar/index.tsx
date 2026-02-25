'use client';

import { Avatar } from '@/components/Avatar';
import { useSidebar } from '@/contexts/sidebar.context';
import clsx from 'clsx';

export type SidebarProps = React.ComponentProps<'div'>;

export function Sidebar({ className, ...rest }: SidebarProps) {
  const { isOpen, close } = useSidebar();
  //TODO: implement logout
  //TODO: implement find user
  return (
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
          'flex flex-col justify-between',
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
        <div className="hidden w-full md:flex flex-col">
          <div className="w-full border-b flex flex-col items-center justify-center gap-4 p-4 mb-4">
            <Avatar />
            <h1>Nome do usuário</h1>
          </div>
          <div className="w-full flex flex-col items-center justify-start">
            <a href="/">Home</a>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-start">
          <button className="cursor-pointer">Sair</button>
        </div>
      </div>
    </div>
  );
}
