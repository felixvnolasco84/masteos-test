import Image, { StaticImageData } from "next/image";
import SectionTitle from "../SectionTitle";
import CardTitle from "../CardTitle";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader } from "../ui/card";

type CardItemProps = {
  title: string;
  description: string;
};

function FeatureCardItem({ title, description }: CardItemProps) {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle title={title} />
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

const items: CardItemProps[] = [
  {
    title: "7/10",
    description: "españoles quieren invertir en vivienda en alquiler",
  },
  {
    title: "15.000",
    description: "propietarios ya confían en nosotros",
  },
  {
    title: "8,7 %",
    description: "de rentabilidad media en nuestros proyectos",
  },
  {
    title: "150 k",
    description: "de inversión media en nuestros proyectos",
  },
];

export default function AchievementsSection() {
  return (
    <div className="grid max-w-3xl items-center justify-center justify-items-center gap-4 lg:gap-12">
      <div className="space-y-4">
        <SectionTitle
          title="Nos ocupamos de todo
"
        />
        <p className="text-center">
          Búsqueda, transacción, reforma, decoración y alquiler.
        </p>
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 lg:grid-cols-2">
        {items.map((item, index) => (
          <FeatureCardItem key={index} {...item} />
        ))}
      </div>
      <Button variant={"default"} size={"lg"}>
        Empezar a invertir
      </Button>
    </div>
  );
}
