import { Paragrafo } from "@/components/Paragrafo";

interface InfoProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const Info = ({ title, description, children }: InfoProps) => {
  return (
    <div
      className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg
                 shadow-box-shadow relative overflow-hidden flex flex-col items-center text-center" // Adicionado flexbox para centralizar conteúdo
    >
      <div className="rounded-2xl bg-body p-3 text-heading-1 w-max relative mx-auto mb-4"> {/* Adicionado mx-auto e mb-4 */}
        {children}
      </div>
      <h2 className="text-heading-2 w-max relative font-semibold md:text-xl dark:text-white mb-2"> {/* Adicionado mb-2 */}
        {title}
      </h2>
      <Paragrafo className="flex-grow">{description}</Paragrafo> {/* Adicionado flex-grow para parágrafo */}
    </div>
  );
};