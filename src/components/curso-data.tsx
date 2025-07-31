import { GiGrenade, GiHiveMind } from "react-icons/gi";
import { FaRunning, FaCrosshairs } from "react-icons/fa";
import { TbCrosshair } from "react-icons/tb";
import { CiMap } from "react-icons/ci";

export const Curso = [
  {
    title: "Utilitárias",
    description: "Domine todos os tipos de granadas: smokes, flashes, HE e molotovs. Aprenda lineups essenciais para todos os mapas.",
    icon: <GiGrenade />,
  },
  {
    title: "Movimentação",
    description: "Técnicas de movimentação que lhe trarão vantagens competitivas: bunny hop, strafe, pre-aiming e posicionamento.",
    icon: <FaRunning />,
  },
  {
    title: "Mira",
    description: "Melhore sua mira com exercícios específicos, configurações otimizadas e técnicas de aim profissional.",
    icon: <TbCrosshair />,
  },
  {
    title: "AWP",
    description: "Aprenda a utilizar a arma mais importante do CS.",
    icon: <FaCrosshairs />,
  },
  {
    title: "Mapas",
    description: "Entenda cada pixel, ângulo, timings e estratégias específicas para cada mapa do pool competitivo.",
    icon: <CiMap />,
  },
  {
    title: "Game Sense",
    description: "Desenvolva o raciocínio tático: leitura de jogo, decisões rápidas e antecipação de jogadas adversárias.",
    icon: <GiHiveMind />,
  },
];