interface ParagrafoProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragrafo = ({ children, className = "" }: ParagrafoProps) => {
  return (
    <p className={`text-lg leading-relaxed text-gray-700 dark:text-gray-300 ${className}`}>
      {children}
    </p>
  );
};