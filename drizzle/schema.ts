import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Tablas del Proyecto Sindicalismo Trans-Formador

/**
 * Registro de trabajadoras trans para censo/observatorio
 */
export const registroTrans = mysqlTable("registro_trans", {
  id: int("id").autoincrement().primaryKey(),
  nombre: varchar("nombre", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }),
  telefono: varchar("telefono", { length: 50 }),
  organismo: varchar("organismo", { length: 255 }).notNull(),
  sindicato: varchar("sindicato", { length: 255 }),
  estaAfiliada: mysqlEnum("esta_afiliada", ["si", "no", "no_sabe"]).default("no_sabe"),
  quiereAfiliar: mysqlEnum("quiere_afiliar", ["si", "no", "mas_info"]).default("mas_info"),
  provincia: varchar("provincia", { length: 100 }),
  ciudad: varchar("ciudad", { length: 100 }),
  situacionLaboral: mysqlEnum("situacion_laboral", ["planta_permanente", "contrato", "monotributo", "otro"]),
  necesitaAcompanamiento: mysqlEnum("necesita_acompanamiento", ["si", "no"]).default("no"),
  comentarios: text("comentarios"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type RegistroTrans = typeof registroTrans.$inferSelect;
export type InsertRegistroTrans = typeof registroTrans.$inferInsert;

/**
 * Organismos del sector público
 */
export const organismos = mysqlTable("organismos", {
  id: int("id").autoincrement().primaryKey(),
  nombre: varchar("nombre", { length: 255 }).notNull(),
  tipo: mysqlEnum("tipo", ["ministerio", "secretaria", "ente", "empresa", "otro"]).notNull(),
  jurisdiccion: mysqlEnum("jurisdiccion", ["nacional", "provincial", "municipal"]).notNull(),
  provincia: varchar("provincia", { length: 100 }),
  sitioWeb: varchar("sitio_web", { length: 500 }),
  descripcion: text("descripcion"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Organismo = typeof organismos.$inferSelect;
export type InsertOrganismo = typeof organismos.$inferInsert;

/**
 * Sindicatos
 */
export const sindicatos = mysqlTable("sindicatos", {
  id: int("id").autoincrement().primaryKey(),
  nombre: varchar("nombre", { length: 255 }).notNull(),
  sigla: varchar("sigla", { length: 50 }).notNull(),
  ambito: text("ambito").notNull(),
  sitioWeb: varchar("sitio_web", { length: 500 }),
  telefono: varchar("telefono", { length: 50 }),
  email: varchar("email", { length: 320 }),
  direccion: text("direccion"),
  tieneReferenteDiversidad: mysqlEnum("tiene_referente_diversidad", ["si", "no", "no_sabe"]).default("no_sabe"),
  descripcion: text("descripcion"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Sindicato = typeof sindicatos.$inferSelect;
export type InsertSindicato = typeof sindicatos.$inferInsert;

/**
 * Relación entre organismos y sindicatos
 */
export const organismoSindicato = mysqlTable("organismo_sindicato", {
  id: int("id").autoincrement().primaryKey(),
  organismoId: int("organismo_id").notNull(),
  sindicatoId: int("sindicato_id").notNull(),
  esPrincipal: mysqlEnum("es_principal", ["si", "no"]).default("no"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type OrganismoSindicato = typeof organismoSindicato.$inferSelect;
export type InsertOrganismoSindicato = typeof organismoSindicato.$inferInsert;

/**
 * Delegados trans y referentes de diversidad
 */
export const delegadosTrans = mysqlTable("delegados_trans", {
  id: int("id").autoincrement().primaryKey(),
  nombre: varchar("nombre", { length: 255 }).notNull(),
  sindicatoId: int("sindicato_id").notNull(),
  organismoId: int("organismo_id"),
  rol: varchar("rol", { length: 255 }),
  email: varchar("email", { length: 320 }),
  telefono: varchar("telefono", { length: 50 }),
  esPublico: mysqlEnum("es_publico", ["si", "no"]).default("si"),
  biografia: text("biografia"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type DelegadoTrans = typeof delegadosTrans.$inferSelect;
export type InsertDelegadoTrans = typeof delegadosTrans.$inferInsert;

/**
 * Seccionales sindicales (ubicaciones físicas)
 */
export const seccionales = mysqlTable("seccionales", {
  id: int("id").autoincrement().primaryKey(),
  sindicatoId: int("sindicato_id").notNull(),
  nombre: varchar("nombre", { length: 255 }).notNull(),
  direccion: text("direccion").notNull(),
  provincia: varchar("provincia", { length: 100 }).notNull(),
  ciudad: varchar("ciudad", { length: 100 }).notNull(),
  latitud: varchar("latitud", { length: 50 }),
  longitud: varchar("longitud", { length: 50 }),
  telefono: varchar("telefono", { length: 50 }),
  email: varchar("email", { length: 320 }),
  horarioAtencion: text("horario_atencion"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Seccional = typeof seccionales.$inferSelect;
export type InsertSeccional = typeof seccionales.$inferInsert;

/**
 * Recursos y materiales descargables
 */
export const recursos = mysqlTable("recursos", {
  id: int("id").autoincrement().primaryKey(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  descripcion: text("descripcion"),
  tipo: mysqlEnum("tipo", ["guia", "infografia", "video", "documento", "otro"]).notNull(),
  categoria: varchar("categoria", { length: 100 }),
  archivoUrl: varchar("archivo_url", { length: 500 }).notNull(),
  imagenUrl: varchar("imagen_url", { length: 500 }),
  descargas: int("descargas").default(0),
  esDestacado: mysqlEnum("es_destacado", ["si", "no"]).default("no"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Recurso = typeof recursos.$inferSelect;
export type InsertRecurso = typeof recursos.$inferInsert;

/**
 * Noticias
 */
export const noticias = mysqlTable("noticias", {
  id: int("id").autoincrement().primaryKey(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  resumen: text("resumen"),
  contenido: text("contenido").notNull(),
  categoria: mysqlEnum("categoria", ["sindicalismo", "politica", "salud", "derechos", "otro"]).notNull(),
  imagenUrl: varchar("imagen_url", { length: 500 }),
  autorId: int("autor_id"),
  esDestacada: mysqlEnum("es_destacada", ["si", "no"]).default("no"),
  publicadaEn: timestamp("publicada_en").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Noticia = typeof noticias.$inferSelect;
export type InsertNoticia = typeof noticias.$inferInsert;

/**
 * Efemérides (feministas, sindicales, feriados)
 */
export const efemerides = mysqlTable("efemerides", {
  id: int("id").autoincrement().primaryKey(),
  dia: int("dia").notNull(),
  mes: int("mes").notNull(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  descripcion: text("descripcion"),
  tipo: mysqlEnum("tipo", ["feminista", "sindical", "feriado", "trans", "otro"]).notNull(),
  pais: varchar("pais", { length: 100 }).default("Argentina"),
  esInternacional: mysqlEnum("es_internacional", ["si", "no"]).default("no"),
  referenciaHistorica: text("referencia_historica"),
  fuenteUrl: varchar("fuente_url", { length: 500 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Efemeride = typeof efemerides.$inferSelect;
export type InsertEfemeride = typeof efemerides.$inferInsert;

/**
 * Currículums de personas que quieren ingresar al Estado
 */
export const curriculums = mysqlTable("curriculums", {
  id: int("id").autoincrement().primaryKey(),
  nombre: varchar("nombre", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  telefono: varchar("telefono", { length: 50 }),
  provincia: varchar("provincia", { length: 100 }).notNull(),
  ciudad: varchar("ciudad", { length: 100 }),
  nivelEducativo: varchar("nivel_educativo", { length: 255 }),
  experienciaLaboral: text("experiencia_laboral"),
  areasInteres: text("areas_interes"),
  archivoUrl: varchar("archivo_url", { length: 500 }),
  estadoPostulacion: mysqlEnum("estado_postulacion", ["pendiente", "revisado", "contactado", "archivado"]).default("pendiente"),
  comentarios: text("comentarios"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Curriculum = typeof curriculums.$inferSelect;
export type InsertCurriculum = typeof curriculums.$inferInsert;

/**
 * Contactos de organizaciones, abogades, referentes
 */
export const contactos = mysqlTable("contactos", {
  id: int("id").autoincrement().primaryKey(),
  nombre: varchar("nombre", { length: 255 }).notNull(),
  tipo: mysqlEnum("tipo", ["organizacion", "abogade", "referente", "obra_social", "internacional", "otro"]).notNull(),
  provincia: varchar("provincia", { length: 100 }),
  ciudad: varchar("ciudad", { length: 100 }),
  email: varchar("email", { length: 320 }),
  telefono: varchar("telefono", { length: 50 }),
  sitioWeb: varchar("sitio_web", { length: 500 }),
  descripcion: text("descripcion"),
  especialidad: varchar("especialidad", { length: 255 }),
  esPublico: mysqlEnum("es_publico", ["si", "no"]).default("si"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Contacto = typeof contactos.$inferSelect;
export type InsertContacto = typeof contactos.$inferInsert;

/**
 * Reportes del Radar Trans (violencia institucional, despidos, etc.)
 */
export const reportesRadarTrans = mysqlTable("reportes_radar_trans", {
  id: int("id").autoincrement().primaryKey(),
  tipoIncidente: mysqlEnum("tipo_incidente", ["violencia_institucional", "despido", "discriminacion", "acoso", "otro"]).notNull(),
  provincia: varchar("provincia", { length: 100 }).notNull(),
  ciudad: varchar("ciudad", { length: 100 }),
  organismo: varchar("organismo", { length: 255 }),
  descripcion: text("descripcion").notNull(),
  fechaIncidente: timestamp("fecha_incidente"),
  esAnonimo: mysqlEnum("es_anonimo", ["si", "no"]).default("si"),
  nombreReportante: varchar("nombre_reportante", { length: 255 }),
  emailContacto: varchar("email_contacto", { length: 320 }),
  telefonoContacto: varchar("telefono_contacto", { length: 50 }),
  estadoSeguimiento: mysqlEnum("estado_seguimiento", ["nuevo", "en_proceso", "resuelto", "archivado"]).default("nuevo"),
  esPublico: mysqlEnum("es_publico", ["si", "no"]).default("no"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ReporteRadarTrans = typeof reportesRadarTrans.$inferSelect;
export type InsertReporteRadarTrans = typeof reportesRadarTrans.$inferInsert;

/**
 * Encuentros Plurinacionales (historia y seguimiento)
 */
export const encuentrosPluri = mysqlTable("encuentros_pluri", {
  id: int("id").autoincrement().primaryKey(),
  numero: int("numero").notNull(),
  anio: int("anio").notNull(),
  ciudad: varchar("ciudad", { length: 100 }).notNull(),
  provincia: varchar("provincia", { length: 100 }).notNull(),
  fechaInicio: timestamp("fecha_inicio").notNull(),
  fechaFin: timestamp("fecha_fin").notNull(),
  descripcion: text("descripcion"),
  conclusionesTaller: text("conclusiones_taller"),
  participantes: int("participantes").default(0),
  documentosUrl: text("documentos_url"),
  imagenUrl: varchar("imagen_url", { length: 500 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type EncuentroPluri = typeof encuentrosPluri.$inferSelect;
export type InsertEncuentroPluri = typeof encuentrosPluri.$inferInsert;

/**
 * Contador de visitas
 */
export const visitasContador = mysqlTable("visitas_contador", {
  id: int("id").autoincrement().primaryKey(),
  fecha: timestamp("fecha").defaultNow().notNull(),
  pagina: varchar("pagina", { length: 255 }).notNull(),
  visitas: int("visitas").default(1).notNull(),
});

export type VisitaContador = typeof visitasContador.$inferSelect;
export type InsertVisitaContador = typeof visitasContador.$inferInsert;