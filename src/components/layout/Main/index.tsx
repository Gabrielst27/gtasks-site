type MainProps = {
  children: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return <main className="p-6">{children}</main>;
}
