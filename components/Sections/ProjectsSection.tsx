import Image, { StaticImageData } from "next/image";
import First from "@/public/images/HeroNew.webp";
import Second from "@/public/images/HeroNew.webp";
import Third from "@/public/images/HeroNew.webp";
import SectionTitle from "../SectionTitle";
import CardTitle from "../CardTitle";
import { Card, CardContent, CardHeader } from "../ui/card";

type Project = {
  title: string;
  investment: string;
  type: string;
  percentage: string;
  place: string;
  image: StaticImageData;
};

function CardItem({
  title,
  image,
  investment,
  percentage,
  place,
  type,
}: Project) {
  return (
    <Card className="group flex flex-col overflow-hidden">
      <div className="transition group-hover:scale-105">
        <Image src={image} alt={title} />
      </div>
      <CardHeader>
        <div className="flex items-center space-x-2 text-gray-400">
          <small>{investment}</small>
          <small>{type}</small>
          <small>{percentage}</small>
          <small>{place}</small>
        </div>
        <CardTitle title={title} />
      </CardHeader>
    </Card>
  );
}

const items: Project[] = [
  {
    title: "La inversión de Eduardo",
    investment: "150.000€",
    type: "Vivienda",
    percentage: "8,7%",
    place: "Madrid",
    image: First,
  },
  {
    title: "La inversión de Tomás",
    investment: "200.000€",
    type: "Oficina",
    percentage: "9,2%",
    place: "Barcelona",
    image: Second,
  },
  {
    title: "La inversión de Paul & Juliette",
    investment: "300.000€",
    type: "Local",
    percentage: "10,3%",
    place: "Valencia",
    image: Third,
  },
];

export default function ProjectsSection() {
  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <SectionTitle title="Los proyectos Masteos" />
        <p className="text-center">
          Nuestros clientes crean un patrimonio seguro y rentable.
        </p>
      </div>
      <div className="grid justify-center gap-12 lg:grid-cols-3">
        {items.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
