import clsx from 'clsx';

type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div
      className={clsx(
        'p-4 my-4 w-full',
        'bg-card-background',
        'rounded-2xl',
        'flex flex-col gap-2',
      )}
    >
      {children}
    </div>
  );
}
