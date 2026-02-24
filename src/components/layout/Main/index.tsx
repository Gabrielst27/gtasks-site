import ServiceUnavailablePage from '@/app/service-unavailable/page';
import { checkApiHealth } from '@/lib/app/health-check';
import clsx from 'clsx';

type MainProps = {
  children: React.ReactNode;
} & React.ComponentProps<'main'>;

export async function Main({ children, className, ...rest }: MainProps) {
  const isHealthy = await checkApiHealth();
  const content: React.ReactNode = isHealthy ? (
    children
  ) : (
    <ServiceUnavailablePage />
  );
  return (
    <main className={clsx('border-t mx-6 mb-6 pt-6', className)} {...rest}>
      {content}
    </main>
  );
}
