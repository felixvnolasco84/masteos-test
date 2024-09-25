import Image from "next/image";
import Logo from "@/public/images/logo.webp";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-center border-b-2 border-[#707070] bg-white px-4 pb-3 pt-6 text-lg lg:pb-5 lg:pt-5 xl:pb-6 xl:pt-12">
      <nav className="w-full">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <h1>Masteos</h1>
            {/* <Image
              className="object-fill object-center"
              width={195}
              sizes="100vw"
              alt="Logo"
              src={Logo}
            /> */}
          </Link>

          <div className="flex items-center space-x-8">
            <Link className="hidden lg:block" href={"/"}>
              Nuestros sevivicios
            </Link>
            <Link className="hidden lg:block" href={"/"}>
              Nuestros proyectos
            </Link>
            <Link className="hidden lg:block" href={"/"}>
              ¿Donde Invertir?
            </Link>
            <Link className="hidden lg:block" href={"/"}>
              Aprende con Masteos
            </Link>
          </div>

          <div className="flex items-center justify-end space-x-2">
            <Link
              className="hidden h-fit hover:underline lg:block lg:text-base xl:text-lg"
              href="#contacto"
            >
              Contacto
            </Link>
            {/* <HeaderMobile /> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
