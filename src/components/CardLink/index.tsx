import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';

type CardLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export function CardLink({ children, href }: CardLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'p-4 my-4 w-full',
        'bg-card-background',
        'rounded-2xl',
        'flex flex-col gap-2',
        'cursor-pointer',
      )}
    >
      {children}
    </Link>
  );
}
