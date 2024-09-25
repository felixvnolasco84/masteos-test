import { StaticImageData } from "next/image";
import CustomSection from "../CustomSection";
import SectionParagraph from "../SectionParagraph";
import SectionTitle from "../SectionTitle";
import TestImage from "@/public/images/app-masteos.webp";
import StepSection from "./StepSection";

type StepInvestment = {
  className?: string;
  title: string;
  description?: string;
  image: StaticImageData;
  buttonText?: string;
  path?: string;
  number: number;
  orientation: "flex-row" | "flex-row-reverse";
};

const steps: StepInvestment[] = [
  {
    title: "Consultoría e investigación",
    description:
      "Nuestros asesores te acompañan durante la definición de tu proyecto de inversión inmobiliaria: desde la búsqueda del inmueble hasta su financiación, pasando por la transacción, la estrategia financiera, la reforma y la gestión del alquiler.",
    image: TestImage,
    number: 1,
    orientation: "flex-row",
  },
  {
    title: "Financiar tu inversión",
    description:
      "Tu asesor personalizado te ayudará a obtener la mejor financiación posible para tu operación: importe de la aportación, plazo del préstamo, amortización diferida, etc. También podremos aconsejarte sobre nuestros partners de confianza o podrás pedir la hipoteca directamente a tu banco. Así de fácil.",
    image: TestImage,
    number: 2,
    orientation: "flex-row-reverse",
  },
  {
    title: "Renovar tu propiedad",
    description:
      "Olvídate de poner un solo pie en las obras. Nuestro equipo de reformas se encarga de todo lo relacionado con la renovación para sacarle el máximo beneficio a tu inversión. Te mantendremos informado del progreso de la obra en cada etapa clave. Y si no quieres, no tendrás ni que visitarla. Lo haremos nosotros por ti.",
    image: TestImage,
    number: 3,
    orientation: "flex-row",
    buttonText: "Descubrir nuestros proyectos",
    path: "/realizaciones",
  },
  {
    title: "Alquiler y gestión",
    description:
      "En cuanto esté renovado y listo para recibir a tus primeros inquilinos, nuestros equipos de gestión se encargarán de alquilar el inmueble, sin ninguna intervención por tu parte. Trabajamos con partners locales de confianza que se ocupan de encontrar los mejores perfiles para que tú solo tengas que recibir el pago del alquiler.",
    image: TestImage,
    number: 4,
    orientation: "flex-row-reverse",
  },
];

export default function InvestmentStepSection() {
  return (
    <CustomSection>
      <SectionTitle title="No inviertas solo" />
      <SectionParagraph text="Masteos te acompaña para que invertir en alquiler sea seguro y rentable. Encontramos las mejores oportunidades para ti."></SectionParagraph>
      {steps.map((step, index) => (
        <StepSection
          key={index}
          buttonText={step.buttonText}
          path={step.path}
          description={step.description}
          image={step.image}
          number={step.number}
          orientation={step.orientation}
          title={step.title}
        />
      ))}
    </CustomSection>
  );
}
