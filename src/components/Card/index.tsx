import clsx from 'clsx';

type CardProps = {
  children: React.ReactNode;
  px: number;
  py: number;
  gap: number;
};

export function Card({ px, py, gap, children }: CardProps) {
  return (
    <div
      className={clsx(
        'shadow-md shadow-black',
        `px-${px} py-${py} my-4 w-full`,
        'bg-card-background',
        'rounded-2xl',
        `flex flex-col gap-${gap}`,
      )}
    >
      {children}
    </div>
  );
}
