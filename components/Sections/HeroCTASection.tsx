import Image, { StaticImageData } from "next/image";
import { InfiniteMovingMessages } from "../InfiniteMovingCarrousel/InfiniteMovingCarrousel";
import { Button } from "../ui/button";
import Hero from "@/public/images/hero.webp";
import SectionTitle from "../SectionTitle";

export default function HeroCTASection() {
  return (
    <section className="grid items-center justify-center justify-items-center space-y-12 lg:pt-40">
      <div className="space-y-4">
        <SectionTitle title="Invierte en vivienda en alquiler sin preocupaciones" />
        <p className="text-center">
          Rentabiliza tus ahorros y construye un patrimonio para el futuro
          invirtiendo en vivienda de alquiler de forma fácil y segura.
        </p>
      </div>
      <div className="space-x-2">
        <Button variant={"default"} size={"lg"}>
          Descubrir oportunidades de inversión
        </Button>
        <Button variant={"secondary"} size={"lg"}>
          Contactar con un asesor
        </Button>
      </div>
      <Image src={Hero} alt="Invierte en vivienda en alquiler" />
    </section>
  );
}
