import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Methodology } from "@/components/sections/methodology";
import { Offer } from "@/components/sections/offer";
import { Problem } from "@/components/sections/problem";
import { Process } from "@/components/sections/process";
import { Proof } from "@/components/sections/proof";
import { Services } from "@/components/sections/services";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  offerServiceJsonLd,
  professionalServiceJsonLd,
} from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={professionalServiceJsonLd} />
      <JsonLd data={offerServiceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Hero />
      <Problem />
      <Services />
      <Offer />
      <Process />
      <Methodology />
      <Proof />
      <FAQ />
      <FinalCTA />
    </>
  );
}
