// src/sections/Sobre.tsx
import { Info } from "@/components/Info";
import { Container } from "@/components/Container";
import { Paragrafo } from "@/components/Paragrafo";
import { Titulo } from "@/components/Titulo";
import { FaEye } from "react-icons/fa6";
import { TfiTarget } from "react-icons/tfi";

export const Sobre = () => {
  return (
    <section id="sobre">
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center md:items-start py-10 md:py-16">
        <div className="w-full md:w-5/12 lg:w-1/2 flex justify-center">
          <div className="w-full max-w-sm md:max-w-none aspect-square relative rounded-3xl shadow-lg overflow-hidden">
            <img
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/6b252c4a-4591-4328-894f-40a9d7b62f11-profile_image-300x300.png"
              className="w-full h-full object-cover"
              alt="frostezor"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
          <Titulo>Sobre o mentor</Titulo>
          <Paragrafo className="mt-4 mb-8">
            Cássio <strong>“frostezoR”</strong> Bergamo é ex-jogador profissional de Counter‑Strike e atual criador de conteúdo, com passagens por equipes como Keyd Stars, FURIA Academy, Santos e DETONA.
            Com anos de experiência no cenário competitivo, ele transforma seu conhecimento em ensino prático e acessível, ajudando jogadores a evoluírem com estratégias, disciplina e mentalidade de alto nível.
          </Paragrafo>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full">
            <Info
              title="Objetivo"
              description="Ajudar jogadores de CS2 a evoluírem de forma consistente, usando métodos do cenário profissional e focando em disciplina, leitura de jogo e desempenho individual."
            >
              <TfiTarget className="w-4 h-4 sm:w-5 sm:h-5 dark:text-white" />
            </Info>
            <Info
              title="Visão"
              description="Formar jogadores estratégicos e conscientes, preparados para se destacar com consistência em lobbys de alto nível em plataformas como FACEIT e Gamers Club, ou no cenário competitivo profissional."
            >
              <FaEye className="w-4 h-4 sm:w-5 sm:h-5 dark:text-white" />
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};