interface ParagrafoProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragrafo = ({ children, className = "" }: ParagrafoProps) => {
  return (
    <p className={`text-heading-3 md:text-lg dark:text-white ${className}`}> {children} </p>
  );
};