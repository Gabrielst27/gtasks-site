'use client';

import { createContext, useContext, useState } from 'react';

type ContextType = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const ProfileMenuContext = createContext<ContextType | null>(null);

export function ProfileMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((p) => !p);
  const close = () => setIsOpen(false);

  return (
    <ProfileMenuContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </ProfileMenuContext.Provider>
  );
}

export function useProfileMenu() {
  const ctx = useContext(ProfileMenuContext);
  if (!ctx) {
    throw new Error('useProfileMenu must be used inside ProfileMenuProvider');
  }
  return ctx;
}
