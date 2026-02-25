import { Avatar } from '@/components/Avatar';
import clsx from 'clsx';

export type SidebarProps = React.ComponentProps<'div'>;

export function Sidebar({ className, ...rest }: SidebarProps) {
  //TODO: implement find user
  return (
    <div
      className={clsx(
        'flex-col items-center justify-start',
        'py-6 px-2',
        'bg-card-background',
        ' rounded-2xl',
        className,
      )}
      {...rest}
    >
      <div className="w-full flex flex-col items-center justify-center gap-4 pb-4 mb-4 border-b">
        <Avatar />
        <h1>Nome do usuário</h1>
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <a href="/">Home</a>
      </div>
    </div>
  );
}
