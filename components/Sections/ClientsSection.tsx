import Image, { StaticImageData } from "next/image";
import SectionTitle from "../SectionTitle";
import ClientImage from "@/public/images/clientImage.webp";
import CustomSection from "../CustomSection";

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
  {
    image: ClientImage,
    externalLink: "/",
  },
];

export default function ClientsSection() {
  return (
    <CustomSection className="bg-stone-200 py-40">
      <SectionTitle title="Hablan de nosotros" />
      <div className="grid grid-cols-4 space-x-12">
        {clients.map((client, index) => (
          <Image
            key={index}
            src={client.image}
            alt="Client Image"
            className="object-contain"
          />
        ))}
      </div>
    </CustomSection>
  );
}
