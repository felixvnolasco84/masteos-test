"use client";

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { clashDisplayMedium } from "@/utils/fonts";

export default function RentPlaceFeaturedCarousel({
  features,
}: {
  features: any[];
}) {
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
        <CarouselContent>
          {features.map((feature: any, index: number) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="border-t-2 border-black pt-2 lg:pt-4" key={index}>
                <h3 className="text-xs text-[#727272] lg:text-sm">
                  {feature.title}
                </h3>
                <p
                  className={`${clashDisplayMedium.className} text-base lg:text-xl xl:text-2xl`}
                >
                  {feature.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm lg:hidden">
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
