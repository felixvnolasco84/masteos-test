import Image from "next/image";
import ReservaIcono from "@/public/images/Reserva_Icono.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTADeposit() {
  return (
    <section className="order-5 flex justify-start lg:justify-end">
      <div className="flex flex-row-reverse items-start gap-4 lg:w-7/12 lg:flex-row lg:items-center lg:gap-2">
        <p className="text-left text-lg lg:text-base">
          Asegura la fecha de tu evento sin problemas: reserva en línea con
          diversas opciones de pago. Solo necesitas abonar el 50% y firmar
          digitalmente el contrato.
        </p>
        <Link href={"https://calendly.com/amphitryonterrazas/"}>
          <Button className="relative aspect-square h-[60px] w-[56px] bg-transparent hover:bg-transparent lg:h-[186px] lg:w-[170px]">
            <Image
              src={ReservaIcono}
              alt="MOLIERE 310, POLANCO"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </Button>
        </Link>
      </div>
    </section>
  );
}
