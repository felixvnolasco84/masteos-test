"use client";

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function ServicesCarousel({ items }: { items: any[] }) {
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
    <div className="">
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
              <div className="p-0 lg:p-1">
                <div
                  className="bg-[#F8F8F8] p-3 text-left lg:p-6"
                  key={item.name}
                >
                  <h4 className="my-1 text-xl lg:my-2 lg:text-2xl xl:text-3xl">
                    {item.name}
                  </h4>
                  <p className="text-sm text-[#222222] lg:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
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
