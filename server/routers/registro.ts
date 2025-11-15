import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { registroTrans } from "../../drizzle/schema";

export const registroRouter = router({
  crear: publicProcedure
    .input(
      z.object({
        nombre: z.string().min(1),
        email: z.string().email(),
        telefono: z.string().optional(),
        provincia: z.string().min(1),
        ciudad: z.string().optional(),
        organismo: z.string().optional(),
        sindicato: z.string().optional(),
        situacionLaboral: z.string().optional(),
        comentarios: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      await db.insert(registroTrans).values({
        nombre: input.nombre,
        email: input.email || null,
        telefono: input.telefono || null,
        provincia: input.provincia || null,
        ciudad: input.ciudad || null,
        organismo: input.organismo || "No especificado",
        sindicato: input.sindicato || null,
        situacionLaboral: input.situacionLaboral as any || null,
        comentarios: input.comentarios || null,
      });

      return { success: true };
    }),
});
