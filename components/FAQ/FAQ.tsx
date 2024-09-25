import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "../SectionTitle";
import CustomSection from "../CustomSection";

type FAQProperties = {
  question: string;
  answer: string;
};

const faqs: FAQProperties[] = [
  {
    question:
      "¿Cuánto dura de media una inversión inmobiliaria, desde la búsqueda hasta la puesta en alquiler?",
    answer:
      "El tiempo que se tarda en realizar una inversión de alquiler depende de la rapidez con la que se encuentre la propiedad que encaje con el proyecto del inversor. En una segunda fase, desde la firma de un compromiso de venta, hasta la escritura final de compraventa transcurren unos 3 meses.‍ El tiempo que se tarda en alquilar un inmueble varía en función de las obras que se lleven a cabo, que pueden durar desde unos días hasta unos meses según el tipo de proyecto (lavado de cara o reforma integral).",
  },
  {
    question: "¿Quién será mi interlocutor en Masteos?",
    answer:
      "Un consultor especializado te acompañará a lo largo de tu proyecto de inversión inmobiliaria. También estarás en contacto con otros expertos de Masteos, incluido el captador que buscará propiedades hasta encontrar la inversión de tus sueños. A partir de la compra, un Account Manager te seguirá acompañando para el proyecto de reforma, decoración y alquiler.",
  },
  {
    question: "¿Cómo funciona el mandato de búsqueda?",
    answer:
      "El mandato de búsqueda no es vinculante ni exclusivo. No tienes que pagar por adelantado y cobramos honorarios a éxito. Además, nos adaptamos a tu proyecto, preferencias y presupuesto – nuestra meta es que tu inversión sea un éxito.",
  },
  {
    question: "¿Cuánto cuestan los servicios de Masteos?",
    answer:
      "Los servicios de Masteos cuestan 4.84% del precio de compra de la vivienda.",
  },
];

export default function FAQ({ className }: { className?: string }) {
  return (
    <CustomSection className={"border-t pt-20"}>
      <SectionTitle title="Preguntas frecuentes" />

      <Accordion type="single" collapsible className="container w-full pb-40">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </CustomSection>
  );
}
