import Image, { StaticImageData } from "next/image";
import SectionTitle from "../SectionTitle";
import CardTitle from "../CardTitle";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader } from "../ui/card";
import SectionParagraph from "../SectionParagraph";
import Link from "next/link";

type CardItemProps = {
  title: string;
  description: string;
};

function FeatureCardItem({ title, description }: CardItemProps) {
  return (
    <Card className="justify-items-center border-none">
      <CardHeader>
        <CardTitle title={title} />
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

const items: CardItemProps[] = [
  {
    title: "56M€",
    description: "en rondas de financiación",
  },
  {
    title: "1 500",
    description: "proyectos de inversión en España y Francia",
  },
  {
    title: "90 000",
    description: "metros cuadradores reformados",
  },
  {
    title: "300 M€",
    description: "invertidos por nuestros clientes en España y Francia",
  },
];

export default function AboutUsSection() {
  return (
    <div className="grid max-w-3xl items-center justify-center justify-items-center gap-4 lg:gap-12">
      <div className="space-y-4">
        <SectionTitle title="¿Quiénes somos?" />
        <SectionParagraph text="Desde 2019, Masteos ayuda a todos los pequeños ahorradores a invertir en vivienda en alquiler. Nuestro objetivo es democratizar la inversión inmobiliaria porque creemos que es la mejor manera de crear un patrimonio. Porque el futuro es de los que invierten pronto, de manera segura y responsable." />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 lg:grid-cols-2">
        {items.map((item, index) => (
          <FeatureCardItem key={index} {...item} />
        ))}
      </div>
      <Link href={"/quienes-somos"}>
        <Button variant={"default"} size={"lg"}>
          Saber más
        </Button>
      </Link>
    </div>
  );
}
