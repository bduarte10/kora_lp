import { site } from "./site";

export const about = {
  eyebrow: "Quem faz",
  title: "Uma pessoa responde pelo seu relatório.",
  body: [
    "A KORA é a consultoria de Bruno Duarte, engenheiro de software. É ele quem assina o contrato e responde pelo relatório da sua clínica.",
    "A pesquisa de setembro que está nesta página foi feita assim: pergunta por pergunta, com data e print.",
  ],
  person: { name: "Bruno Duarte", role: "Fundador", initials: "BD" },
  facts: [
    { label: "Razão social", value: site.legalName },
    { label: "CNPJ", value: site.cnpj },
    {
      label: "Endereço",
      value: `${site.contact.address.street}, ${site.contact.address.city} - ${site.contact.address.state}`,
    },
  ],
} as const;
