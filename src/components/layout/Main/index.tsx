type MainProps = {
  children: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return (
    <main className="p-6 sm:mx-20 md:mx-30 lg:mx-40 xl:mx-50">{children}</main>
  );
}
