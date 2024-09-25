import IntroImage from "@/public/images/AboutIntro.webp";
import SectionParagraph from "@/components/SectionParagraph";
import AboutFeatureSection from "@/components/Sections/AboutFeatureSection";
import AboutUsHeroSection from "@/components/Sections/AboutUsHeroSection";
import ClientsSection from "@/components/Sections/ClientsSection";
import RelationshipsSection from "@/components/Sections/RelationshipsSection";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 lg:gap-20 xl:gap-48">
      <AboutUsHeroSection />
      <div className="container flex items-center justify-between">
        <Card className="space-y-4">
          <CardHeader className="flex justify-start space-y-4">
            <h2 className="max-w-4xl text-4xl font-bold leading-relaxed tracking-wide xl:text-5xl">
              El futuro pertenece a los que invierten pronto
            </h2>
            <CardDescription className="space-y-4">
              Hemos creado Masteos para democratizar la inversión en vivienda en
              alquiler. <br />
              Hemos creado Masteos con el convencimiento de que cada uno de
              nosotros puede - y debe - construir su patrimonio y su futuro.
              Que nunca es demasiado pronto o demasiado tarde para hacerlo.{" "}
              <br />
              Hemos creado Masteos para ayudar a todos los pequeños inversores a
              construir vuestro patrimonio, sin que la complejidad del mercado o
              la falta de tiempo sea una barrera a la hora de invertir. <br />
              Thierry Vignal et Maxime Hanquier, Fundadores de Masteos
            </CardDescription>
          </CardHeader>
        </Card>
        <Image src={IntroImage} alt="Invierte en vivienda en alquiler" />
      </div>
      <AboutFeatureSection />
      <RelationshipsSection />
      <ClientsSection />
    </main>
  );
}
