import { Hero } from "@/components/sections/hero";
import { HomeBody } from "@/components/sections/home-body";
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
      <HomeBody />
    </>
  );
}
