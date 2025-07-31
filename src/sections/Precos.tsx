import { FaRocket } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaFire } from "react-icons/fa6";
import { precosData } from "@/components/precos-data";
import { Container } from "@/components/Container";
import { Paragrafo } from "@/components/Paragrafo";
import { Titulo } from "@/components/Titulo";

interface PlanoPreco {
  titulo: string;
  preco: string;
  recursos: string[];
  melhorEscolha?: boolean;
}

export const Precos = () => {
  return (
    <section id="precos" className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <Container className="space-y-12 md:space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Titulo level={2} className="text-gray-900 dark:text-white">
            Preços
          </Titulo>
          <Paragrafo className="text-gray-700 dark:text-gray-300">
            Escolha o plano ideal para elevar seu nível no Counter-Strike.
          </Paragrafo>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {precosData.map((plano: PlanoPreco, index: number) => (
            <div key={index} className="relative group h-full cursor-pointer">
              {plano.melhorEscolha && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg z-20">
                  <FaFire /> Melhor Escolha
                </div>
              )}
              
              <div className={`relative overflow-hidden rounded-3xl h-full transition-all duration-500 transform
                ${plano.melhorEscolha 
                  ? 'bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700 p-[2px] shadow-2xl shadow-blue-500/25 group-hover:shadow-blue-500/40 group-hover:scale-105' 
                  : 'bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 p-[1px] group-hover:from-blue-400 group-hover:to-violet-500 dark:group-hover:from-blue-500 dark:group-hover:to-violet-600 group-hover:scale-102 shadow-xl group-hover:shadow-2xl'
                }
                group-hover:-translate-y-2
                ${plano.melhorEscolha ? 'mt-6' : 'mt-2'}
              `}>
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 flex flex-col h-full relative backdrop-blur-sm">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 transition-all duration-300
                      ${plano.melhorEscolha 
                        ? 'bg-gradient-to-br from-blue-500 to-violet-600 text-white group-hover:scale-110 group-hover:rotate-6' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-violet-100 dark:group-hover:from-blue-900 dark:group-hover:to-violet-900 group-hover:scale-110'
                      }
                    `}>
                      {index === 0 ? <FaRocket /> : index === 1 ? <FaStar /> : <FaCrown />}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {plano.titulo}
                    </h3>
                    
                    <div className="mt-4">
                      <span className="text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 group-hover:from-blue-600 group-hover:to-violet-600 bg-clip-text text-transparent transition-all duration-300">
                        {plano.preco}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="flex-1 space-y-4 mb-8">
                    {plano.recursos.map((recurso: string, indexRecurso: number) => (
                      <li key={indexRecurso} className="flex items-start gap-3 group/item">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center mt-0.5 transition-transform duration-300 group-hover/item:scale-125">
                          <FaUserCheck className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                          {recurso}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <button className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 transform
                      ${plano.melhorEscolha
                        ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 hover:-translate-y-1'
                        : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:text-white dark:hover:text-white hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-xl'
                      }
                    `}>
                      Escolher Plano
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
