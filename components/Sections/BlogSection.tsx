import Image, { StaticImageData } from "next/image";
import SectionTitle from "../SectionTitle";
import CardTitle from "../CardTitle";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import First from "@/public/images/blogImage.webp";
import Second from "@/public/images/blogImage.webp";
import Third from "@/public/images/blogImage.webp";
import Link from "next/link";
import SectionParagraph from "../SectionParagraph";

type Post = {
  image: StaticImageData;
  title: string;
  path: string;
};

function FeatureCardItem({ title, image, path }: Post) {
  return (
    <Link href={path}>
      <Card className="-y-4 group">
        <Image
          className="w-full object-cover object-center"
          src={image}
          alt={title}
        />
        <CardHeader className="px-0">
          <CardTitle title={title} />
        </CardHeader>
        <CardFooter className="p-0">
          <Link href={path}>
            <Button className="rounded-full" variant={"outline"} size={"lg"}>
              Leer más
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </Link>
  );
}

const items: Post[] = [
  {
    image: First,
    title: "¿Cómo se calcula la rentabilidad de una vivienda de alquiler?",

    path: "/",
  },
  {
    image: Second,
    title: "¿Cómo se calcula la rentabilidad de una vivienda de alquiler?",

    path: "/",
  },
  {
    image: Third,
    title: "¿Cómo se calcula la rentabilidad de una vivienda de alquiler?",

    path: "/",
  },
];

export default function BlogSection() {
  return (
    <div className="flex max-w-6xl flex-col items-center justify-center gap-12">
      <div className="space-y-4">
        <SectionTitle title="Aprende con Masteos" />
        <SectionParagraph text="No hace falta ser un experto en Real Estate para invertir en vivienda en alquiler. Tenemos toda la información que necesitas para conseguirlo." />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-3">
        {items.map((item, index) => (
          <FeatureCardItem key={index} {...item} />
        ))}
      </div>
      <Button variant={"default"} size={"lg"}>
        Descubre todos nuestros consejos
      </Button>
    </div>
  );
}
