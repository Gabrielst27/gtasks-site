import { Line } from '@/components/Line';
import clsx from 'clsx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviço indisponível',
  description: 'Nossos serviços estão temporariamente indisponíveis',
};

export default function ServiceUnavailablePage() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div
        className={clsx(
          'bg-card-background',
          'w-96 h-96 m-1 sm:w-lg sm:h-128 md:w-2xl md:h-168',
          'flex items-center justify-center',
          'rounded-full',
        )}
      >
        <div
          className={clsx(
            'w-[110%]',
            'flex flex-col gap-6',
            'bg-text-background shadow-background shadow-lg',
            'rounded-2xl',
            'p-6 text-center',
          )}
        >
          <h1 className="text-xl font-bold">503 - Serviço indisponível</h1>
          <Line />
          <p>
            Oops... Nossos serviços estão temporariamente indisponíveis. Não se
            preocupe, logo disponibilizaremos novamente!
          </p>
        </div>
      </div>
    </section>
  );
}
