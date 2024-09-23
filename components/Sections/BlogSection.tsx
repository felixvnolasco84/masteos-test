import Image, { StaticImageData } from "next/image";
import SectionTitle from "../SectionTitle";
import CardTitle from "../CardTitle";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import First from "@/public/images/Hero/GaleriaHero.webp";
import Second from "@/public/images/Hero/GaleriaHero.webp";
import Third from "@/public/images/Hero/GaleriaHero.webp";
import Link from "next/link";

type Post = {
  image: StaticImageData;
  title: string;
  description: string;
  path: string;
};

function FeatureCardItem({ title, description, image, path }: Post) {
  return (
    <Link href={path}>
      <Card className="-y-4 group overflow-hidden">
        <Image src={image} alt={title} />
        <CardHeader>
          <CardTitle title={title} />
        </CardHeader>
        <CardContent>
          <p className="prose prose-grey-700 prose-p:mb-8 prose-p:mt-0">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

const items: Post[] = [
  {
    image: First,
    title: "Te ayudamos a encontrar la aguja en el pajar",
    description:
      "Ahorra tiempo y dinero invirtiendo donde quieras desde donde quieras, sin moverte de tu ciudad.",
    path: "/",
  },
  {
    image: Second,
    title: "Nos ocupamos de la reforma y la decoración",
    description:
      "Nuestros expertos le sacan el máximo partido a tu inversión sin que tu pongas un solo pie en la obra.",
    path: "/",
  },
  {
    image: Third,
    title: "Nos encargamos de la gestión del alquiler y los inquilinos",
    description:
      "No tendrás que preocuparte de buscar inquilino, solo de recibir el pago del alquiler.",
    path: "/",
  },
];

export default function BlogSection() {
  return (
    <div className="flex max-w-6xl flex-col items-center justify-center gap-4">
      <div className="space-y-4">
        <SectionTitle title="Aprende con Masteos" />
        <p>
          No hace falta ser un experto en Real Estate para invertir en vivienda
          en alquiler. Tenemos toda la información que necesitas para
          conseguirlo.
        </p>
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 lg:grid-cols-3">
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
