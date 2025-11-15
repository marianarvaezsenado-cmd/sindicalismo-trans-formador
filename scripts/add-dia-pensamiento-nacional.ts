import { drizzle } from "drizzle-orm/mysql2";
import { efemerides } from "../drizzle/schema";

async function addDiaPensamientoNacional() {
  try {
    const db = drizzle(process.env.DATABASE_URL!);
    await db.insert(efemerides).values({
      dia: 13,
      mes: 11,
      titulo: "Día del Pensamiento Nacional",
      descripcion: "El Día del Pensamiento Nacional se conmemora cada 13 de noviembre en Argentina, en homenaje al nacimiento del pensador, escritor y político Arturo Jauretche. Instituido mediante el Decreto N° 988/2003, este día invita a reflexionar sobre la realidad del país desde una mirada propia, promoviendo el pensamiento crítico, la soberanía intelectual y la valoración de las raíces populares argentinas. Jauretche fue un defensor de la identidad nacional y crítico de las imposiciones culturales extranjeras, abogando por un pensamiento situado y comprometido con la realidad argentina.",
      tipo: "feriado",
      pais: "Argentina",
      esInternacional: "no",
    });

    console.log("✅ Efeméride del 13 de noviembre agregada exitosamente");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error al agregar efeméride:", error);
    process.exit(1);
  }
}

addDiaPensamientoNacional();
