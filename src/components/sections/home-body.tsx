import { About } from "@/components/sections/about";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Problem } from "@/components/sections/problem";
import { Process } from "@/components/sections/process";
import { Report } from "@/components/sections/report";
import { Services } from "@/components/sections/services";

export function HomeBody() {
  return (
    <>
      <Problem />
      <Services />
      <Process />
      <Report />
      <About />
      <FAQ />
      <FinalCTA />
    </>
  );
}
