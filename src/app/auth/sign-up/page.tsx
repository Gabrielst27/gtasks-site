import { SignUpForm } from '@/components/auth/SignUpForm';
import { Card } from '@/components/Card';
import clsx from 'clsx';

export default function SignUp() {
  return (
    <section
      className={clsx(
        'h-dvh',
        'flex flex-col items-center justify-between gap-8',
        'md:flex-row',
      )}
    >
      <div className="hidden flex-4 md:flex items-center justify-center">
        <h1 className="font-extrabold text-5xl">GTasks</h1>
      </div>
      <Card
        className={clsx(
          'flex-1',
          'pt-10 pb-20',
          'justify-center items-center gap-8 flex-col',
          'shadow-card-background shadow-xl',
          'md:mx-6 md:h-[90%] md:gap-24',
          'lg:flex-3',
        )}
      >
        <h1 className="font-bold text-2xl">Criar conta</h1>
        <SignUpForm />
      </Card>
    </section>
  );
}
