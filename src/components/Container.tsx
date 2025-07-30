interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`mx-auto max-w-6xl w-full px-5 sm:px-8 md:px- lg:px-7  ${className}`}
    >
      {children}
    </div>
  );
};
