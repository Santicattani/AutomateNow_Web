import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Problema from "@/components/Problema";
import Propuesta from "@/components/Propuesta";
import Servicios from "@/components/Servicios";
import Proceso from "@/components/Proceso";
import Casos from "@/components/Casos";
import ParaVos from "@/components/ParaVos";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Problema />
      <Propuesta />
      <Servicios />
      <Proceso />
      <Casos />
      <ParaVos />
      <CtaFinal />
      <Footer />
    </>
  );
}
