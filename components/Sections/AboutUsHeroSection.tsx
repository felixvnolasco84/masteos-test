import Image from "next/image";
import SectionTitle from "../SectionTitle";
import Hero from "@/public/images/aboutHeroImage.webp";

export default function AboutUsHeroSection() {
  return (
    <section className="grid items-center justify-center justify-items-center space-y-12 lg:pt-40">
      <SectionTitle title="Invierte en vivienda en alquiler sin preocupaciones" />
      <Image src={Hero} alt="Invierte en vivienda en alquiler" />
    </section>
  );
}
