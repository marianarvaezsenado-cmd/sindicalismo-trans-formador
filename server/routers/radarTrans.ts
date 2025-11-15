import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { reportesRadarTrans } from "../../drizzle/schema";

export const radarTransRouter = router({
  crear: publicProcedure
    .input(
      z.object({
        tipoIncidente: z.string().min(1),
        provincia: z.string().min(1),
        ciudad: z.string().optional(),
        organismo: z.string().optional(),
        descripcion: z.string().min(1),
        fechaIncidente: z.string().optional(),
        nombreReportante: z.string().optional(),
        emailContacto: z.string().optional(),
        telefonoContacto: z.string().optional(),
        esAnonimo: z.string().optional(),
        necesitaAcompanamiento: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      await db.insert(reportesRadarTrans).values({
        tipoIncidente: input.tipoIncidente as any,
        provincia: input.provincia,
        ciudad: input.ciudad || null,
        organismo: input.organismo || null,
        descripcion: input.descripcion,
        fechaIncidente: input.fechaIncidente ? new Date(input.fechaIncidente) : null,
        nombreReportante: input.nombreReportante || null,
        emailContacto: input.emailContacto || null,
        telefonoContacto: input.telefonoContacto || null,
        esAnonimo: (input.esAnonimo as any) || "no",
      });

      return { success: true };
    }),

  todos: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) throw new Error("Database not available");

    const results = await db.select().from(reportesRadarTrans);
    return results.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }),

  porProvincia: publicProcedure
    .input(z.object({ provincia: z.string() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      const results = await db.select().from(reportesRadarTrans);
      return results.filter((r) => r.provincia === input.provincia);
    }),
});
