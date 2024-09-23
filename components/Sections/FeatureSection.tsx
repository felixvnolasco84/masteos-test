import Image, { StaticImageData } from "next/image";
import SectionTitle from "../SectionTitle";
import CardTitle from "../CardTitle";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import First from '@/public/images/Hero/GaleriaHero.webp'
import Second from '@/public/images/Hero/GaleriaHero.webp'
import Third from '@/public/images/Hero/GaleriaHero.webp'

type CardItemProps = {
  icon: StaticImageData;
  title: string;
  description: string;
};

function FeatureCardItem({ title, description, icon }: CardItemProps) {
  return (
    <Card className="-y-4 group overflow-hidden">
      <Image src={icon} alt={title} />
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
    icon: First,
    title: "Te ayudamos a encontrar la aguja en el pajar",
    description:
      "Ahorra tiempo y dinero invirtiendo donde quieras desde donde quieras, sin moverte de tu ciudad.",
  },
  {
    icon: Second,
    title: "Nos ocupamos de la reforma y la decoración",
    description:
      "Nuestros expertos le sacan el máximo partido a tu inversión sin que tu pongas un solo pie en la obra.",
  },
  {
    icon: Third,
    title: "Nos encargamos de la gestión del alquiler y los inquilinos",
    description:
      "No tendrás que preocuparte de buscar inquilino, solo de recibir el pago del alquiler.",
  },
];

export default function FeatureSection() {
  return (
    <div className="flex max-w-6xl flex-col items-center justify-center gap-4">
      <div className="space-y-4">
        <SectionTitle title="Tu inversión inmobiliaria más segura y rentable  " />
        <p>
          Nos encargamos de todo para que tu solo te ocupes de cobrar el
          alquiler.
        </p>
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 lg:grid-cols-3">
        {items.map((item, index) => (
          <FeatureCardItem key={index} {...item} />
        ))}
      </div>
      <Button variant={"default"} size={"lg"}>
        Inversión llave en mano 
      </Button>
    </div>
  );
}
