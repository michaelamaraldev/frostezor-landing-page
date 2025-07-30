'use client';

import Image from 'next/image';
import ArrowIcon from '@/assets/arrow-right.svg';
import karambit from '@/assets/karambit.png';

export const Inicio = () => {
  return (
    <section id="inicio" className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip relative">
      <div className="container relative">
        <div className="md:flex items-center gap-12">
          <div className="md:w-[478px] z-10">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight 
                        bg-white text-black dark:bg-black dark:text-white dark:border-white/10"> 
              Seu jogo melhora aqui
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black dark:from-white to-[#001E80] text-transparent bg-clip-text mt-6">
              Aprenda com um profissional
            </h1>

            <p className="text-xl tracking-tight mt-6 text-[#010D3E] dark:text-white">
              Aprenda as técnicas de jogo avançadas, estratégias profissionais e desenvolva suas habilidades no CS com o melhor curso online.
              Transforme sua gameplay e eleve seu nível.
            </p>

            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">
                Aula grátis
              </button>

              <button className="btn btn-text gap-1">
                <span>Conheça mais</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-12 md:mt-0 md:flex-1 relative z-0">
            <div className="relative aspect-video bg-black/10 rounded-xl overflow-hidden backdrop-blur-sm border border-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors shadow-lg">
                  <div className="w-0 h-0 border-l-[16px] border-l-black border-y-[12px] border-y-transparent ml-1"></div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 text-white z-10">
                <p className="text-sm font-medium">Preview do curso</p>
              </div>

              <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded z-10">
                2:30
              </div>
            </div>
          </div>

          <Image
            src={karambit}
            width={220}
            height={220}
            alt="karambit"
            className="block absolute z-20 top-24 right-4 md:top-32 md:left-[30%] animate-float"
          />
        </div>
      </div>
    </section>
  );
};