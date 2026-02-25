import { AvatarPreview } from '@/components/AvatarPreview';
import clsx from 'clsx';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className={clsx('h-30 p-6', 'flex items-center justify-between')}>
      <button className="md:hidden">
        <Menu />
      </button>
      <a href="/" className="font-bold text-3xl">
        GTasks
      </a>
      <AvatarPreview />
    </header>
  );
}
