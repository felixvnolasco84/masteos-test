"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function CustomMapSection({
  location,
}: {
  location: { lat: number; lng: number };
}) {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "quartely",
      });

      const { Map } = await loader.importLibrary("maps");

      // MARKER
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const options: google.maps.MapOptions = {
        center: location,
        zoom: 15,
        mapId: "NEXT_MAPS_TUTS",
      };

      const map = new Map(mapRef.current as HTMLDivElement, options);

      // add the marker in the map
      const marker = new Marker({
        map: map,
        position: location,
      });
    };

    initializeMap();
  }, [location]);

  return (
    <section className="overflow-hidden rounded-md shadow-sm">
      <div
        className="aspect-square lg:aspect-auto lg:h-[500px] xl:h-[600px]"
        ref={mapRef}
      />
    </section>
  );
}
