import CTAReviewsSection from "@/components/Sections/CTAReviewsSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import ReviewsSection from "@/components/Sections/ReviewsSection";
import SimpleContentSection from "@/components/Sections/SimpleContentSection";
import Reno from "@/public/images/reno02.webp";
import React from "react";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 lg:gap-20 xl:gap-48">
      <SimpleContentSection
        className="border-b-2 py-20"
        title="Nuestros proyectos"
        image={Reno}
        description="Cada uno de los inversores de Masteos tiene un proyecto inmobiliario diferente. Para que su inversión sea un éxito, nuestros equipos acompañan de manera personalizada a cada uno de ellos: descubre cómo es construir un patrimonio con Masteos."
      />
      <ProjectsSection />
      <CTAReviewsSection />
      <div></div>
    </main>
  );
}
