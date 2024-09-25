import Image, { StaticImageData } from "next/image";
import SectionTitle from "../SectionTitle";
import ClientImage from "@/public/images/relation-1.webp";
import CustomSection from "../CustomSection";
import { Card, CardContent } from "../ui/card";

type Client = {
  image: StaticImageData;
  externalLink: string;
};

const clients: Client[] = [
  {
    image: ClientImage,
    externalLink: "/",
  },
  {
    image: ClientImage,
    externalLink: "/",
  },
  {
    image: ClientImage,
    externalLink: "/",
  },
];

export default function RelationshipsSection() {
  return (
    <CustomSection>
      <SectionTitle title="Los fondos que confían en nosotros" />
      <div className="grid grid-cols-3 gap-8">
        {clients.map((client, index) => (
          <Card key={index} className="grid bg-stone-200">
            <CardContent className="p-8">
              <Image
                src={client.image}
                alt="Client Image"
                className="object-contain"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </CustomSection>
  );
}
