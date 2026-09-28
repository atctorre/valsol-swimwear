export const WHATSAPP_NUMBER = "573023258929";
export const PHONE_DISPLAY = "302 325 8929";
export const INSTAGRAM_HANDLE = "valsol.swimwear";
export const INSTAGRAM_URL = "https://instagram.com/valsol.swimwear";
export const SITE_NAME = "Valsol Swimwear";
export const SITE_URL = "https://valsol-swimwear.vercel.app";
export const AGENCY_NAME = "AgendadoSV · soluciones digitales";
export const AGENCY_URL = "https://agendadosv.com/";
export const COUNTRY = "Colombia";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  home: "Hola Valsol, vi su página y quiero consultar disponibilidad",
  homeAsesoria: "Hola Valsol, vi su página y quiero asesoría para elegir traje de baño.",
  floating: "Hola Valsol, vi su página y quiero asesoría para elegir traje de baño.",
  catalog: "Hola Valsol, vi el catálogo y quiero consultar una pieza.",
  bikinis: "Hola, me interesan los bikinis. ¿Qué tallas tienen disponibles?",
  enterizos: "Hola, me interesan los enterizos. ¿Qué modelos tienen disponibles?",
  tallas: "Hola, mis medidas son B__ C__ H__. ¿Qué talla me recomiendan?",
  lookbook: "Hola, vi el lookbook y quiero pedir una referencia.",
  lookbookRef: (ref: string) => `Hola, vi el look ${ref} y quiero pedirlo.`,
  comoComprar: "Hola Valsol, quiero comprar por WhatsApp. ¿Me ayudan?",
  cuidados: "Hola Valsol, tengo una duda sobre el cuidado de mi traje de baño.",
  nosotros: "Hola Valsol, vi su página y quiero conocer más de la marca.",
  faq: "Hola Valsol, tengo una pregunta sobre su catálogo.",
  contacto: "Hola Valsol, vi su página y quiero escribirles.",
  product: (name: string, detail?: string) =>
    detail
      ? `Hola Valsol, me interesa ${name} en talla ${detail}. Vi la página y quiero consultar disponibilidad.`
      : `Hola Valsol, me interesa ${name}. Vi la página y quiero consultar disponibilidad.`,
  sizeHelp: (name?: string) =>
    name
      ? `Hola Valsol, tengo dudas de talla para ${name}. Mis medidas: busto ___, cintura ___, cadera ___.`
      : "Hola, mis medidas son B__ C__ H__. ¿Qué talla me recomiendan?",
} as const;
