import { clashDisplayMedium } from "@/utils/fonts";
import AgregarIcono from "@/public/images/Agregar_Sevicio_Icono.webp";
import Image from "next/image";

export default function SingleFeature() {
  return (
    <section className="order-6 flex flex-row items-start gap-3 lg:flex-col">
      <div className="relative aspect-square h-[60px] w-[60px] lg:h-[180px] lg:w-[180px]">
        <Image
          alt="Single feature icon"
          className="h-full w-full object-cover object-center"
          fill
          sizes="100vw"
          src={AgregarIcono}
        />
      </div>
      <div className="flex w-fit flex-col gap-2 bg-[#F8F8F8] p-4 lg:gap-4">
        <h3
          className={`${clashDisplayMedium.className} my-1 lg:my-2 text-xl lg:text-3xl`}
        >
          VENUES PROPIOS
        </h3>
        <p>
          Nuestros venues para eventos son propios, sin intermediarios ni
          comisiones adicionales. Los precios son fijos y se encuentran
          públicamente disponibles en la información de cada espacio. Con
          nosotros, disfrutas de una experiencia sin complicaciones y con toda
          la atención que mereces para tu evento.
        </p>
      </div>
    </section>
  );
}
