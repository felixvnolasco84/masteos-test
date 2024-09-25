import CustomSection from "@/components/CustomSection";
import FAQ from "@/components/FAQ/FAQ";
import SectionParagraph from "@/components/SectionParagraph";
import InvestmentFeatureSection from "@/components/Sections/InvestmentFeatureSection";
import InvestmentStepSection from "@/components/Sections/InvestmentStepSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import ReviewsSection from "@/components/Sections/ReviewsSection";
import SimpleContentSection from "@/components/Sections/SimpleContentSection";
import SectionTitle from "@/components/SectionTitle";
import First from "@/public/images/comment_ca_marche_heero.webp";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 lg:gap-20 xl:gap-48">
      <SimpleContentSection
        className="border-b-2 py-40"
        title="Tu inversión inmobiliaria, de inicio a fin"
        image={First}
        description="Masteos te acompaña en todo tu proyecto inmobiliario: desde la búsqueda de la vivienda hasta el alquiler, pasando por la reforma y la decoración. Nuestros equipos están a tu lado en todo momento para que no inviertas solo."
      />
      <InvestmentStepSection />
      <InvestmentFeatureSection />
      <ProjectsSection />
      <ReviewsSection />
      <FAQ />
    </main>
  );
}
