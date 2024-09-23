import Image, { StaticImageData } from "next/image";
import First from "@/public/images/HeroNew.webp";
import Second from "@/public/images/HeroNew.webp";
import Third from "@/public/images/HeroNew.webp";
import SectionTitle from "../SectionTitle";
import CardTitle from "../CardTitle";
import { Card, CardContent, CardHeader } from "../ui/card";

type CardItemProps = {
  title: string;
  description: string;
  image: StaticImageData;
};

function CardItem({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: StaticImageData;
}) {
  return (
    <Card className="group flex flex-col overflow-hidden">
      <div className="transition group-hover:scale-105">
        <Image src={image} alt={title} />
      </div>
      <CardHeader>
        <CardTitle title={title} />
      </CardHeader>
      <CardContent>
        <p className="prose prose-grey-700 prose-p:mb-8 prose-p:mt-0">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

const items: CardItemProps[] = [
  {
    title: "Rentabilidad",
    description:
      "Rentabiliza tus ahorros y construye un patrimonio para el futuro invirtiendo en vivienda de alquiler de forma fácil y segura.",
    image: First,
  },
  {
    title: "Seguridad",
    description:
      "Invierte en vivienda de alquiler con la garantía de un equipo de expertos que te asesorarán en todo momento.",
    image: Second,
  },
  {
    title: "Facilidad",
    description:
      "Descubre las oportunidades de inversión que tenemos para ti y contacta con un asesor para resolver tus dudas.",
    image: Third,
  },
];

export default function InvestFutureSection() {
  return (
    <section className="space-y-12 py-4 lg:py-24">
      <SectionTitle title="Invierte en tu futuro" />
      <div className="grid justify-center gap-12 lg:grid-cols-3">
        {items.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
