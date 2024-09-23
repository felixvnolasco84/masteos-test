import Image, { StaticImageData } from "next/image";
import First from "@/public/images/HeroNew.webp";
import Second from "@/public/images/HeroNew.webp";
import Third from "@/public/images/HeroNew.webp";
import SectionTitle from "../SectionTitle";
import CardTitle from "../CardTitle";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

type Place = {
  title: string;
  path: string;
  image: StaticImageData;
};

function CardItem({ title, image, path }: Place) {
  return (
    <Link href={path}>
      <Card className="group relative flex aspect-[12/16] flex-col items-end justify-end overflow-hidden">
        <div className="absolute z-10 h-full w-full transition group-hover:scale-105">
          <Image
            className="h-full w-full object-cover object-center"
            src={image}
            alt={title}
          />
        </div>
        <CardFooter className="z-20">
          <Button variant={"outline"} size={"lg"}>
            <CardTitle title={title} />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

const items: Place[] = [
  {
    title: "Galicia",
    path: "/galicia",
    image: First,
  },
  {
    title: "Madrid",
    path: "/madrid",
    image: Second,
  },
  {
    title: "Barcelona",
    path: "/barcelona",
    image: Third,
  },
  {
    title: "Valencia",
    path: "/valencia",
    image: Third,
  },
  {
    title: "Sevilla",
    path: "/sevilla",
    image: Third,
  },
  {
    title: "Zaragoza",
    path: "/zaragoza",
    image: Third,
  },
];

export default function PlacesSection() {
  return (
    <section className="grid w-full justify-items-center space-y-12 lg:py-24">
      <div className="space-y-4">
        <SectionTitle title="Expertos locales" />
        <p>
          Masteos está presente en más de 10 ciudades y municipios de España, y
          en toda Francia. ¡Seguro que con nosotros encuentras una oportunidad
          única!
        </p>
      </div>
      <div className="grid w-full justify-center gap-4 lg:grid-cols-3">
        {items.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
      <Button variant={"default"} size={"lg"}>
        Descubre más
      </Button>
    </section>
  );
}
