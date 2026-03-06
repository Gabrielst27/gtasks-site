import clsx from 'clsx';

type MainProps = {
  children: React.ReactNode;
} & React.ComponentProps<'main'>;

export async function Main({ children, className, ...rest }: MainProps) {
  return (
    <main className={clsx('min-h-lvh mx-6 mb-6 pt-6', className)} {...rest}>
      {children}
    </main>
  );
}
