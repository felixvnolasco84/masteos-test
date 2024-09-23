import { clashDisplayMedium } from "@/utils/fonts";

type Service = {
  name: string;
  description: string;
};

const services: Service[] = [
  {
    name: "TOTAL FLEXIBILIDAD",
    description:
      "En nuestro espacio para eventos privados, tienes total libertad para elegir proveedores externos. Personaliza tu evento trayendo tu catering, decorador y servicios preferidos. Nos adaptamos a tus necesidades para crear una experiencia única que refleje tu estilo.",
  },
  {
    name: "SERVICIO ALL INCLUSIVE",
    description:
      "En Grupo Amphitryon te ofrecemos un servicio completo que cubre todas tus necesidades. Desde barras libres hasta catering de primera calidad, mobiliario adicional, DJ y más. Nos encargamos de todos los detalles para que puedas disfrutar de un evento sin preocupaciones.",
  },
  {
    name: "ESPACIO LISTOS",
    description:
      "Nuestros espacios para eventos están listos para usar, lo que significa que ya incluyen mobiliario, sistema de sonido, limpieza e iluminación. Esto te permite reducir los costos de producción y simplificar la planificación de tu evento. Disfruta de la comodidad y ahorra tiempo y dinero.",
  },
];

export default function FeaturedServices() {
  return (
    <section className="order-5 grid grid-cols-1 gap-4 lg:order-3 lg:grid lg:grid-cols-3 lg:gap-2">
      {services.map((service) => (
        <div
          className="bg-[#F8F8F8] p-3 lg:p-6 lg:text-left"
          key={service.name}
        >
          <h3
            className={`${clashDisplayMedium.className} text-xl xl:text-2xl my-1 lg:my-2`}
          >
            {service.name}
          </h3>
          <p className="text-base text-[#222222]">{service.description}</p>
        </div>
      ))}
    </section>
  );
}
