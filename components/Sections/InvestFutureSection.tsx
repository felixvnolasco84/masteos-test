import Image, { StaticImageData } from "next/image";
import First from "@/public/images/1689236838-image.webp";
import Second from "@/public/images/1689236838-image.webp";
import Third from "@/public/images/1689236838-image.webp";
import SectionTitle from "../SectionTitle";
import CardTitle from "../CardTitle";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import CustomSection from "../CustomSection";

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
        <CardTitle className="text-4xl" title={title} />
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {/* <CardContent>
        <p className="prose prose-grey-700 prose-p:mb-8 prose-p:mt-0"></p>
      </CardContent> */}
    </Card>
  );
}

const items: CardItemProps[] = [
  {
    title: "Prepara tu jubilación",
    description:
      "No sabemos con que edad te vas a jubilar, pero sí que podemos ayudarte a prepararla.",
    image: First,
  },
  {
    title: "Crea tu patrimonio familiar",
    description:
      "Dejar a tus hijos un patrimonio tangible es la mejor manera de asegurarles un futuro seguro y rentable.",
    image: Second,
  },
  {
    title: "Rentabiliza tus ahorros",
    description:
      "Tus ahorros no están generando ningún beneficio en el banco. Invertidos en vivienda en alquiler, sí.",
    image: Third,
  },
];

export default function InvestFutureSection() {
  return (
    <CustomSection>
      <SectionTitle title="Invierte en tu futuro" />
      <div className="grid justify-center gap-12 lg:grid-cols-3">
        {items.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
    </CustomSection>
  );
}
