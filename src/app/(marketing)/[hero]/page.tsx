import { Hero1A, Hero1B, Hero1C } from "@/components/hero-variants/claro";
import { Hero3A, Hero3B, Hero3C } from "@/components/hero-variants/editorial";
import { Hero2A, Hero2B, Hero2C } from "@/components/hero-variants/escuro";
import { Hero4A, Hero4B, Hero4C } from "@/components/hero-variants/ousado";
import { HomeBody } from "@/components/sections/home-body";
import { type HeroVariantId, heroVariants } from "@/content/hero-variants";
import type { Metadata } from "next";
import type { ComponentType } from "react";

const heroes: Record<HeroVariantId, ComponentType> = {
  "1a": Hero1A,
  "1b": Hero1B,
  "1c": Hero1C,
  "2a": Hero2A,
  "2b": Hero2B,
  "2c": Hero2C,
  "3a": Hero3A,
  "3b": Hero3B,
  "3c": Hero3C,
  "4a": Hero4A,
  "4b": Hero4B,
  "4c": Hero4C,
};

export const dynamicParams = false;

export function generateStaticParams() {
  return heroVariants.map((v) => ({ hero: v.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hero: string }>;
}): Promise<Metadata> {
  const { hero } = await params;
  return {
    title: `Hero ${hero.toUpperCase()} (prévia)`,
    robots: { index: false, follow: false },
    alternates: { canonical: "/" },
  };
}

export default async function HeroVariantPage({ params }: { params: Promise<{ hero: string }> }) {
  const { hero } = await params;
  const Hero = heroes[hero as HeroVariantId];
  return (
    <>
      <Hero />
      <HomeBody />
    </>
  );
}
