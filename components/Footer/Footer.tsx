import Image from "next/image";
import Logo from "@/public/images/Logo_Amphitryon_blanco.png";
import Estrella from "@/public/svg/Vector_estrella.svg";
import Link from "next/link";
import FooterLinkComponent from "./FooterLinkComponent";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="flex flex-col space-y-12 bg-[#f2f1f0] p-40 px-4 text-black xl:text-3xl">
      <Link className="container" href={"/"}>
        <h3>Masteos</h3>
        {/* <Image
              width={195}
              sizes="100vw"
              alt="image of Amphitryon logo"
              src={Logo}
            /> */}
      </Link>
      <div className="container flex flex-col items-center justify-between gap-2 border-black py-4 text-xs text-black lg:flex-row lg:gap-4 lg:border-t-2 lg:py-6 lg:text-base xl:py-12 xl:text-lg">
        <div className="flex space-x-2">
          <Link href={"/"}>GCU</Link>
          <Link href={"/"}>Política de privacidad</Link>
          <Link href={"/"}>Aviso legal</Link>
          <Link href={"/"}>Configurar las cookies</Link>
        </div>
        <p>DESARROLLADO POR POLYGON.</p>
      </div>
      <p className="container text-sm">
        @Masteos 2023 - Masteos Spain SL, con domicilio social en Diagonal 405
        bis, 2o piso – 08008 Barcelona, ​​España, registrada con el número de
        sociedad provisional: B09943689, representada por D. Thierry Vignal.
      </p>
    </footer>
  );
}
