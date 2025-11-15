import { drizzle } from "drizzle-orm/mysql2";
import { efemerides } from "../drizzle/schema";

const db = drizzle(process.env.DATABASE_URL!);

async function seedEfemerides() {
  console.log("🌱 Poblando base de datos con efemérides...");

  const efemeridesData = [
    // EFEMÉRIDES FEMINISTAS
    { dia: 10, mes: 1, titulo: "Día de las Mujeres Migrantes", tipo: "feminista", esInternacional: "si" },
    { dia: 6, mes: 2, titulo: "Día Mundial de Tolerancia Cero con la Mutilación Genital Femenina", tipo: "feminista", esInternacional: "si" },
    { dia: 11, mes: 2, titulo: "Día Internacional de la mujer y la niña en la ciencia", tipo: "feminista", esInternacional: "si" },
    { dia: 19, mes: 2, titulo: "Día Internacional contra la Homofobia en el Deporte", tipo: "trans", esInternacional: "si" },
    { dia: 7, mes: 3, titulo: "Día de la Visibilidad Lésbica en Argentina", tipo: "feminista", esInternacional: "no" },
    { dia: 8, mes: 3, titulo: "Día Internacional de las Mujeres", tipo: "feminista", esInternacional: "si", referenciaHistorica: "Conmemora la lucha de las mujeres por la igualdad, el reconocimiento y ejercicio efectivo de sus derechos" },
    { dia: 11, mes: 3, titulo: "Aniversario de la sanción de la Ley 26.485 de protección integral para la mujer", tipo: "feminista", esInternacional: "no" },
    { dia: 18, mes: 3, titulo: "Día de la Promoción de los Derechos de las Personas Trans", tipo: "trans", esInternacional: "no" },
    { dia: 21, mes: 3, titulo: "Día Internacional de la Eliminación de la Discriminación racial / Día Mundial del Síndrome de Down", tipo: "feminista", esInternacional: "si" },
    { dia: 22, mes: 3, titulo: "Día Mundial del Agua", tipo: "otro", esInternacional: "si" },
    { dia: 24, mes: 3, titulo: "Día Nacional de la Memoria por la Verdad y la Justicia / Día Internacional del Derecho a la Verdad", tipo: "feriado", esInternacional: "no", referenciaHistorica: "Conmemora el golpe de Estado de 1976 y honra la memoria de las víctimas del terrorismo de Estado" },
    { dia: 31, mes: 3, titulo: "Día Internacional de la Visibilidad Transgénero", tipo: "trans", esInternacional: "si", referenciaHistorica: "Celebra a las personas transgénero y sensibiliza sobre la discriminación que enfrentan" },
    { dia: 2, mes: 4, titulo: "Día Mundial de Concienciación sobre el Autismo / Día del Veterano y de los caídos en la Guerra de las Malvinas", tipo: "feriado", esInternacional: "no" },
    { dia: 7, mes: 4, titulo: "Día Mundial de la Salud / Día Internacional de Reflexión sobre el Genocidio cometido en Rwanda", tipo: "feminista", esInternacional: "si" },
    { dia: 9, mes: 4, titulo: "Día del pago igualitario en Argentina", tipo: "feminista", esInternacional: "no" },
    { dia: 19, mes: 4, titulo: "Día Americano del Indio", tipo: "feminista", esInternacional: "si" },
    { dia: 23, mes: 4, titulo: "Día Mundial del Libro", tipo: "otro", esInternacional: "si" },
    { dia: 25, mes: 4, titulo: "Día Internacional de la lucha contra el maltrato infantil", tipo: "feminista", esInternacional: "si" },
    { dia: 1, mes: 5, titulo: "Día del trabajador / Día de la Constitución Argentina", tipo: "sindical", esInternacional: "si", referenciaHistorica: "Conmemora las luchas obreras por la jornada laboral de 8 horas y mejores condiciones de trabajo" },
    { dia: 3, mes: 5, titulo: "Día Mundial de la Libertad de Prensa", tipo: "feminista", esInternacional: "si" },
    { dia: 9, mes: 5, titulo: "Aniversario de la sanción de la Ley de Identidad de Género", tipo: "trans", esInternacional: "no", referenciaHistorica: "En 2012 Argentina sancionó la Ley 26.743 de Identidad de Género, pionera en el mundo" },
    { dia: 11, mes: 5, titulo: "Día del Himno Nacional Argentino", tipo: "feriado", esInternacional: "no" },
    { dia: 17, mes: 5, titulo: "Día Internacional de lucha contra la Discriminación Sexual e Identidad de Género", tipo: "trans", esInternacional: "si" },
    { dia: 23, mes: 5, titulo: "Semana Mundial del Parto Respetado (17/5 al 23/5)", tipo: "feminista", esInternacional: "si" },
    { dia: 25, mes: 5, titulo: "Primer Gobierno Patrio", tipo: "feriado", esInternacional: "no", referenciaHistorica: "Revolución de Mayo de 1810, inicio del proceso de independencia argentina" },
    { dia: 28, mes: 5, titulo: "Día Internacional de Acción Global por la Salud de las Mujeres", tipo: "feminista", esInternacional: "si" },
    { dia: 3, mes: 6, titulo: "Ni Una Menos", tipo: "feminista", esInternacional: "no", referenciaHistorica: "Movimiento surgido en Argentina en 2015 contra la violencia de género y los femicidios" },
    { dia: 4, mes: 6, titulo: "Día Internacional de los Niños Víctimas Inocentes de Agresión", tipo: "feminista", esInternacional: "si" },
    { dia: 5, mes: 6, titulo: "Día Mundial del Medio Ambiente", tipo: "otro", esInternacional: "si" },
    { dia: 12, mes: 6, titulo: "Día Mundial contra el Trabajo Infantil", tipo: "sindical", esInternacional: "si" },
    { dia: 19, mes: 6, titulo: "Día Internacional para la Eliminación de la Violencia Sexual en Conflictos", tipo: "feminista", esInternacional: "si" },
    { dia: 20, mes: 6, titulo: "Día de la Bandera", tipo: "feriado", esInternacional: "no" },
    { dia: 24, mes: 6, titulo: "Aniversario de la Sanción de la Ley de Cupo laboral trans en Argentina", tipo: "trans", esInternacional: "no", referenciaHistorica: "En 2021 se sancionó la Ley 27.636 Diana Sacayán - Lohana Berkins de Cupo Laboral Trans" },
    { dia: 26, mes: 6, titulo: "Día Internacional en Apoyo de las Víctimas de la Tortura / Día Internacional de la Lucha contra el Uso indebido y el tráfico ilícito de Drogas", tipo: "feminista", esInternacional: "si" },
    { dia: 28, mes: 6, titulo: "Día Internacional del Orgullo LGBTTIQ+", tipo: "trans", esInternacional: "si", referenciaHistorica: "Conmemora los disturbios de Stonewall en 1969, hito de la lucha por los derechos LGBTIQ+" },
    { dia: 9, mes: 7, titulo: "Declaración de la Independencia", tipo: "feriado", esInternacional: "no", referenciaHistorica: "Declaración de Independencia de Argentina el 9 de julio de 1816" },
    { dia: 14, mes: 7, titulo: "Día Internacional de las Personas no Binarias", tipo: "trans", esInternacional: "si" },
    { dia: 15, mes: 7, titulo: "Aniversario de la sanción de la Ley de Matrimonio Igualitario en Argentina", tipo: "trans", esInternacional: "no", referenciaHistorica: "En 2010 Argentina fue el primer país de América Latina en legalizar el matrimonio igualitario" },
    { dia: 16, mes: 7, titulo: "Día Internacional del DRAG", tipo: "trans", esInternacional: "si" },
    { dia: 20, mes: 7, titulo: "(hasta el 27) 51 años de la Noche del Apagón de Ledesma", tipo: "sindical", esInternacional: "no", referenciaHistorica: "Represión a trabajadores azucareros en Jujuy durante la dictadura militar" },
    { dia: 25, mes: 7, titulo: "Día Internacional de la Mujer negra, latinoamericana y caribeña", tipo: "feminista", esInternacional: "si" },
    { dia: 29, mes: 7, titulo: "60 años de La Noche de los Bastones Largos", tipo: "sindical", esInternacional: "no", referenciaHistorica: "Represión policial a estudiantes y docentes universitarios en 1966" },
    { dia: 30, mes: 7, titulo: "Día Mundial contra la Trata", tipo: "feminista", esInternacional: "si" },
    { dia: 1, mes: 8, titulo: "Inicio de la Semana Mundial de la Lactancia Materna", tipo: "feminista", esInternacional: "si" },
    { dia: 7, mes: 8, titulo: "Fin de la Semana Mundial de la Lactancia Materna", tipo: "feminista", esInternacional: "si" },
    { dia: 9, mes: 8, titulo: "Día Internacional de los Pueblos Indígenas", tipo: "feminista", esInternacional: "si" },
    { dia: 10, mes: 8, titulo: "Día Internacional del Turismo LGBT+", tipo: "trans", esInternacional: "si" },
    { dia: 12, mes: 8, titulo: "Día Internacional de las Juventud", tipo: "otro", esInternacional: "si" },
    { dia: 19, mes: 8, titulo: "Día Mundial de la Asistencia Humanitarias", tipo: "otro", esInternacional: "si" },
    { dia: 20, mes: 8, titulo: "Día del activismo por la Diversidad Sexual", tipo: "trans", esInternacional: "no" },
    { dia: 30, mes: 8, titulo: "Día Internacional de las Víctimas de Desapariciones Forzadas", tipo: "feminista", esInternacional: "si" },
    { dia: 4, mes: 9, titulo: "Día del Inmigrante", tipo: "otro", esInternacional: "no" },
    { dia: 7, mes: 9, titulo: "Día del Metalúrgico", tipo: "sindical", esInternacional: "no", referenciaHistorica: "Conmemora la fundación de la Unión Obrera Metalúrgica (UOM)" },
    { dia: 8, mes: 9, titulo: "Día Internacional de la Alfabetización", tipo: "otro", esInternacional: "si" },
    { dia: 21, mes: 9, titulo: "Día Internacional de la Paz", tipo: "otro", esInternacional: "si" },
    { dia: 23, mes: 9, titulo: "Día Int. De la Lucha contra la Explotación Sexual y Trata de Mujeres, Niños Niñas / Día Internacional de los Derechos Políticos de la Mujer", tipo: "feminista", esInternacional: "si" },
    { dia: 28, mes: 9, titulo: "Día por la despenalización del Aborto en América Latina y el Caribe", tipo: "feminista", esInternacional: "si" },
    { dia: 23, mes: 9, titulo: "Día Internacional de las Bisexualidad", tipo: "trans", esInternacional: "si" },
    { dia: 1, mes: 10, titulo: "Día Internacional de las Personas de Edad", tipo: "otro", esInternacional: "si" },
    { dia: 4, mes: 10, titulo: "Aniversario de la sanción de la Ley Nº 26150 sobre Educación Sexual Integral (ESI)", tipo: "feminista", esInternacional: "no" },
    { dia: 8, mes: 10, titulo: "Día Internacional de las Lesbianas", tipo: "trans", esInternacional: "si" },
    { dia: 11, mes: 10, titulo: "Día internacional de la Niña", tipo: "feminista", esInternacional: "si" },
    { dia: 17, mes: 10, titulo: "Día de la Lealtad Peronista", tipo: "sindical", esInternacional: "no", referenciaHistorica: "Conmemora la movilización popular del 17 de octubre de 1945 que exigió la liberación de Perón" },
    { dia: 20, mes: 10, titulo: "Día del Bancario", tipo: "sindical", esInternacional: "no" },
    { dia: 8, mes: 11, titulo: "Día de la Militancia", tipo: "sindical", esInternacional: "no" },
    { dia: 20, mes: 11, titulo: "Día de la Soberanía Nacional", tipo: "feriado", esInternacional: "no" },
    { dia: 20, mes: 11, titulo: "Día Internacional de la Memoria Trans", tipo: "trans", esInternacional: "si", referenciaHistorica: "Recuerda a las víctimas de la violencia transfóbica" },
    { dia: 22, mes: 11, titulo: "Ley de Residencia (1902)", tipo: "sindical", esInternacional: "no", referenciaHistorica: "Ley represiva contra el movimiento obrero y anarquista en Argentina" },
    { dia: 25, mes: 11, titulo: "Día Internacional de la Eliminación de la Violencia contra la Mujer", tipo: "feminista", esInternacional: "si" },
    { dia: 1, mes: 12, titulo: "Día Mundial de la Lucha contra el SIDA", tipo: "trans", esInternacional: "si" },
    { dia: 8, mes: 12, titulo: "Inmaculada Concepción de María", tipo: "feriado", esInternacional: "no" },
    { dia: 10, mes: 12, titulo: "Día de los Derechos Humanos", tipo: "feminista", esInternacional: "si" },
    { dia: 25, mes: 12, titulo: "Navidad", tipo: "feriado", esInternacional: "si" },
    // EFEMÉRIDES SINDICALES ADICIONALES
    { dia: 30, mes: 3, titulo: "CGT de los Argentinos (1968)", tipo: "sindical", esInternacional: "no", referenciaHistorica: "Fecha emblemática para las luchas sindicales, creación de la CGT de los Argentinos" },
    { dia: 29, mes: 5, titulo: "El Cordobazo (1969)", tipo: "sindical", esInternacional: "no", referenciaHistorica: "Levantamiento cívico-militar en Córdoba contra la dictadura de Onganía" },
    { dia: 25, mes: 5, titulo: "Fundación de la FOA - Federación Obrera Argentina (1901)", tipo: "sindical", esInternacional: "no", referenciaHistorica: "Primera central obrera argentina de orientación anarquista" },
  ];

  for (const efemeride of efemeridesData) {
    await db.insert(efemerides).values(efemeride as any);
  }

  console.log(`✅ ${efemeridesData.length} efemérides insertadas`);
  console.log("🎉 Base de datos poblada exitosamente!");
}

seedEfemerides()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error poblando la base de datos:", error);
    process.exit(1);
  });
