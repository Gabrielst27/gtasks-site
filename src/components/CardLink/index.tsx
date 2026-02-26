import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';

type CardLinkProps = {
  children: React.ReactNode;
  href: string;
} & LinkProps &
  React.ComponentProps<'div'>;

export function CardLink({ href, className, children }: CardLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'shadow-md shadow-black',
        `p-2 my-4 w-full`,
        'bg-card-background rounded-2xl',
        `flex justify-center gap-2`,
        'cursor-pointer',
        className,
      )}
    >
      {children}
    </Link>
  );
}
