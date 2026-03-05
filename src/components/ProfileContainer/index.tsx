'use client';

import { Avatar } from '@/components/Avatar';

export function ProfileContainer() {
  return (
    <div className="hidden md:flex w-full border-b flex-col items-center justify-center gap-4 p-4 mb-4">
      <Avatar />
      <h1>Nome do usuário</h1>
    </div>
  );
}
