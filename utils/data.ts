import { StaticImageData } from "next/image";

import MOLIERE from "@/public/images/Hero/MoliereHero.webp";
import PALMAS from "@/public/images/HeroNew.webp";
import TONALÁ from "@/public/images/TonalaHome.webp";

// MOLIERE IMAGES
import Moliere2 from "@/public/images/Moliere2.webp";
import Moliere3 from "@/public/images/Moliere3.webp";
import Moliere4 from "@/public/images/Moliere4.webp";

// PALMAS IMAGES
import Palmas1 from "@/public/images/Palmas1.webp";
import Palmas2 from "@/public/images/Palmas2.webp";
import Palmas3 from "@/public/images/Palmas3.webp";
import Palmas4 from "@/public/images/Palmas4.webp";

// TONALÁ IMAGES
import Tonala1 from "@/public/images/Tonala1.webp";
import Tonala2 from "@/public/images/Tonala2.webp";
import Tonala3 from "@/public/images/Tonala3.webp";
import Tonala4 from "@/public/images/Tonala4.webp";

// FLATS
import GALERIAFLAT from "@/public/flat/Galeria.png";
import PEPITAFLAT from "@/public/flat/Pepita.png";
import MACARELLAFLAT from "@/public/flat/Tonala.png";

//FLAT PDF

const GALERIAFLATPDF = "/pdfs/La Galeria.pdf";
const MACARELLAFLATPDF = "/pdfs/Macarella.pdf";
const PEPITAFLATPDF = "/pdfs/Pepita.pdf";

import { PricePlace } from "@/lib/utils";
import { LocalBusiness, WithContext } from "schema-dts";

export type Feature = {
  title: string;
  description: string;
};

export type RentPlace = {
  metaTitle: string;
  metaDescription: string;
  slug: string;
  name: string;
  description: string;
  img: StaticImageData;
  gallery: StaticImageData[];
  features: Feature[];
  largeDescription: string;
  location: string;
  previousLink: string;
  nextLink: string;
  locationInMap: { lat: number; lng: number };
  district: string;
  prices: PricePlace[];
  flat: StaticImageData;
  flatPDF: string;
  calendlyURL: string;
  whatsAppURL: string;
  jsonLd: WithContext<LocalBusiness>;
};

