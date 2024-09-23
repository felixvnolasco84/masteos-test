"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { rentPlaces } from "@/utils/data";
import { Button } from "../ui/button";

export default function HeaderMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-md bg-orange-400 hover:bg-orange-400/80"
          aria-label="Open menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetDescription className="flex h-3/4 flex-col justify-around text-2xl text-black">
            {rentPlaces.map((place) => (
              <SheetTrigger key={place.name}>
                <Link className="h-fit" href={`/${place.slug}`}>
                  <SheetClose className="text-white">
                    <div>
                      <p className="font-light text-gray-400">
                        {place.description}
                      </p>
                      <p className="text-xs">
                        {" "}
                        {place.name.toUpperCase()}
                        {", "}
                        {place.district.toUpperCase()}
                      </p>
                    </div>
                  </SheetClose>
                </Link>
              </SheetTrigger>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
