"use client";

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ClientsCarousel({ items }: { items: any[] }) {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="m-auto w-full lg:hidden"
      >
        <CarouselContent className="w-11/12 items-center">
          {items.map((item: any, index: number) => (
            <CarouselItem key={index} className="basis-1/3">
              <Image
                key={index}
                src={item.logo}
                alt={item.name}
                className="h-auto w-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-[#FC9532] lg:hidden">
        {Array(count)
          .fill(null)
          .map((_, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                margin: "0 2px",
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                backgroundColor:
                  i === current - 1 ? "currentColor" : "transparent",
                border: "1px solid currentColor",
              }}
            />
          ))}
      </div>
    </div>
  );
}
