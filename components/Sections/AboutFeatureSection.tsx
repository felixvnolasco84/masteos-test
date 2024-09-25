import Image, { StaticImageData } from "next/image";
import SectionTitle from "../SectionTitle";
import ClientImage from "@/public/images/relation-1.webp";
import CustomSection from "../CustomSection";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import CardTitle from "../CardTitle";

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Democratizar la inversión en alquiler",
    description:
      "Las oportunidades que seleccionamos para ti se adaptan a tus necesidades y tus ahorros. Sin frenos financieros, geográficos o psicológicos.",
  },
  {
    title: "Crear viviendas dignas y de calidad",
    description:
      "Estamos comprometidos con crear un parque de alquiler atractivo y salubre para el inquilino y ecológico para el medio ambiente.",
  },
  {
    title: "Simplificar la inversión en alquiler",
    description:
      "El miedo y el desconocimiento son un freno muy grande a la hora de invertir. Nosotros nos ocupamos de que tu inversión sea fácil, segura y rentable.",
  },
];
type CardItemProps = {
  title: string;
  description: string;
};

function FeatureCardItem({ title, description }: CardItemProps) {
  return (
    <Card className="justify-items-center border-none">
      <CardHeader>
        <h2 className={"text-2xl font-bold xl:text-6xl"}>{title}</h2>
        <CardDescription className="text-xl">{description}</CardDescription>
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

export default function AboutFeatureSection() {
  return (
    <CustomSection >
      <SectionTitle title="En Masteos nos comprometemos a" />
      <div className="grid grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="grid rounded-3xl bg-stone-100">
            <CardHeader>
              <CardTitle title={feature.title} />
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 lg:grid-cols-4">
        {items.map((item, index) => (
          <FeatureCardItem key={index} {...item} />
        ))}
      </div>
    </CustomSection>
  );
}
