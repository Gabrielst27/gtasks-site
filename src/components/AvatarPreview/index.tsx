'use client';

import { useProfileMenu } from '@/contexts/profile-menu.context';
import { User } from 'lucide-react';

export function AvatarPreview() {
  const { toggle } = useProfileMenu();

  return (
    <button onClick={toggle}>
      <User className="md:hidden w-8 h-8 cursor-pointer" />
    </button>
  );
}
