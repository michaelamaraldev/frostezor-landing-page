'use client';

import { useState } from 'react';
import ArrowRight from "@/assets/arrow-right.svg"; 
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useThemeStore } from '../store/ThemeStore';

const Header = () => {
  const { toggleTheme, theme } = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Eleve sua performance no Counter-Strike!
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Aprenda com um profissional</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? (
                <IoIosClose className="h-5 w-5 text-black dark:text-white" /> 
              ) : (
                <IoIosMenu className="h-5 w-5 text-black dark:text-white" />
              )}
            </button>

            <nav className="hidden md:flex gap-6 text-black/60 dark:text-gray-300 items-center">
              <a href="#inicio" className="hover:text-black dark:hover:text-white transition-colors">Início</a>
              <a href="#sobre" className="hover:text-black dark:hover:text-white transition-colors">Sobre</a>
              <a href="#curso" className="hover:text-black dark:hover:text-white transition-colors">Curso</a>
              <a href="#precos" className="hover:text-black dark:hover:text-white transition-colors">Preços</a>
              <button className="btn btn-primary">
                Garanta já
              </button>

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-700 dark:text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                )}
              </button>
            </nav>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-30 flex items-center justify-center"> 
          <div className="w-full max-w-sm bg-white dark:bg-gray-900 h-full py-10 px-6 relative flex flex-col items-center justify-center">
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-5 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-label="Fechar menu"
            >
              <IoIosClose className="h-6 w-6 text-black dark:text-white" />
            </button>

            <nav className="flex flex-col gap-6 text-2xl text-black dark:text-white items-center">
              <a href="#inicio" onClick={toggleMenu} className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Início</a>
              <a href="#sobre" onClick={toggleMenu} className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Sobre</a>
              <a href="#curso" onClick={toggleMenu} className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Curso</a>
              <a href="#precos" onClick={toggleMenu} className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Preços</a>
              <button className="btn btn-primary mt-6" onClick={toggleMenu}>
                Garanta já
              </button>
              <button
                onClick={() => { toggleTheme(); toggleMenu(); }}
                aria-label="Toggle theme"
                className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mt-4"
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                )}
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;