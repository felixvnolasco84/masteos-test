import { Metadata } from "next";
import AboutUsHeroSection from "@/components/Sections/AboutUsHeroSection";
import InvestFutureSection from "@/components/Sections/InvestFutureSection";
import AchievementsSection from "@/components/Sections/AchievementsSection";
import FeatureSection from "@/components/Sections/FeatureSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import PlacesSection from "@/components/Sections/PlacesSection";
import ReviewsSection from "@/components/Sections/ReviewsSection";
import BlogSection from "@/components/Sections/BlogSection";
import AboutUsSection from "@/components/Sections/AboutUsSection";
import ClientsSection from "@/components/Sections/ClientsSection";
import HeroCTASection from "@/components/Sections/HeroCTASection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Encuentra el lugar perfecto para tus eventos privados - Grupo Amphytrion",
    description:
      "Grupo Amphytrion tiene para ti los lugares más exclusivos en las mejores zonas de Ciudad de México para tus eventos. ¡Conoce los spots disponibles! ",
    alternates: {
      canonical: `https://www.amphitryon.mx/`,
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 lg:gap-20 xl:gap-48">
      <HeroCTASection />
      <InvestFutureSection />
      <AchievementsSection />
      <FeatureSection />
      <ProjectsSection />
      <PlacesSection />
      <ReviewsSection />
      <BlogSection />
      <AboutUsSection />
      <ClientsSection />
      {/*       
        <FeaturedClients />
        <CTASection />
        <FeaturedServices />
        <RentSection />
        <CTADeposit />
        <SingleFeature />
        <ContactForm />
        <section className="order-8 mx-auto flex flex-col text-center">
          <h3

            className={`my-1 text-xl lg:my-2 lg:text-3xl ${clashDisplayMedium.className}`}
          >
            LLámanos
          </h3>
          <Link href={"tel:5542957398"}>Salvador Mier: (55) 4295 7398</Link>
          <Link href={"tel:5513842959"}>César González: (55) 1384 2959</Link>
          <Link className="pb-4" href={"tel:5620244047"}>
            Antón Arias: (56) 2024 4047
          </Link>
          <div className="border-t-2 border-gray-300 pb-4"></div>
          <div className="flex flex-col gap-2">
            <CallButton />
            <WhatsAppButton title="Envíanos un mensaje por WhatsApp" />
          </div>
        </section>

        <WhatsAppComponent /> */}
    </main>
  );
}
