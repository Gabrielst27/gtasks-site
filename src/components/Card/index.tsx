import clsx from 'clsx';

type CardProps = {
  children: React.ReactNode;
} & React.ComponentProps<'div'>;

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={clsx(
        className,
        'shadow-md shadow-black',
        `px-2 py-2 my-4 w-full`,
        'bg-card-background rounded-2xl',
        `flex gap-2`,
      )}
    >
      {children}
    </div>
  );
}
