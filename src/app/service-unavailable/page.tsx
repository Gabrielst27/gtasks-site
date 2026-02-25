import { Container } from '@/components/Container';
import clsx from 'clsx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviço indisponível',
  description: 'Nossos serviços estão temporariamente indisponíveis',
};

export default function ServiceUnavailablePage() {
  return (
    <section>
      <Container
        className={clsx(
          'flex flex-col gap-6',
          'bg-text-background',
          'rounded-2xl',
          'p-6 text-center',
        )}
      >
        <h1 className="text-xl font-bold">503 - Serviço indisponível</h1>
        <p>
          Oops... Nossos serviços estão temporariamente indisponíveis. Não se
          preocupe, logo disponibilizaremos novamente!
        </p>
      </Container>
    </section>
  );
}
