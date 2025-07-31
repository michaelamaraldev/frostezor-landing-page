import { ReactElement } from "react";

interface ServiceProps {
  title: string;
  description: string;
  icon: ReactElement;
}

export const Servico = ({ title, description, icon }: ServiceProps) => {
  return (
    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-md flex flex-col items-center text-center space-y-4 hover:shadow-lg transition">
      <div className="text-gray-700 dark:text-yellow-400 text-3xl">
        {icon}
      </div>
      <h3 className="text-gray-900 dark:text-white text-xl font-semibold">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};
