import { Main } from '@/components/layout/Main';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Gtasks',
    template: '%s | Gtasks',
  },
  description: 'A simple workspace',
};

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
}
