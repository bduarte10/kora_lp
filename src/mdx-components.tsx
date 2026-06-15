import type { MDXComponents } from "mdx/types";

/**
 * Estilos dos elementos MDX (corpo dos guias), alinhados ao design system da Kora.
 * Tipografia confortável para leitura longa, tabelas e listas legíveis — formato
 * que LLMs conseguem ler e citar com facilidade.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="display-balanced mt-12 scroll-mt-28 text-[length:var(--fs-h2)]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 scroll-mt-28 text-lg font-semibold tracking-[-0.02em]">{children}</h3>
    ),
    p: ({ children }) => <p className="mt-4 leading-relaxed text-foreground-muted">{children}</p>,
    ul: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground-muted">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-foreground-muted">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    a: ({ href, children }) => (
      <a
        href={href}
        className="font-medium text-coral underline underline-offset-2 hover:text-coral-deep"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-coral pl-4 text-foreground-muted italic">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border bg-background-elev px-3 py-2 text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-3 py-2 text-foreground-muted">{children}</td>
    ),
    code: ({ children }) => (
      <code className="rounded-sm bg-background-elev px-1.5 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
    hr: () => <hr className="mt-10 border-border" />,
    ...components,
  };
}
