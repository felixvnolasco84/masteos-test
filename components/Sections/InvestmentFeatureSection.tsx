import Image, { StaticImageData } from "next/image";
import SectionTitle from "../SectionTitle";
import CardTitle from "../CardTitle";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import First from "@/public/images/serenite-1.webp";
import Second from "@/public/images/serenite-1.webp";
import Third from "@/public/images/serenite-1.webp";
import CustomSection from "../CustomSection";
import SectionParagraph from "../SectionParagraph";

type CardItemProps = {
  icon: StaticImageData;
  title: string;
  description: string;
};

function FeatureCardItem({ title, description, icon }: CardItemProps) {
  return (
    <Card className="-y-4 rounde group flex gap-4 overflow-hidden rounded-3xl border border-black bg-transparent p-16">
      <Image src={icon} alt={title} />
      <CardContent className="space-y-4 p-0">
        <CardTitle title={title} />
        <p className="prose prose-grey-700 prose-p:mb-8 prose-p:mt-0">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

const items: CardItemProps[] = [
  {
    icon: First,
    title: "Tranquilidad",
    description:
      "Te acompañamos hasta la firma ante notario. Y bueno, después también.",
  },
  {
    icon: Second,
    title: "Seguridad",
    description: "Te aseguramos un proyecto seguro que protege tus intereses.",
  },
  {
    icon: Third,
    title: "Experiencia",
    description:
      "No hace falta ser un experto en Real Estate. Para eso ya estamos nosotros.",
  },
  {
    icon: Third,
    title: "Innovación",
    description:
      "Invierte y sigue tu proyecto desde tu móvil, sin desplazarte.",
  },
];

export default function InvestmentFeatureSection() {
  return (
    <CustomSection className="bg-[#e4ddd3] py-40">
      <div className="space-y-4">
        <SectionTitle title="Tu inversión segura y rentable" />
        <SectionParagraph text="Masteos está siempre a tu lado, de inicio a fin de tu proyecto." />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 lg:grid-cols-2">
        {items.map((item, index) => (
          <FeatureCardItem key={index} {...item} />
        ))}
      </div>

      <div className="flex space-x-4">
        <Button variant={"default"} size={"lg"}>
          Encontrar una oportunidad
        </Button>
        <Button variant={"outline"} size={"lg"}>
          Pedir una cita
        </Button>
      </div>
    </CustomSection>
  );
}
