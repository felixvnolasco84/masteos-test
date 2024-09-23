import HeroSection from "@/components/Sections/HeroSection";
import Script from "next/script";
import { Metadata } from "next";
import { RentPlace, rentPlaces } from "@/utils/data";
import { clashDisplayMedium, clashDisplaySemibold } from "@/utils/fonts";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Arrow from "@/public/svg/Arrow_Icon.svg";
import React, { Suspense } from "react";
import CustomMapSection from "@/components/Sections/CustomMapSection";
import PlaceTablePricing from "@/components/Table/PlaceTablePricing";
import FlatComponent from "@/components/Flat/FlatComponent";
import WhatsAppButton from "@/components/WhatsApp/WhatsAppButton";
import GalleryCarousel from "@/components/Carousel/GalleryCarousel";
import WhatsAppComponent from "@/components/WhatsApp/WhatsAppComponent";
import CallButton from "@/components/WhatsApp/CallButton";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const rentPlace = rentPlaces.find((service: any) => service.slug === slug);

  return {
    title: rentPlace?.metaTitle,
    description: rentPlace?.metaDescription,
    alternates: {
      canonical: `https://www.amphitryon.mx/${slug}`,
    },
  };
}

export default function PlacePage({ params }: Props) {
  const slug1 = params.slug;

  const place = rentPlaces.find((rentPlace) => rentPlace.slug === slug1)!;

  const { slug } = params;
  const rentPlace: RentPlace = rentPlaces.find(
    (rentPlace) => rentPlace.slug === slug
  )!;
  return (
    <>
      <Script
        id="venue-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(place.jsonLd),
        }}
      />
      <div className="flex flex-col gap-6 py-4 lg:gap-12">
        <div className="container space-y-8">
          <div className="grid grid-flow-col items-center justify-between gap-2">
            <Link href={rentPlace.previousLink} className="">
              <Button
                disabled={!rentPlace.previousLink}
                className="relative cursor-pointer"
                variant={"arrow"}
                size={"arrow"}
              >
                <Image
                  src={Arrow}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  alt="Arrow"
                />
              </Button>
            </Link>

            <div className="flex flex-col">
              <h1
                className={`${clashDisplaySemibold.className} text-4xl lg:text-7xl xl:text-8xl text-center`}
              >
                {rentPlace.name}
              </h1>
              <h2 className="text-center text-xl lg:text-4xl xl:text-5xl">
                {rentPlace.description}
              </h2>
            </div>
            <Link href={rentPlace.nextLink}>
              <Button
                disabled={!rentPlace.nextLink}
                className="relative cursor-pointer disabled:cursor-not-allowed"
                variant={"arrow"}
                size={"arrow"}
              >
                <Image
                  src={Arrow}
                  fill
                  sizes="100vw"
                  className="rotate-180 object-cover object-center"
                  alt="Arrow"
                />
              </Button>
            </Link>
          </div>
          <section
            className={`${
              rentPlace.features.length > 4 ? "grid-cols-5" : "grid-flow-col"
            } gap-4 lg:grid `}
          >
            {rentPlace.features.map((feature, index) => (
              <div className="border-t-2 border-black pt-2 lg:pt-4" key={index}>
                <h3 className="text-xs text-[#727272] lg:text-sm">
                  {feature.title}
                </h3>
                <p
                  className={`${clashDisplayMedium.className} text-lg xl:text-xl`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </section>
        </div>
        <HeroSection isRentPlace={true} img={rentPlace.img} />

        <div className="container flex flex-col gap-6 lg:gap-y-12">
          <section className="flex flex-col gap-2 bg-[#F8F8F8] p-4 lg:gap-4">
            <h3
              className={`${clashDisplayMedium.className} my-0 lg:my-2 text-3xl`}
            >
              {rentPlace.name + " - " + rentPlace.location}
            </h3>
            <p className="text-sm lg:text-base">{rentPlace.largeDescription}</p>
          </section>
          <section className="hidden grid-cols-1 gap-2 align-baseline lg:grid lg:grid-cols-2 lg:gap-4">
            {rentPlace.gallery.map((image, index) => (
              <div
                key={index}
                className="relative flex aspect-square w-full flex-col gap-2"
              >
                <Image
                  className="aspect-square object-cover object-center"
                  src={image}
                  alt="gallery image"
                  fill
                  sizes="100vw"
                />
              </div>
            ))}
          </section>
          <GalleryCarousel items={rentPlace.gallery} />
          <PlaceTablePricing prices={rentPlace.prices} />
          <FlatComponent flat={rentPlace.flat} flatPDF={rentPlace.flatPDF} />

          <Suspense fallback={<div>Cargando mapa...</div>}>
            <CustomMapSection location={rentPlace.locationInMap} />
          </Suspense>

          <section id="contacto" className="flex flex-col gap-2">
            {/* <CustomModalCalendly url={rentPlace.calendlyURL} /> */}
            <CallButton />
            <WhatsAppButton title="WhatsApp" />
            <Link className="mx-auto" href={"/"}>
              <Button variant={"link"} size={"lg"}>
                Regresar al Inicio
              </Button>
            </Link>
          </section>
          <WhatsAppComponent />
        </div>
      </div>
    </>
  );
}
