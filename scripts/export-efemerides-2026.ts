import { drizzle } from "drizzle-orm/mysql2";
import { efemerides } from "../drizzle/schema";
import { asc } from "drizzle-orm";
import * as fs from "fs";

const MESES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

async function exportEfemerides() {
  try {
    const db = drizzle(process.env.DATABASE_URL!);
    
    // Obtener todas las efemérides ordenadas por mes y día
    const todasEfemerides = await db
      .select()
      .from(efemerides)
      .orderBy(asc(efemerides.mes), asc(efemerides.dia));

    console.log(`✅ ${todasEfemerides.length} efemérides encontradas`);

    // Agrupar por mes
    const porMes: Record<number, typeof todasEfemerides> = {};
    todasEfemerides.forEach(ef => {
      if (!porMes[ef.mes]) {
        porMes[ef.mes] = [];
      }
      porMes[ef.mes].push(ef);
    });

    // Generar Markdown
    let markdown = `# Agenda Transfeminista Sindical 2026\n\n`;
    markdown += `**Coordinación Federal del Sindicalismo Trans-Formador**\n\n`;
    markdown += `*"El futuro del sindicalismo será revolucionario o no será"*\n\n`;
    markdown += `---\n\n`;
    markdown += `Esta agenda reúne las efemérides feministas, trans, sindicales y nacionales que nos constituyen como movimiento. Son fechas de memoria, lucha y resistencia colectiva.\n\n`;
    markdown += `**Total de efemérides:** ${todasEfemerides.length}\n\n`;
    markdown += `---\n\n`;

    // Generar contenido por mes
    for (let mes = 1; mes <= 12; mes++) {
      const efemeridesDelMes = porMes[mes] || [];
      
      markdown += `## ${MESES[mes - 1]} 2026\n\n`;
      
      if (efemeridesDelMes.length === 0) {
        markdown += `*No hay efemérides registradas para este mes.*\n\n`;
      } else {
        efemeridesDelMes.forEach(ef => {
          markdown += `### ${ef.dia} de ${MESES[mes - 1]} - ${ef.titulo}\n\n`;
          
          // Badge del tipo
          const tipoBadge = ef.tipo.charAt(0).toUpperCase() + ef.tipo.slice(1);
          markdown += `**Tipo:** ${tipoBadge}`;
          
          if (ef.pais && ef.pais !== "Argentina") {
            markdown += ` | **País:** ${ef.pais}`;
          }
          
          if (ef.esInternacional === "si") {
            markdown += ` | 🌍 **Internacional**`;
          }
          
          markdown += `\n\n`;
          
          if (ef.descripcion) {
            markdown += `${ef.descripcion}\n\n`;
          }
          
          if (ef.referenciaHistorica) {
            markdown += `**Referencia histórica:**\n${ef.referenciaHistorica}\n\n`;
          }
          
          if (ef.fuenteUrl) {
            markdown += `**Fuente:** [${ef.fuenteUrl}](${ef.fuenteUrl})\n\n`;
          }
          
          markdown += `---\n\n`;
        });
      }
    }

    // Agregar footer
    markdown += `\n\n---\n\n`;
    markdown += `## Sobre esta agenda\n\n`;
    markdown += `Esta agenda fue creada por la **Coordinación Federal del Sindicalismo Trans-Formador** como herramienta de memoria colectiva y organización política.\n\n`;
    markdown += `**Contacto:**\n`;
    markdown += `- Plataforma web: [Sindicalismo Trans-Formador](https://sindicalismo-trans-formador.ar)\n`;
    markdown += `- Instagram: @zaguanttnb\n`;
    markdown += `- Email: coordinacion@sindicalismo-trans-formador.ar\n\n`;
    markdown += `**"Somos les que somos y quedamos les que quedamos"**\n\n`;
    markdown += `🏳️‍⚧️ 💪 ✊\n\n`;
    markdown += `---\n\n`;
    markdown += `*Generado el ${new Date().toLocaleDateString('es-AR')}*\n`;

    // Guardar archivo
    const outputPath = "/home/ubuntu/sindicalismo-trans-formador/Agenda_Transfeminista_Sindical_2026.md";
    fs.writeFileSync(outputPath, markdown, "utf-8");
    
    console.log(`✅ Agenda exportada exitosamente a: ${outputPath}`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error al exportar efemérides:", error);
    process.exit(1);
  }
}

exportEfemerides();
