"use client";

import Image, { StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { InfiniteMovingMessages } from "../InfiniteMovingCarrousel/InfiniteMovingCarrousel";
import hero1 from "@/public/images/Hero/MoliereHero.webp";
import hero2 from "@/public/images/Hero/PepitaHero.webp";
import hero3 from "@/public/images/HeroNew.webp";

export default function HeroSectionCarrousel({}: {}) {
  const items = [
    {
      name: "SALONES PRIVADOS",
    },
    {
      name: ".",
    },
    {
      name: "RENTA DE TERRAZAS",
    },
    {
      name: ".",
    },
    {
      name: "CATERING",
    },
    {
      name: ".",
    },
    {
      name: "BARRAS",
    },
    {
      name: ".",
    },
    {
      name: "SALONES PRIVADOS",
    },
    {
      name: ".",
    },
    {
      name: "RENTA DE TERRAZAS",
    },
    {
      name: ".",
    },
    {
      name: "CATERING",
    },
    {
      name: ".",
    },
    {
      name: "BARRAS",
    },
    {
      name: ".",
    },
    {
      name: "SALONES PRIVADOS",
    },
    {
      name: ".",
    },
    {
      name: "RENTA DE TERRAZAS",
    },
    {
      name: ".",
    },
    {
      name: "CATERING",
    },
    {
      name: ".",
    },
    {
      name: "BARRAS",
    },
    {
      name: ".",
    },
    {
      name: "SALONES PRIVADOS",
    },
    {
      name: ".",
    },
    {
      name: "RENTA DE TERRAZAS",
    },
    {
      name: ".",
    },
    {
      name: "CATERING",
    },
    {
      name: ".",
    },
    {
      name: "BARRAS",
    },
    {
      name: ".",
    },
  ];

  type Banner = {
    title: string;
    image: StaticImageData;
  };
  const banners: Banner[] = [
    {
      title:
        "LOS MEJORES LUGARES EN RENTA PARA EVENTOS CORPORATIVOS Y SOCIALES",
      image: hero1,
    },
    {
      title:
        "LOS MEJORES LUGARES EN RENTA PARA EVENTOS CORPORATIVOS Y SOCIALES",
      image: hero2,
    },
    {
      title:
        "LOS MEJORES LUGARES EN RENTA PARA EVENTOS CORPORATIVOS Y SOCIALES",
      image: hero3,
    },
  ];

  return (
    <section className="flex flex-col">
      <InfiniteMovingMessages
        pauseOnHover={false}
        items={items}
        direction="right"
        speed="normal"
      />

      <Carousel
        // setApi={setApi}
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 7000,
          }),
        ]}
        className="m-auto w-full bg-black"
      >
        <CarouselContent>
          {banners.map((item, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="relative aspect-[9/12] w-full lg:aspect-[16/12]">
                <Image
                  className="aspect-square object-cover object-center"
                  sizes="100vw"
                  fill
                  loading="eager"
                  src={item.image}
                  alt="Carrousel image"
                />

                <h2 className="relative flex h-full w-full items-end justify-center bg-gradient-to-t from-black to-transparent pb-12 text-center text-2xl text-white lg:items-center lg:pb-0 lg:text-3xl xl:text-5xl">
                  {item.title}
                </h2>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>

      <InfiniteMovingMessages
        pauseOnHover={false}
        items={items}
        direction="right"
        speed="normal"
      />
    </section>
  );
}
