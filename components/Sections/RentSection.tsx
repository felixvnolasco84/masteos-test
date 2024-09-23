import { clashDisplayMedium } from "@/utils/fonts";
import Image from "next/image";

import Link from "next/link";
import { rentPlaces } from "@/utils/data";
// import { CalendarComponent } from "../Calendar/CalendarComponent";

export default function RentSection() {
  return (
    <section className="order-4 flex flex-col gap-6 lg:gap-12">
      <h2
        className={`${clashDisplayMedium.className} text-xl lg:text-3xl text-center`}
      >
        NUESTROS VENUES
      </h2>
      <div className="grid grid-cols-1 gap-4 align-baseline lg:grid lg:grid-cols-2 lg:gap-4">
        {rentPlaces.map((place, index) => (
          <Link
            href={`/${place.slug}`}
            key={index}
            className="flex aspect-square flex-col gap-2"
          >
            <div className="relative aspect-square">
              <Image
                className="h-full w-full object-cover object-center"
                fill
                sizes="100vw"
                src={place.img}
                alt={place.name}
              />
            </div>

            <div className="py-4 text-center lg:py-0 lg:text-left">
              <h3
                className={`${clashDisplayMedium.className} hover:underline text-xl lg:text-2xl`}
              >
                {place.name}, {place.district.toUpperCase()}
              </h3>
              <p className="text-sm text-[#727272] lg:text-base">
                {place.description}
              </p>
            </div>
          </Link>
        ))}
        {/* <CalendarComponent /> */}
      </div>
    </section>
  );
}
