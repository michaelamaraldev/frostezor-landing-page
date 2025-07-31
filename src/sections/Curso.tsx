"use client";

import { Curso as cursoData } from "@/components/curso-data";
import { Container } from "@/components/Container";
import { Paragrafo } from "@/components/Paragrafo";
import { Titulo } from "@/components/Titulo";
import { useState, useEffect } from "react";

export const Curso = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = cursoData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalItems);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalItems]);

  const goToPrev = () => {
    setCurrentIndex(prev => prev === 0 ? totalItems - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % totalItems);
  };

  return (
    <section id="curso" className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <Container className="space-y-12 md:space-y-16 flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Titulo level={2} className="text-gray-900 dark:text-white">
            Curso completo de CS
          </Titulo>
          <Paragrafo className="text-gray-700 dark:text-gray-300">
            Counter-Strike vai além da mira: é posicionamento, tempo de reação, leitura de jogo e estratégia. 
            Neste curso, você vai desenvolver cada uma dessas habilidades.
          </Paragrafo>
        </div>

        <div className="w-full max-w-2xl">
          <div className="min-h-[400px] w-full max-w-md mx-auto p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center space-y-6">
            <div className="text-8xl text-black dark:text-white mb-4">
              {cursoData[currentIndex]?.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
              {cursoData[currentIndex]?.title}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {cursoData[currentIndex]?.description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-8 mt-8">
          <button 
            onClick={goToPrev}
            aria-label="Item anterior"
            className="px-6 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
           
          <span className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
            {currentIndex + 1} / {totalItems}
          </span>
           
          <button 
            onClick={goToNext}
            aria-label="Próximo item"
            className="px-6 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
};