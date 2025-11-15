export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO =
  import.meta.env.VITE_APP_LOGO ||
  "https://placehold.co/128x128/E1E7EF/1F2937?text=App";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

// Información del Proyecto Sindicalismo Trans-Formador
export const PROYECTO_INFO = {
  nombre: "Coordinación Nacional del Sindicalismo Trans-Formador",
  lema: "El futuro del sindicalismo será inclusivo o no será sindicalismo",
  encuentro: {
    nombre: "38° Encuentro Plurinacional de Mujeres, Lesbianas, Trans, Travestis, Bisexuales, Intersexuales y No Binaries",
    ciudad: "Corrientes",
    fechas: "22, 23 y 24 de noviembre de 2025",
  },
  organizaciones: {
    principal: "UPCN",
    apoyo: ["Zaguán", "ATE", "Otras organizaciones"],
  },
};

export const CONTACTO = {
  email: "contacto@sindicalismotransformador.org",
  telefono: "+54 11 XXXX-XXXX",
};

// Leyenda explicativa junto al QR
export const LEYENDA_QR = `**¿Por qué es importante participar y organizarse?**

Ante la ausencia de Estado, del INADI, de un poder judicial al servicio del poder, ante la falta de recursos de las organizaciones tradicionales que solo activan en época de elecciones, nos toca resistir desde cada lugar.

**Somos les que somos y quedamos les que quedamos.**

Por eso es vital involucrarnos en los gremios: ese es un lugar de resistencia y construcción efectivo y real. También van por los gremios, ahí podemos fortalecernos, estar informades en tiempo real, conocer quiénes somos, dónde militamos, dónde activamos.

Esta plataforma es una herramienta para que todes podamos subir avisos, notificaciones, conectarnos y organizarnos. Es nuestra respuesta cultural ante la represión, lo económico difícil y una clase política que se protege a sí misma.`;

// Provincias argentinas
export const PROVINCIAS = [
  "Buenos Aires", "CABA", "Catamarca", "Chaco", "Chubut", "Córdoba",
  "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja",
  "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan",
  "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero",
  "Tierra del Fuego", "Tucumán",
];

// Anexos del proyecto
export const ANEXOS = [
  {
    numero: 0,
    titulo: "Orientación Teórica y Legal",
    descripcion: "Contacto con abogades del colectivo, de los gremios, jurisprudencia sobre presentaciones individuales y colectivas, seguimiento de casos. La Ley 27.636 como expresión de Doctrina Justicialista",
    ruta: "/anexo-0",
  },
  {
    numero: 1,
    titulo: "Red Provincial",
    descripcion: "Contacto con las provincias, organizaciones provinciales, referentas estatales. Cronología Histórica Normativa del Cupo Laboral Trans (2003-2025)",
    ruta: "/anexo-1",
  },
  {
    numero: 2,
    titulo: "Contactos Internacionales",
    descripcion: "Contacto con organismos internacionales. Experiencias Internacionales: Canadá, Brasil, Reino Unido",
    ruta: "/anexo-2",
  },
  {
    numero: 3,
    titulo: "Cláusulas para Convenios",
    descripcion: "Propuesta informativa sobre cláusulas para los convenios. Modelo de Cláusulas para Convenios Colectivos",
    ruta: "/anexo-3",
  },
  {
    numero: 4,
    titulo: "Protocolo Antidiscriminatorio",
    descripcion: "Propuesta de protocolo para intervención antidiscriminatoria. Autodefenderse institucionalmente. Recursos",
    ruta: "/anexo-4",
  },
  {
    numero: 5,
    titulo: "Radar Trans",
    descripcion: "Sistema de Monitoreo por tus compañeras en todo el país. Indicadores y Métricas para realizar acciones colectivas",
    ruta: "/radar-trans",
  },
  {
    numero: 6,
    titulo: "Formación Digital",
    descripcion: "Programa de Formación Digital Trans-Sindical (pedir respaldo a los gremios)",
    ruta: "/anexo-6",
  },
  {
    numero: 7,
    titulo: "Salud Integral Trans",
    descripcion: "Acceso a la salud. Contacto con obras sociales. Kit de Negociación en Salud Integral Trans",
    ruta: "/anexo-7",
  },
  {
    numero: 8,
    titulo: "Argumentario Legal para Paritarias",
    descripcion: "Propuesta paritarias legal. Argumentario Legal y Técnico para Paritarias",
    ruta: "/anexo-8",
  },
  {
    numero: 9,
    titulo: "Herramientas de Comunicación",
    descripcion: "Este proyecto completo. Herramientas de Comunicación Sindical Trans-Media: Web, App, Bot",
    ruta: "/",
  },
  {
    numero: 12,
    titulo: "Historia de los Encuentros",
    descripcion: "Todo sobre nuestra historia en los Encuentros. Consideraciones Encuentros Pluri de mujeres 35°, 36°, 37°, 38° – Talleres Cupo",
    ruta: "/encuentros",
  },
  {
    numero: 13,
    titulo: "Noticias y Actualidad",
    descripcion: "Noticias sobre todo lo relacionado al mundo sindical, gremial, político relacionado a nuestro laburo. Por qué, para qué y cómo nos afecta la Reforma Laboral",
    ruta: "/noticias",
  },
];