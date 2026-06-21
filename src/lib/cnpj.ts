export type CnpjEnrichment = {
  cnpj: string;
  razaoSocial?: string;
  nomeFantasia?: string;
  cidade?: string;
  uf?: string;
  cnaeFiscal?: number;
  atividadePrincipal?: string;
  situacaoCadastral?: string;
};

type BrasilApiCnpjResponse = {
  cnpj?: string;
  razao_social?: string;
  nome_fantasia?: string;
  municipio?: string;
  uf?: string;
  cnae_fiscal?: number;
  cnae_fiscal_descricao?: string;
  descricao_situacao_cadastral?: string;
};

export function normalizeCnpj(value?: string | null) {
  const digits = value?.replace(/\D/g, "") ?? "";
  return digits.length === 14 ? digits : "";
}

export async function enrichCnpj(cnpjValue?: string | null): Promise<CnpjEnrichment | undefined> {
  const cnpj = normalizeCnpj(cnpjValue);
  if (!cnpj) return undefined;

  try {
    const res = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`, {
      signal: AbortSignal.timeout(2500),
      next: { revalidate: 60 * 60 * 24 * 7 },
    });

    if (!res.ok) return { cnpj };

    const data = (await res.json()) as BrasilApiCnpjResponse;
    return {
      cnpj,
      razaoSocial: data.razao_social,
      nomeFantasia: data.nome_fantasia,
      cidade: data.municipio,
      uf: data.uf,
      cnaeFiscal: data.cnae_fiscal,
      atividadePrincipal: data.cnae_fiscal_descricao,
      situacaoCadastral: data.descricao_situacao_cadastral,
    };
  } catch (error) {
    console.warn("[cnpj] consulta falhou:", error);
    return { cnpj };
  }
}
