import { drizzle } from "drizzle-orm/mysql2";
import { efemerides } from "../drizzle/schema";

const db = drizzle(process.env.DATABASE_URL!);

async function addDiaMilitante() {
  await db.insert(efemerides).values({
    dia: 17,
    mes: 11,
    titulo: "Día del Militante",
    descripcion: "Día del Militante en Argentina, en homenaje a los militantes políticos y sociales",
    tipo: "sindical",
    pais: "Argentina",
    esInternacional: "no",
    referenciaHistorica: "Conmemora el compromiso y la lucha de les militantes por la justicia social y los derechos del pueblo",
  });
  console.log("✅ Efeméride del 17 de noviembre - Día del Militante agregada");
}

addDiaMilitante()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error:", error);
    process.exit(1);
  });
