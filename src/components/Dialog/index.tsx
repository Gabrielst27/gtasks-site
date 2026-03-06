import { Button } from '@/components/Button';
import clsx from 'clsx';

type DialogProps = {
  isVisible: boolean;
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
};

export function Dialog({
  isVisible = false,
  title,
  content,
  onConfirm,
  onCancel,
  disabled,
}: DialogProps) {
  if (!isVisible) return null;

  const classes = clsx(
    'fixed z-50 top-0 bottom-0 left-0 right-0',
    'flex items-center justify-center',
  );
  return (
    <div className={classes} aria-modal={true} onClick={onCancel}>
      <div
        className={clsx(
          'w-full max-w-120 m-10 p-6',
          'bg-background shadow-2xl shadow-black',
          'rounded-2xl',
          'flex flex-col gap-6 justify-between items-center',
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-center">{content}</p>
        <div className="w-full flex justify-around">
          <Button
            onClick={onCancel}
            variant="ghost"
            text="Não"
            disabled={disabled}
          ></Button>
          <Button
            onClick={onConfirm}
            variant="danger"
            text="Sim"
            disabled={disabled}
          ></Button>
        </div>
      </div>
    </div>
  );
}
