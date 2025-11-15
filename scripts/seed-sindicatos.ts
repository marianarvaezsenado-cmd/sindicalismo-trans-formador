import { drizzle } from "drizzle-orm/mysql2";
import { sindicatos, organismos, organismoSindicato, seccionales } from "../drizzle/schema";

const db = drizzle(process.env.DATABASE_URL!);

async function seedSindicatos() {
  console.log("🌱 Poblando base de datos con sindicatos...");

  // Insertar sindicatos principales
  const [upcn] = await db.insert(sindicatos).values({
    nombre: "Unión del Personal Civil de la Nación",
    sigla: "UPCN",
    ambito: "Trabajadores administrativos, auxiliares y docentes del sector público nacional, provincial y municipal",
    sitioWeb: "https://www.upcndigital.org/",
    telefono: "0800-888-72622",
    email: "info@upcn.org.ar",
    tieneReferenteDiversidad: "no_sabe",
    descripcion: "Sindicato que reúne a los trabajadores de distintos sectores de la administración pública nacional, provincial o municipal",
  }).$returningId();

  const [ate] = await db.insert(sindicatos).values({
    nombre: "Asociación Trabajadores del Estado",
    sigla: "ATE",
    ambito: "Trabajadores del Estado Nacional y algunos estados provinciales",
    sitioWeb: "https://ate.org.ar/",
    tieneReferenteDiversidad: "no_sabe",
    descripcion: "Gremio que reúne a trabajadores del Estado Nacional, algunos de los estados provinciales y menormente de los municipales",
  }).$returningId();

  console.log("✅ Sindicatos principales insertados");

  // Insertar algunos organismos de ejemplo
  const [congreso] = await db.insert(organismos).values({
    nombre: "Honorable Congreso de la Nación",
    tipo: "otro",
    jurisdiccion: "nacional",
    sitioWeb: "https://www.congreso.gob.ar/",
    descripcion: "Poder Legislativo de la Nación Argentina",
  }).$returningId();

  const [senado] = await db.insert(organismos).values({
    nombre: "Honorable Senado de la Nación",
    tipo: "otro",
    jurisdiccion: "nacional",
    sitioWeb: "https://www.senado.gob.ar/",
    descripcion: "Cámara Alta del Congreso de la Nación",
  }).$returningId();

  const [diputados] = await db.insert(organismos).values({
    nombre: "Honorable Cámara de Diputados de la Nación",
    tipo: "otro",
    jurisdiccion: "nacional",
    sitioWeb: "https://www.diputados.gob.ar/",
    descripcion: "Cámara Baja del Congreso de la Nación",
  }).$returningId();

  console.log("✅ Organismos de ejemplo insertados");

  // Relacionar organismos con sindicatos
  await db.insert(organismoSindicato).values([
    { organismoId: congreso.id, sindicatoId: upcn.id, esPrincipal: "si" },
    { organismoId: senado.id, sindicatoId: upcn.id, esPrincipal: "si" },
    { organismoId: diputados.id, sindicatoId: upcn.id, esPrincipal: "si" },
  ]);

  console.log("✅ Relaciones organismo-sindicato creadas");

  // Insertar seccionales de ejemplo
  await db.insert(seccionales).values([
    {
      sindicatoId: upcn.id,
      nombre: "UPCN Capital Federal",
      direccion: "Av. Belgrano 2527, C1096 CABA",
      provincia: "Ciudad Autónoma de Buenos Aires",
      ciudad: "CABA",
      latitud: "-34.6131",
      longitud: "-58.3965",
      telefono: "011-4942-8900",
      horarioAtencion: "Lunes a Viernes de 8:00 a 16:00 hs",
    },
    {
      sindicatoId: ate.id,
      nombre: "ATE Capital",
      direccion: "Av. Belgrano 2527, C1096 CABA",
      provincia: "Ciudad Autónoma de Buenos Aires",
      ciudad: "CABA",
      latitud: "-34.6131",
      longitud: "-58.3965",
      horarioAtencion: "Lunes a Viernes de 9:00 a 17:00 hs",
    },
  ]);

  console.log("✅ Seccionales insertadas");
  console.log("🎉 Base de datos poblada exitosamente!");
}

seedSindicatos()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error poblando la base de datos:", error);
    process.exit(1);
  });
