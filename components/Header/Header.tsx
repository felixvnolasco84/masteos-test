import Image from "next/image";
import Logo from "@/public/images/logo.webp";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <header className="container sticky top-0 z-50 flex items-center justify-between border-b-2 border-[#707070] bg-white px-4 pb-3 pt-6 text-lg lg:pb-5 lg:pt-5 xl:pb-6 xl:pt-12">
      <nav className="w-full">
        <div className="grid grid-cols-2 items-center justify-between lg:grid-cols-3">
          <Link
            href={"/"}
          >
            <Image
              className="object-fill object-center" 
              width={195}              
              sizes="100vw"
              alt="image of Amphitryon logo"
              src={Logo}
            />
          </Link>

          <Link className="hidden lg:block" href={"/"}>
            <h1 className="text-center text-xs lg:text-base xl:text-lg">
              GRUPO DE ESPACIOS PARA EVENTOS PRIVADOS
            </h1>
          </Link>

          <div className="flex items-center justify-end space-x-2">
            <Link
              className="hidden h-fit hover:underline lg:block lg:text-base xl:text-lg"
              href="#contacto"
            >
              Contacto
            </Link>
            <HeaderMobile />
          </div>
        </div>
      </nav>
    </header>
  );
}
