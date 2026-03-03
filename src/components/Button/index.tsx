'use client';

import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';

type ButtonProps = {
  text?: string;
  icon?: LucideIcon;
  variant?: 'default' | 'ghost' | 'danger' | 'icon';
} & React.ComponentProps<'button'>;

export function Button({
  text,
  icon: Icon,
  variant = 'default',
  className,
  ...props
}: ButtonProps) {
  const buttonVariants = {
    default: clsx(
      'bg-blue-500 text-slate-100',
      'py-2 px-8 rounded-lg',
      'cursor-pointer',
    ),
    ghost: clsx(
      'bg-slate-300 text-slate-900',
      'py-2 px-8 rounded-lg',
      'cursor-pointer',
    ),
    danger: clsx(
      'bg-red-400 text-slate-100',
      'py-2 px-8 rounded-lg',
      'cursor-pointer',
    ),
    icon: clsx('text-slate-100', 'p-0 rounded-lg', 'cursor-pointer'),
  };
  const classes = clsx(
    buttonVariants[variant],
    'disabled:bg-slate-200',
    'disabled:text-slate-400',
    'disabled:cursor-not-allowed',
    'flex items-center justify-center',
    className,
  );
  return (
    <button
      className={clsx('flex items-center gap-2', `${classes}`)}
      {...props}
    >
      {Icon && <Icon>{text}</Icon>}
      {text}
    </button>
  );
}
