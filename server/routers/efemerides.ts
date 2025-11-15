import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { efemerides } from "../../drizzle/schema";
import { eq, and } from "drizzle-orm";

export const efemeridesRouter = router({
  porMes: publicProcedure
    .input(
      z.object({
        mes: z.number().min(1).max(12),
        tipo: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      let query = db.select().from(efemerides).where(eq(efemerides.mes, input.mes));

      if (input.tipo) {
        query = db
          .select()
          .from(efemerides)
          .where(and(eq(efemerides.mes, input.mes), eq(efemerides.tipo, input.tipo as any)));
      }

      const results = await query;
      return results.sort((a, b) => a.dia - b.dia);
    }),

  todas: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) throw new Error("Database not available");

    const results = await db.select().from(efemerides);
    return results.sort((a, b) => {
      if (a.mes !== b.mes) return a.mes - b.mes;
      return a.dia - b.dia;
    });
  }),

  porDia: publicProcedure
    .input(
      z.object({
        dia: z.number().min(1).max(31),
        mes: z.number().min(1).max(12),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      const results = await db
        .select()
        .from(efemerides)
        .where(and(eq(efemerides.dia, input.dia), eq(efemerides.mes, input.mes)));

      return results;
    }),
});
