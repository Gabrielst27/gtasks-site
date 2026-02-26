'use client';

import clsx from 'clsx';
import { useId } from 'react';

type InputTextProps = {
  labeltext?: string;
  labelPosition?: 'top' | 'left';
  maxLength: number;
} & React.ComponentProps<'input'>;

export function InputText({
  labelPosition: labelPosition = 'top',
  className,
  ...props
}: InputTextProps) {
  const inputId = useId();

  const containerProps = {
    top: clsx('flex flex-col gap-2'),
    left: clsx('flex gap-4'),
  };
  const containerClasses = containerProps[labelPosition];
  const labelClasses = props.readOnly ? clsx('text-slate-500') : clsx();
  const inputClasses = props.readOnly
    ? clsx(
        'text-slate-500',
        'outline-0',
        'border-b border-slate-500',
        'p-2',
        'focus:border-slate-100',
      )
    : clsx(
        'outline-0',
        'border-b border-slate-500',
        'p-2',
        'focus:border-slate-100',
      );

  return (
    <div className={containerClasses}>
      {props.labeltext && (
        <label className={labelClasses} htmlFor={inputId}>
          {props.labeltext}
        </label>
      )}
      <input id={inputId} {...props} className={inputClasses} />
    </div>
  );
}
