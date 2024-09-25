import PlacesSection from "@/components/Sections/PlacesSection";
import ReviewsSection from "@/components/Sections/ReviewsSection";
import SimpleContentSection from "@/components/Sections/SimpleContentSection";
import InvestImage from "@/public/images/ouinvestir_hero.webp";
import Chasseurs from "@/public/images/chasseurs.webp";
import React from "react";
import FAQ from "@/components/FAQ/FAQ";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 lg:gap-20 xl:gap-48">
      <SimpleContentSection
        className="border-b-2 py-40"
        title="¿Dónde invertir en España?"
        image={InvestImage}
        description="Encontramos para ti las ciudades y los barrios con las mejores oportunidades de inversión en vivienda en alquilar en toda España.
Los consultores de Masteos analizan el mercado inmobiliario para estimar la rentabilidad del alquiler de una propiedad y las perspectivas de inversión en un barrio."
      />
      <PlacesSection sectionTitle="Descubrir las ciudades donde invertir" />
      <SimpleContentSection
        className="border-y-2 py-40"
        title="No inviertas solo, nuestros expertos te acompañan"
        image={Chasseurs}
        description="Invertir en alquiler de manera fácil y segura

Nuestros expertos inmobiliarios te aconsejan en todo momento
Encontramos para ti las mejores oportunidades de inversión
Te acompañamos de inicio a fin para que no inviertas solo"
      />
      <ReviewsSection />
      <FAQ />
    </main>
  );
}
