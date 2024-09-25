import Image, { StaticImageData } from "next/image";
import React from "react";
import { Card, CardDescription, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";

export default function SimpleContentSection({
  className,
  title,
  description,
  image,
}: {
  className?: string;
  title: string;
  description?: string;
  image: StaticImageData;
}) {
  return (
    <div
      className={cn("container flex items-center justify-between", className)}
    >
      <Card className="space-y-4">
        <CardHeader className="flex justify-start space-y-4">
          <h2 className="max-w-4xl text-4xl font-bold leading-relaxed tracking-wide xl:text-5xl">
            {title}
          </h2>
          {description && (
            <CardDescription className="space-y-4">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      </Card>
      <Image
        className="rounded-lg shadow-sm"
        src={image}
        alt="Invierte en vivienda en alquiler"
      />
    </div>
  );
}
