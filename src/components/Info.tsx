import { Paragrafo } from "@/components/Paragrafo";

interface InfoProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const Info = ({ title, description, children }: InfoProps) => {
  return (
    <div className="p-6 lg:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="rounded-xl bg-white dark:bg-gray-700 p-4 mb-4 shadow-sm">
        {children}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <Paragrafo className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {description}
      </Paragrafo>
    </div>
  );
};