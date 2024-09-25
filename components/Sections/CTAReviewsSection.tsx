import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionTitle from "../SectionTitle";
import CardTitle from "../CardTitle";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { StarIcon } from "lucide-react";
import CustomSection from "../CustomSection";
import SectionParagraph from "../SectionParagraph";
import { Button } from "../ui/button";

type Review = {
  name: string;
  review: string;
  date: string;
  stars: number;
};

function CardItem({ name, review, date, stars }: Review) {
  return (
    <Card className="group flex flex-col overflow-hidden">
      <CardHeader>
        <h3 className="text-lg font-bold leading-relaxed tracking-wide">
          {name}
        </h3>
        <div className="flex space-x-1">
          {Array.from({ length: stars }).map((_, index) => (
            <StarIcon
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
              key={index}
            />
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <p>{review}</p>
      </CardContent>
      <CardFooter>
        <small>{date}</small>
      </CardFooter>
    </Card>
  );
}

const items: Review[] = [
  {
    name: "Eduardo",
    review: "Muy contento con la inversión. Todo ha salido según lo previsto.",
    date: "12/12/2021",
    stars: 5,
  },
  {
    name: "Tomás",
    review: "Una experiencia increíble. No puedo esperar a invertir de nuevo.",
    date: "12/12/2021",
    stars: 5,
  },
  {
    name: "María",
    review: "Muy contenta con el servicio. Todo ha sido muy fácil.",
    date: "12/12/2021",
    stars: 5,
  },
  {
    name: "Laura",
    review: "Muy contenta con la inversión. Todo ha salido según lo previsto.",
    date: "12/12/2021",
    stars: 5,
  },
  {
    name: "Ana",
    review: "Una experiencia increíble. No puedo esperar a invertir de nuevo.",
    date: "12/12/2021",
    stars: 5,
  },
  {
    name: "Sara",
    review: "Muy contenta con el servicio. Todo ha sido muy fácil.",
    date: "12/12/2021",
    stars: 5,
  },
];

export default function CTAReviewsSection() {
  return (
    <CustomSection>
      <div className="grid justify-items-center space-y-4">
        <SectionTitle title="Nuestros clientes hablan de nosotros" />
        <SectionParagraph text="Accede a propiedades parecidas a estas y benefíciate de la red de contactos y experiencia de Masteos para crear tu patrimonio."></SectionParagraph>
      </div>

      <div className="space-x-2">
        <Button variant={"default"} size={"lg"}>
          Empezar a invertir
        </Button>
        <Button variant={"secondary"} size={"lg"}>
          Contactar con un experto
        </Button>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
              <CardItem key={index} {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* <div className="grid justify-center gap-12 lg:grid-cols-3">
        {items.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div> */}
    </CustomSection>
  );
}
