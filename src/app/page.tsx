import Header from '@/sections/Header';
import { Inicio } from "@/sections/Inicio";
import { Sobre } from "@/sections/Sobre";
import { Curso } from "@/sections/Curso";
import { Precos } from "@/sections/Precos";

export default function Home() {
  return (
    <>
      <Header />
      <Inicio />
      <Sobre />
      <Curso />
      <Precos />
    </>
  );
}