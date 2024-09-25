import Logo from "@/public/images/Logo_Amphitryon_blanco.png";
import Link from "next/link";
import { Button } from "../ui/button";
import { Facebook, Linkedin, Youtube } from "lucide-react";

type LinkItem = {
  title: string;
  url: string;
};

const links: LinkItem[] = [
  { title: "La inversión llave en mano", url: "/" },
  { title: "Nuestros proyectos", url: "/" },
  { title: "¿Dónde invertir?", url: "/" },
  { title: "Quiénes somos", url: "/" },
];

const termLinks: LinkItem[] = [
  { title: "Términos y condiciones", url: "/" },
  { title: "Política de privacidad", url: "/" },
  { title: "Aviso legal", url: "/" },
  { title: "Configurar las cookies", url: "/" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-200">
      <div className="container flex flex-col space-y-12 p-40 px-4 text-sm text-black">
        <div className="grid grid-cols-2 justify-items-start">
          <div className="flex flex-col space-y-4">
            <h3>LA INVERSIÓN SIMPLE Y SEGURA</h3>
            {links.map((link) => (
              <Link key={link.title} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex w-full flex-col space-y-4">
            <h3>ACERCA DE</h3>
            <Link href={"/"}>Quiénes somos</Link>
          </div>
        </div>
        <div className="flex justify-between">
          <Link className="" href={"/"}>
            <h3 className="text-3xl">Masteos</h3>
            {/* <Image
              width={195}
              sizes="100vw"
              alt="image of Amphitryon logo"
              src={Logo}
            /> */}
          </Link>
          <div className="flex space-x-8">
            <Link href={"/"}>
              <Button variant={"customLink"} size={"contact"}>
                <Facebook className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={"/"}>
              <Button variant={"customLink"} size={"contact"}>
                <Youtube className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={"/"}>
              <Button variant={"customLink"} size={"contact"}>
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 border-black py-4 text-xs text-black lg:flex-row lg:gap-4 lg:border-t-2 lg:py-6 lg:text-base xl:py-12 xl:text-lg">
          <div className="flex space-x-2">
            {termLinks.map((link) => (
              <>
                <Link
                  className="text-muted-foreground"
                  key={link.title}
                  href={link.url}
                >
                  {link.title}
                </Link>
                <span>{" | "}</span>
              </>
            ))}
          </div>
          <p>DESARROLLADO POR POLYGON.</p>
        </div>
        <p className="text-muted-foreground">
          @Masteos 2023 - Masteos Spain SL, con domicilio social en Diagonal 405
          bis, 2o piso – 08008 Barcelona, ​​España, registrada con el número de
          sociedad provisional: B09943689, representada por D. Thierry Vignal.
        </p>
      </div>
    </footer>
  );
}
