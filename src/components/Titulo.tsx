interface TituloProps {
  children: React.ReactNode;
  level?: number;
  className?: string;
}

export const Titulo = ({ children, level = 1, className = "" }: TituloProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseClasses = "font-semibold text-2xl sm:text-3xl md:text-4xl";
  
  return (
    <HeadingTag className={`${baseClasses} ${className}`}>
      {children}
    </HeadingTag>
  );
};