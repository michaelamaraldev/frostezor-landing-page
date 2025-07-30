interface TitleProps {
  children: React.ReactNode;
}

export const Titulo = ({ children }: TitleProps) => {
  return (
    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black dark:from-white to-[#001E80] text-transparent bg-clip-text mt-6">
      {children}
    </h1>
  );
};