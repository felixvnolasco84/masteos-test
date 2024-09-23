"use client";

import React, { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function GalleryCarousel({ items }: { items: any[] }) {
  const [api, setApi] = useState<any>();

  React.useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  return (
    <section className="lg:hidden">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="m-auto w-full"
      >
        <CarouselContent>
          {items.map((item: any, index: number) => (
            <CarouselItem key={index} className="basis-full">
              <div
                key={index}
                className="relative flex aspect-square w-full flex-col gap-2"
              >
                <Image
                  className="aspect-square object-cover object-center"
                  src={item}
                  alt="carruosel image"
                  fill
                  sizes="100vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </section>
  );
}