export const rentPlaces: RentPlace[] = [
  {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Moliere 310",
      url: "https://www.amphitryon.mx/moliere-310-polanco",
      logo: "https://www.amphitryon.mx/images/Moliere2.png",
      description:
        "Moliere 310 es un espacio en Polanco con una terraza La Galería, capacidad para 180 personas, techo retráctil y vistas espectaculares de la Ciudad de México",
      telephone: "+52-55-6868-8442",
      priceRange: "$$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Moliere 310",
        addressLocality: "Ciudad de México",
        addressRegion: "CDMX",
        postalCode: "11550",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.434692,
        longitude: -99.195745,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "00:30",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+52-55-6868-8442",
          contactType: "Reservas",
        },
      ],
    },
    metaTitle: "Moliere 310 en Polanco - Grupo Amphytrion",
    metaDescription:
      "Este espacio es un verdadero oasis de sofisticación y comodidad. Es el escenario ideal para eventos de cualquier índole con tu familia, amigos o colegas de trabajo",
    slug: "moliere-310-polanco",
    name: "MOLIERE 310",
    description: "LA GALERÍA",
    img: MOLIERE,
    gallery: [MOLIERE, Moliere2, Moliere3, Moliere4],
    features: [
      {
        title: "Capacidad",
        description: "140 PAX",
      },
      {
        title: "Horario",
        description:
          "L - J: 8:00 AM - 10:00 PM, V - S: 8:00 AM - 11:00 PM, D: 8:00 AM - 7:00 PM",
      },
      {
        title: "Audio",
        description: "SONANCE",
      },
      {
        title: "Mobilario",
        description: "120 PAX (INCLUÍDO)",
      },
      {
        title: "Estructura",
        description: "TECHO RETRÁCTIL",
      },
    ],
    largeDescription:
      "¡Descubre la magia de nuestra terraza La Galería! Ubicada en el corazón de Polanco, ofrecemos una de las mejores vistas de la Ciudad de México. Disfruta de la transición de día a noche mientras te maravillas con la belleza urbana. Nuestro espacio cuenta con un techo retráctil y cortinas motorizadas, operadas por un sistema eléctrico totalmente automatizado, que te permite disfrutar al máximo al aire libre en cualquier clima. Permitimos que la naturaleza y la elegancia se fusionen para brindarte una experiencia inolvidable en tu próximo evento.",
    location: "Polanco",
    previousLink: "/tonala-171-roma-norte",
    nextLink: "/palmas-781-lomas-de-chapultepec",
    locationInMap: {
      lat: 19.4364466,
      lng: -99.2012794,
    },
    district: "Polanco",

    prices: [
      {
        day: "Lunes",
        type: [
          {
            type: "ESPACIO A (100PX)",
            price: 46000,
          },
          {
            type: "ESPACIO B (80PX)",
            price: 41000,
          },
          {
            type: "COMPLETO (180PX)",
            price: 56000,
          },
        ],
      },
      {
        day: "Martes",
        type: [
          {
            type: "ESPACIO A (100PX)",
            price: 46000,
          },
          {
            type: "ESPACIO B (80PX)",
            price: 41000,
          },
          {
            type: "COMPLETO (180PX)",
            price: 56000,
          },
        ],
      },
      {
        day: "Miércoles",
        type: [
          {
            type: "ESPACIO A (100PX)",
            price: 51000,
          },
          {
            type: "ESPACIO B (80PX)",
            price: 46000,
          },
          {
            type: "COMPLETO (180PX)",
            price: 60000,
          },
        ],
      },
      {
        day: "Jueves",
        type: [
          {
            type: "ESPACIO A (100PX)",
            price: 53000,
          },
          {
            type: "ESPACIO B (80PX)",
            price: 48000,
          },
          {
            type: "COMPLETO (180PX)",
            price: 61000,
          },
        ],
      },
      {
        day: "Viernes",
        type: [
          {
            type: "ESPACIO A (100PX)",
            price: 71000,
          },
          {
            type: "ESPACIO B (80PX)",
            price: 61000,
          },
          {
            type: "COMPLETO (180PX)",
            price: 86000,
          },
        ],
      },
      {
        day: "Sábado",
        type: [
          {
            type: "ESPACIO A (100PX)",
            price: 76000,
          },
          {
            type: "ESPACIO B (80PX)",
            price: 66000,
          },
          {
            type: "COMPLETO (180PX)",
            price: 90000,
          },
        ],
      },
      {
        day: "Domingo",
        type: [
          {
            type: "ESPACIO A (100PX)",
            price: 46000,
          },
          {
            type: "ESPACIO B (80PX)",
            price: 41000,
          },
          {
            type: "COMPLETO (180PX)",
            price: 56000,
          },
        ],
      },
    ],
    flat: GALERIAFLAT,
    flatPDF: GALERIAFLATPDF,
    calendlyURL:
      "https://calendly.com/amphitryonterrazas/la-galeria?hide_event_type_details=0&hide_gdpr_banner=0&primary_color=000409",
    whatsAppURL:
      "https://wa.me/5620244047?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios",
  },

  {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Palmas 781",
      url: "https://www.amphitryon.mx/tonala-171-roma-norte",
      logo: "https://www.amphitryon.mx/images/Palmas1.png",
      description:
        "Palmas 781 es un espacio exclusivo en Lomas de Chapultepec, ideal para eventos con capacidad para hasta 200 personas. Ofrece mobiliario premium, sistema de sonido Bosé y un ambiente sofisticado.",
      telephone: "+52-55-6868-8442",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Palmas 781",
        addressLocality: "Ciudad de México",
        addressRegion: "CDMX",
        postalCode: "11000",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.426587,
        longitude: -99.218727,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "02:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+52-55-6868-8442",
          contactType: "Reservas",
        },
      ],
    },
    metaTitle: "Palmas 781 en Lomas de Chapultepec - Grupo Amphytrion",
    metaDescription:
      "Ubicado en una de las zonas más recordadas de México, en esta ubicación disfruta de la elegancia de nuestro mobiliario premium, diseñado para realzar la belleza de cada reunión.",
    slug: "palmas-781-lomas-de-chapultepec",
    name: "PALMAS 781",
    description: "MACARELLA",
    img: PALMAS,
    gallery: [Palmas1, Palmas2, Palmas3, Palmas4],
    features: [
      {
        title: "Capacidad",
        description: "200 PAX",
      },
      {
        title: "Horario",
        description: "8:00 - 2:00",
      },
      {
        title: "Audio",
        description: "BOSÉ",
      },
      {
        title: "Mobilario",
        description: "INCLUÍDO",
      },
    ],
    largeDescription:
      "Estratégicamente ubicado en el corazón de las Lomas de Chapultepec, este espacio es un verdadero oasis de sofisticación y comodidad. Con capacidad para hasta 200 personas en formato cóctel y 140 en formato sentado, es el escenario ideal para eventos de cualquier índole. Disfruta de la elegancia de nuestro mobiliario premium, diseñado para realzar la belleza de cada reunión. Además, nuestro sistema de sonido premium garantiza una experiencia acústica incomparable, mientras que la ubicación privilegiada dentro de Plaza Carso de Palmas te brinda la máxima seguridad y prestigio para tu evento. Déjate cautivar por la magia de Macarella, donde la seguridad, el lujo y la exclusividad se fusionan para ofrecerte una experiencia única e inolvidable. ¡Haz de tu próximo evento un momento inigualable en un entorno de máxima distinción!",
    location: "Lomas de Chapultepec",
    previousLink: "/moliere-310-polanco",
    nextLink: "/tonala-171-roma-norte",
    locationInMap: {
      lat: 19.429364,
      lng: -99.216756,
    },
    district: "Lomas de Chapultepec",
    prices: [
      {
        day: "Lunes",
        type: [
          {
            type: "Terraza (80PX)",
            price: 30500,
          },
          {
            type: "Completo (200PX)",
            price: 42500,
          },
        ],
      },
      {
        day: "Martes",
        type: [
          {
            type: "Terraza (80PX)",
            price: 30500,
          },
          {
            type: "Completo (200PX)",
            price: 42500,
          },
        ],
      },
      {
        day: "Miércoles",
        type: [
          {
            type: "Terraza (80PX)",
            price: 40500,
          },
          {
            type: "Completo (200PX)",
            price: 62500,
          },
        ],
      },
      {
        day: "Jueves",
        type: [
          {
            type: "Terraza (80PX)",
            price: 40500,
          },
          {
            type: "Completo (200PX)",
            price: 62500,
          },
        ],
      },
      {
        day: "Viernes",
        type: [
          {
            type: "Terraza (80PX)",
            price: 46000,
          },
          {
            type: "Completo (200PX)",
            price: 77000,
          },
        ],
      },
      {
        day: "Sábado",
        type: [
          {
            type: "Terraza (80PX)",
            price: 46000,
          },
          {
            type: "Completo (200PX)",
            price: 77000,
          },
        ],
      },
      {
        day: "Domingo",
        type: [
          {
            type: "Terraza (80PX)",
            price: 30500,
          },
          {
            type: "Completo (200PX)",
            price: 42500,
          },
        ],
      },
    ],
    flat: MACARELLAFLAT,
    flatPDF: MACARELLAFLATPDF,
    calendlyURL:
      "https://calendly.com/amphitryonterrazas/macarella?hide_event_type_details=0&hide_gdpr_banner=0&text_color=080808&primary_color=000205",
    whatsAppURL:
      "https://wa.me/5620244047?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios",
  },
  {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Tonalá 171",
      url: "https://www.amphitryon.mx/tonala-171-roma-norte",
      logo: "https://www.amphitryon.mx/images/Tonala1.png",
      description:
        "Tonalá 171 ofrece un espacio exclusivo en la Colonia Roma Norte con capacidad para eventos de hasta 90 personas. Disfruta de una vista inigualable y un ambiente elegante en medio de la naturaleza.",
      telephone: "+52-55-6868-8442",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tonalá 171",
        addressLocality: "Ciudad de México",
        addressRegion: "CDMX",
        postalCode: "06700",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.417047,
        longitude: -99.161392,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "00:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+52-55-6868-8442",
          contactType: "Reservas",
        },
      ],
    },
    metaTitle: "Tonalá 171 en Roma Norte - Grupo Amphytrion",
    metaDescription:
      "Nuestra terraza te ofrece serenidad y sofisticación en medio del bullicio de la ciudad de México. Disfruta de una vista incomparable rodeada de exuberante vegetación",
    slug: "tonala-171-roma-norte",
    name: "TONALÁ 171",
    description: "TERRAZA PEPITA",
    img: TONALÁ,
    gallery: [Tonala1, Tonala2, Tonala3, Tonala4],
    features: [
      {
        title: "Capacidad",
        description: "90 PAX",
      },
      {
        title: "Horario",
        description: "8:00 - 0:00",
      },
      {
        title: "Audio",
        description: "MEYER SOUND",
      },
      {
        title: "Mobilario",
        description: "INCLUÍDO",
      },
    ],
    largeDescription:
      "Ubicada en el corazón de la Colonia Roma Norte de la Ciudad de México, nuestra terraza te ofrece un refugio sereno y sofisticado en medio del bullicio de la ciudad de México. Disfruta de una vista incomparable rodeada de exuberante vegetación, convirtiendo tu evento en una experiencia verdaderamente especial. Con capacidad para hasta 90 personas en formato cóctel y de hasta 40 personas en formato todos sentados, nuestro espacio es el escenario perfecto para reuniones íntimas y eventos exclusivos. Sumérgete en la arquitectura excepcional de una de las casas más distinguidas de la ciudad, donde cada detalle está cuidadosamente diseñado para ofrecerte un ambiente de lujo y exclusividad, en sintonía con las buenas vibras de la Colonia Roma. Déjate envolver por la atmósfera única de Terraza Tonalá, donde la fusión entre la naturaleza y la elegancia crea un entorno mágico y encantador. Escapa de la rutina y haz de tu evento una experiencia inolvidable en medio de la tranquilidad y belleza de nuestra terraza. ¡Te esperamos para crear momentos memorables juntos!",
    location: "Roma Norte",
    previousLink: "/palmas-781-lomas-de-chapultepec",
    nextLink: "/moliere-310-polanco",
    locationInMap: {
      lat: 19.4135428,
      lng: -99.1642174,
    },
    district: "ROMA NORTE",
    prices: [
      {
        day: "Lunes",
        type: [
          {
            type: "Terraza (90PX)",
            price: 35000,
          },
        ],
      },
      {
        day: "Martes",
        type: [
          {
            type: "Terraza (90PX)",
            price: 35000,
          },
        ],
      },
      {
        day: "Miércoles",
        type: [
          {
            type: "Terraza (90PX)",
            price: 40000,
          },
        ],
      },
      {
        day: "Jueves",
        type: [
          {
            type: "Terraza (90PX)",
            price: 40000,
          },
        ],
      },
      {
        day: "Viernes",
        type: [
          {
            type: "Terraza (90PX)",
            price: 45000,
          },
        ],
      },
      {
        day: "Sábado",
        type: [
          {
            type: "Terraza (90PX)",
            price: 45000,
          },
        ],
      },
      {
        day: "Domingo",
        type: [
          {
            type: "Terraza (90PX)",
            price: 35000,
          },
        ],
      },
    ],
    flat: PEPITAFLAT,
    flatPDF: PEPITAFLATPDF,
    calendlyURL:
      "https://calendly.com/amphitryonterrazas/terraza-pepita?hide_event_type_details=0&hide_gdpr_banner=0&primary_color=000306",
    whatsAppURL:
      "https://wa.me/5620244047?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios",
  },
];
