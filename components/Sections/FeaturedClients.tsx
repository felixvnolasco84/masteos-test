import { clashDisplayMedium } from "@/utils/fonts";
import Image, { StaticImageData } from "next/image";
import Ambrosia from "@/public/images/clients/ambrosia.webp";
import Carso from "@/public/images/clients/carso.webp";
import Conde from "@/public/images/clients/conde nast.webp";
import Costenia from "@/public/images/clients/contenia.webp";
import Ipade from "@/public/images/clients/ipade.webp";
import Kuchen from "@/public/images/clients/kuchen.webp";
import Penguin from "@/public/images/clients/penguin.webp";
import Porcenalosa from "@/public/images/clients/porcelanosa.webp";
import Rolex from "@/public/images/clients/rolex.webp";
import Tous from "@/public/images/clients/tous.webp";

type Client = {
  name: string;
  logo: StaticImageData;
};

const clients: Client[] = [
  {
    name: "Kuchen",
    logo: Kuchen,
  },
  {
    name: "Random Penguin House",
    logo: Penguin,
  },
  {
    name: "Rolex",
    logo: Rolex,
  },
  {
    name: "Grupo Carso",
    logo: Carso,
  },
  {
    name: "Conde Nast",
    logo: Conde,
  },
  {
    name: "Ipade",
    logo: Ipade,
  },
  {
    name: "Tous",
    logo: Tous,
  },
  {
    name: "Porcelanosa",
    logo: Porcenalosa,
  },
  {
    name: "La Costeña",
    logo: Costenia,
  },
  {
    name: "Ambrosia",
    logo: Ambrosia,
  },
];

export default function FeaturedClients() {
  return (
    <section className="order-1 flex flex-col gap-4 lg:gap-7 xl:gap-14">
      <h2
        className={`${clashDisplayMedium.className} text-center text-xl lg:text-3xl`}
      >
        NUESTROS CLIENTES
      </h2>
      {/* <ClientsCarousel items={clients} /> */}
      <div className="grid grid-cols-5 items-center gap-4 lg:grid-cols-10 lg:gap-8 xl:gap-12">
        {clients.map((client, index) => (
          <Image
            key={index}
            src={client.logo}
            alt={client.name}
            className="h-auto w-auto"
          />
        ))}
      </div>
    </section>
  );
}
