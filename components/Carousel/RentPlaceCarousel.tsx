"use client";

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { clashDisplayMedium } from "@/utils/fonts";

export default function RentPlaceCarousel({ items }: { items: any[] }) {
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
        <CarouselContent className="w-11/12">
          {items.map((item: any, index: number) => (
            <CarouselItem key={index} className="basis-full">
              <Link
                href={`/${item.slug}`}
                key={index}
                className="flex aspect-square flex-col gap-2"
              >
                <Image
                  className="aspect-square"
                  src={item.img}
                  alt={item.name}
                />
                <div>
                  <h3
                    className={`${clashDisplayMedium.className} text-xl lg:text-2xl`}
                  >
                    {item.name}, {item.district.toUpperCase()}
                  </h3>
                  <p className="text-sm text-[#727272] lg:text-base">
                    {item.description}
                  </p>
                </div>
              </Link>
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
