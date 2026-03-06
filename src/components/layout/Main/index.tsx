import clsx from 'clsx';

type MainProps = {
  children: React.ReactNode;
} & React.ComponentProps<'main'>;

export async function Main({ children, className, ...rest }: MainProps) {
  return (
    <main className={clsx('min-h-lvh', className)} {...rest}>
      {children}
    </main>
  );
}
