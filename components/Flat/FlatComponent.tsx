"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import { TrackGoogleAnalyticsEvent } from "@/lib/google-analytics";

export default function FlatComponent({
  flat,
  flatPDF,
}: {
  flat: StaticImageData;
  flatPDF: string;
}) {
  const handleClick = () => {
    TrackGoogleAnalyticsEvent(
      "click",
      "descargar_plano",
      window.location.pathname
    );
  };

  return (
    <section>
      <h2 className="text-center text-2xl font-bold lg:text-4xl xl:mb-8 xl:text-5xl">
        PLANO DEL VENUE
      </h2>
      <div className="relative aspect-square h-fit w-full">
        <Image
          src={flat}
          alt="Flat"
          fill
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />
      </div>
      {/* Boto para descargar el plano que es un archivo pdf */}
      <a
        href={flatPDF}
        download="Plano.pdf"
        className="mt-6 flex justify-center"
        onClick={handleClick}
      >
        <Button className="rounded-md bg-black px-4 py-2 text-white">
          Descargar Plano
        </Button>
      </a>
    </section>
  );
}
