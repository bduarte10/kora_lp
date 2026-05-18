/**
 * Fotos Unsplash curadas — IDs estáveis verificados.
 * Tratamento padrão: B&W ou desaturado via CSS filter.
 *
 * Para trocar uma foto: pegar nova ID de unsplash.com, atualizar aqui.
 * URLs no formato images.unsplash.com são imutáveis por ID.
 */

const u = (id: string, w = 1600, q = 78) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const photos = {
  /** Hero: ambiente de trabalho contemplativo, perspectiva clean */
  hero: {
    src: u("photo-1497366216548-37526070297c", 2000),
    alt: "Reunião de planejamento em ambiente de trabalho moderno",
  },

  /** Proof: cena de operação real, foco em mãos/colaboração */
  proof: {
    src: u("photo-1551836022-deb4988cc6c0", 1600),
    alt: "Mãos em notebook durante implementação de processo",
  },
} as const;
