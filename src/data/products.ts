export type ProductStyle = "bikini" | "enterizo";

export interface Product {
  slug: string;
  name: string;
  style: ProductStyle;
  color: string;
  shortDescription: string;
  details: string;
  featured?: boolean;
  image: string;
  gallery?: string[];
  collectionLabel: string;
}

export const STYLE_LABELS: Record<ProductStyle, string> = {
  bikini: "Bikini",
  enterizo: "Enterizo",
};

export const products: Product[] = [
  {
    slug: "set-concha-blanca",
    name: "Set Concha Blanca",
    style: "bikini",
    color: "Blanco · detalle oro",
    shortDescription:
      "Bandeau ribbed con falda wrap y herraje en forma de concha dorada. Un look de arena limpia para playa o terraza.",
    details:
      "Top strapless de textura vertical y bottom/falda con amarre lateral. Consulta color, talla y disponibilidad por WhatsApp.",
    featured: true,
    image: "/products/01.jpg",
    gallery: ["/products/01.jpg", "/products/02.jpg", "/products/08.jpg"],
    collectionLabel: "Arena & Sol",
  },
  {
    slug: "bikini-concha-detalle",
    name: "Bikini Concha — detalle",
    style: "bikini",
    color: "Blanco · piping dorado",
    shortDescription:
      "Detalle del set blanco: textura rib, piping mostaza-dorado y concha metálica. Ideal para ver acabados de cerca.",
    details:
      "Misma línea Concha Blanca. Confirma talla y stock por WhatsApp antes de pedir.",
    featured: true,
    image: "/products/02.jpg",
    gallery: ["/products/02.jpg", "/products/01.jpg", "/products/08.jpg"],
    collectionLabel: "Arena & Sol",
  },
  {
    slug: "set-corasol",
    name: "Set Corasol",
    style: "bikini",
    color: "Print animal · tonos bronce",
    shortDescription:
      "Inspirado en la fuerza, la libertad y el instinto. Diseño que cambia con la luz — el set firma de la campaña Corasol.",
    details:
      "Bikini / set print animal. Consulta referencias, talla y disponibilidad por WhatsApp.",
    featured: true,
    image: "/products/09.jpg",
    gallery: ["/products/09.jpg", "/products/03.jpg", "/products/06.jpg"],
    collectionLabel: "Corasol",
  },
  {
    slug: "conjunto-corasol-resort",
    name: "Conjunto Corasol Resort",
    style: "enterizo",
    color: "Leopardo · falda mesh",
    shortDescription:
      "Top drapeado y falda larga semi-transparente: un solo look de resort para el sol colombiano.",
    details:
      "Pieza de campaña Corasol. Elige talla con nuestra guía y confirma stock por WhatsApp.",
    featured: true,
    image: "/products/04.jpg",
    gallery: ["/products/04.jpg", "/products/05.jpg", "/products/10.jpg"],
    collectionLabel: "Corasol",
  },
  {
    slug: "look-corasol-selva",
    name: "Look Corasol Selva",
    style: "enterizo",
    color: "Leopardo oscuro",
    shortDescription:
      "Silueta de top cruzado y maxifalda mesh. Mood salvaje y femenino para foto, viaje o terraza.",
    details:
      "Referencia de lookbook Corasol. Pide la talla y color exactos por WhatsApp.",
    featured: true,
    image: "/products/10.jpg",
    gallery: ["/products/10.jpg", "/products/05.jpg", "/products/04.jpg"],
    collectionLabel: "Corasol",
  },
  {
    slug: "set-ilumar",
    name: "Set Ilumar",
    style: "bikini",
    color: "Lunares blanco / negro",
    shortDescription:
      "Donde el mar encuentra tu luz. Bikini triángulo + falda larga en lunares — disponible en positivo y negativo.",
    details:
      "Set de tres piezas (top, bottom y falda). Consulta variante de color y talla por WhatsApp.",
    featured: true,
    image: "/products/07.jpg",
    gallery: ["/products/07.jpg", "/products/11.jpg"],
    collectionLabel: "Ilumar",
  },
  {
    slug: "set-ilumar-noir",
    name: "Set Ilumar Noir",
    style: "bikini",
    color: "Negro con lunares blancos",
    shortDescription:
      "La versión negra del Set Ilumar: bikini halter y falda semi-sheer para un look editorial de playa.",
    details:
      "Misma línea Ilumar en base negra. Confirma disponibilidad por WhatsApp.",
    featured: true,
    image: "/products/11.jpg",
    gallery: ["/products/11.jpg", "/products/07.jpg"],
    collectionLabel: "Ilumar",
  },
  {
    slug: "bikini-azul-caribe",
    name: "Bikini Azul Caribe",
    style: "bikini",
    color: "Azul intenso · cuentas oro",
    shortDescription:
      "Triángulo azul con tirantes de cuentas blancas y doradas, más falda mesh a juego. Color que se ve de lejos.",
    details:
      "Bikini + salida en azul Caribe. Consulta talla y stock por WhatsApp.",
    featured: true,
    image: "/products/12.jpg",
    gallery: ["/products/12.jpg"],
    collectionLabel: "Costa viva",
  },
  {
    slug: "corasol-campana",
    name: "Corasol — campaña",
    style: "enterizo",
    color: "Print animal",
    shortDescription:
      "Look de campaña con top y falda larga. Un diseño que cambia con la luz, listo para pedir por chat.",
    details:
      "Referencia editorial Corasol. Te ayudamos a elegir talla por WhatsApp.",
    image: "/products/05.jpg",
    gallery: ["/products/05.jpg", "/products/03.jpg", "/products/04.jpg"],
    collectionLabel: "Corasol",
  },
  {
    slug: "detalle-anillo-corasol",
    name: "Detalle Anillo Corasol",
    style: "bikini",
    color: "Leopardo · herraje oro",
    shortDescription:
      "Close-up del herraje dorado y el print Corasol. Para enamorarte del acabado antes de escribirnos.",
    details:
      "Detalle de colección. Indica la referencia Corasol al pedir por WhatsApp.",
    image: "/products/06.jpg",
    gallery: ["/products/06.jpg", "/products/09.jpg", "/products/03.jpg"],
    collectionLabel: "Corasol",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeatured(limit = 8): Product[] {
  return products.filter((p) => p.featured).slice(0, limit);
}

export function getByStyle(style: ProductStyle): Product[] {
  return products.filter((p) => p.style === style);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        (p.style === product.style || p.collectionLabel === product.collectionLabel)
    )
    .slice(0, limit);
}

export const lookbookShots = [
  { image: "/products/03.jpg", caption: "Set Corasol — campaña", ref: "Corasol" },
  { image: "/products/04.jpg", caption: "Conjunto Corasol Resort", ref: "Corasol Resort" },
  { image: "/products/09.jpg", caption: "GRWM Set Corasol", ref: "Corasol" },
  { image: "/products/11.jpg", caption: "Set Ilumar Noir", ref: "Ilumar Noir" },
  { image: "/products/01.jpg", caption: "Set Concha Blanca", ref: "Concha Blanca" },
  { image: "/products/12.jpg", caption: "Bikini Azul Caribe", ref: "Azul Caribe" },
  { image: "/products/07.jpg", caption: "Set Ilumar", ref: "Ilumar" },
  { image: "/products/10.jpg", caption: "Look Corasol Selva", ref: "Corasol Selva" },
];
