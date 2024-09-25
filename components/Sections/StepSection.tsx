import Image, { StaticImageData } from "next/image";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

export default function StepSection({
  className,
  title,
  description,
  image,
  buttonText,
  path,
  number,
  orientation,
}: {
  className?: string;
  title: string;
  description?: string;
  image: StaticImageData;
  buttonText?: string;
  path?: string;
  number: number;
  orientation: "flex-row" | "flex-row-reverse";
}) {
  return (
    <div
      className={cn(
        "container flex items-center justify-between",
        className,
        orientation
      )}
    >
      <Card className="relative space-y-4">
        <CardHeader className="flex justify-start space-y-8">
          <Button className="rounded-full border text-xl" variant={"ghost"} size={"icon"}>
            {number}
          </Button>
          <h2 className="max-w-4xl text-4xl font-bold leading-relaxed tracking-wide xl:text-5xl">
            {title}
          </h2>
          {description && (
            <CardDescription className="space-y-4">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {buttonText && path && (
            <Link href={path}>
              <Button variant={"default"} size={"lg"}>
                {buttonText}
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
      <Image
        className="rounded-lg shadow-sm"
        src={image}
        alt="Invierte en vivienda en alquiler"
      />
    </div>
  );
}
