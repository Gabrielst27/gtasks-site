import clsx from 'clsx';

export type SidebarProps = React.ComponentProps<'div'>;

export function Sidebar({ className, ...rest }: SidebarProps) {
  return (
    <div
      className={clsx(
        'items-start justify-start',
        'p-6',
        'bg-card-background',
        ' rounded-2xl',
        className,
      )}
      {...rest}
    >
      <a href="/">Home</a>
    </div>
  );
}
