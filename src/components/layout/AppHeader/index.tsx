'use client';

import { AvatarPreview } from '@/components/AvatarPreview';
import { useSidebar } from '@/contexts/sidebar.context';
import clsx from 'clsx';
import { Menu } from 'lucide-react';

export function AppHeader() {
  const { toggle } = useSidebar();

  return (
    <header className={clsx('h-30 p-6', 'flex items-center justify-between')}>
      <button onClick={toggle} className="md:hidden cursor-pointer">
        <Menu />
      </button>
      <a href="/" className="font-bold text-3xl">
        GTasks
      </a>
      <AvatarPreview />
    </header>
  );
}
