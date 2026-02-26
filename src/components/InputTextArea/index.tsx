'use client';

import clsx from 'clsx';
import { useId } from 'react';

type InputTextAreaProps = {
  labeltext?: string;
  labelPosition?: 'top' | 'left';
  maxLength: number;
} & React.ComponentProps<'textarea'>;

export function InputTextArea({
  labelPosition: labelPosition = 'top',
  className,
  ...props
}: InputTextAreaProps) {
  const inputId = useId();

  const containerProps = {
    top: clsx('flex flex-col gap-2'),
    left: clsx('flex gap-4'),
  };
  const containerClasses = containerProps[labelPosition];
  const labelClasses = props.readOnly ? clsx('text-slate-500') : clsx();
  const inputClasses = clsx(
    'rounded-2xl',
    'bg-text-background',
    'px-4 py-2',
    'resize-none',
    'whitespace-pre-wrap',
    'wrap-break-word',
    'focus:border-slate-100',
    props.readOnly && 'text-slate-500',
    className,
  );

  return (
    <div className={containerClasses}>
      {props.labeltext && (
        <label className={labelClasses} htmlFor={inputId}>
          {props.labeltext}
        </label>
      )}
      <textarea id={inputId} {...props} className={inputClasses} />
    </div>
  );
}
