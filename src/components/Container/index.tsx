export type ContainerProps = {
  children: React.ReactNode;
} & React.ComponentProps<'div'>;

export function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
