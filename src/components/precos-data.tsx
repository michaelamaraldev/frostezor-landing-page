interface PlanoPreco {
  titulo: string;
  preco: string;
  recursos: string[];
  melhorEscolha?: boolean;
}

export const precosData: PlanoPreco[] = [
  {
    titulo: "Iniciante",
    preco: "R$ 97",
    recursos: [
      "Acesso às aulas básicas",
      "Configurações otimizadas", 
      "Suporte por email",
      "Materiais complementares",
    ],
  },
  {
    titulo: "Pro",
    preco: "R$ 197",
    recursos: [
      "Tudo do plano Iniciante",
      "Aulas avançadas de estratégia",
      "Análise de demos personalizada",
      "Suporte prioritário",
      "Grupo exclusivo no Discord",
    ],
    melhorEscolha: true,
  },
  {
    titulo: "Elite", 
    preco: "R$ 397",
    recursos: [
      "Tudo do plano Pro",
      "Mentoria individual 1:1",
      "Revisão de gameplay personalizada",
      "Acesso vitalício ao conteúdo",
      "Suporte 24/7",
    ],
  },
];