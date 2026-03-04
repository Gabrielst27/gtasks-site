'use client';

import { AvatarPreview } from '@/components/AvatarPreview';
import { Line } from '@/components/Line';
import { useSidebar } from '@/contexts/sidebar.context';
import { ERoutes } from '@/utils/routes.enum';
import clsx from 'clsx';
import { Menu } from 'lucide-react';
import { Bounce, ToastContainer } from 'react-toastify';

export function WorkspaceHeader() {
  const { toggle } = useSidebar();

  return (
    <header>
      <div className={clsx('h-30 p-6', 'flex items-center justify-between')}>
        <button onClick={toggle} className="md:hidden cursor-pointer">
          <Menu />
        </button>
        <a href={ERoutes.WORKSPACE} className="font-bold text-3xl">
          GTasks
        </a>
        <AvatarPreview />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <Line />
    </header>
  );
}
