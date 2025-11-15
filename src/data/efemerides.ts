export const efemeridesData = [
  { id: 1, dia: 1, mes: 1, titulo: "Año Nuevo", descripcion: "Inicio del año calendario", tipo: "feriado" },
  { id: 2, dia: 24, mes: 1, titulo: "Día Internacional de la Educación", descripcion: "Proclamado por la ONU", tipo: "feminista" },
  { id: 3, dia: 3, mes: 2, titulo: "Asesinato de Lohana Berkins", descripcion: "Lohana Berkins (1965-2016), fundadora del movimiento travesti-trans argentino", tipo: "trans" },
  { id: 4, dia: 8, mes: 3, titulo: "Día Internacional de la Mujer", descripcion: "Conmemoración de la lucha de las mujeres por la igualdad", tipo: "feminista" },
  { id: 5, dia: 24, mes: 3, titulo: "Día Nacional de la Memoria por la Verdad y la Justicia", descripcion: "Conmemoración del golpe de Estado de 1976", tipo: "feriado" },
  { id: 6, dia: 31, mes: 3, titulo: "Día Internacional de la Visibilidad Trans", descripcion: "Día para crear conciencia sobre las personas transgénero", tipo: "trans" },
  { id: 7, dia: 1, mes: 5, titulo: "Día Internacional de los Trabajadores", descripcion: "Conmemoración de los Mártires de Chicago", tipo: "sindical" },
  { id: 8, dia: 17, mes: 5, titulo: "Día Internacional contra la Homofobia, Transfobia y Bifobia", descripcion: "Día para combatir la discriminación", tipo: "trans" },
  { id: 9, dia: 25, mes: 5, titulo: "Día de la Revolución de Mayo", descripcion: "Conmemoración de la Revolución de Mayo de 1810", tipo: "feriado" },
  { id: 10, dia: 3, mes: 6, titulo: "Ni Una Menos", descripcion: "Primera marcha masiva contra los femicidios en Argentina (2015)", tipo: "feminista" },
  { id: 11, dia: 28, mes: 6, titulo: "Día Internacional del Orgullo LGBTIQ+", descripcion: "Conmemoración de los disturbios de Stonewall (1969)", tipo: "trans" },
  { id: 12, dia: 9, mes: 7, titulo: "Día de la Independencia", descripcion: "Declaración de la Independencia de Argentina (1816)", tipo: "feriado" },
  { id: 13, dia: 26, mes: 7, titulo: "Día de Eva Perón", descripcion: "Fallecimiento de Eva Duarte de Perón (1952)", tipo: "feminista" },
  { id: 14, dia: 8, mes: 11, titulo: "Día de la Militancia", descripcion: "Conmemoración del regreso de Juan Domingo Perón a Argentina en 1972", tipo: "sindical" },
  { id: 15, dia: 13, mes: 11, titulo: "Día del Pensamiento Nacional", descripcion: "Homenaje al nacimiento de Arturo Jauretche (1901)", tipo: "feriado" },
  { id: 16, dia: 17, mes: 11, titulo: "Día del Militante", descripcion: "Conmemoración de la masacre de Ezeiza (1973)", tipo: "sindical" },
  { id: 17, dia: 20, mes: 11, titulo: "Día de la Soberanía Nacional", descripcion: "Conmemoración de la Batalla de la Vuelta de Obligado (1845)", tipo: "feriado" },
  { id: 18, dia: 20, mes: 11, titulo: "Día Internacional de la Memoria Trans", descripcion: "Día para recordar a las víctimas de la violencia transfóbica", tipo: "trans" },
  { id: 19, dia: 25, mes: 11, titulo: "Día Internacional de la Eliminación de la Violencia contra la Mujer", descripcion: "Día para concientizar sobre la violencia de género", tipo: "feminista" },
  { id: 20, dia: 25, mes: 12, titulo: "Navidad", descripcion: "Celebración del nacimiento de Jesucristo", tipo: "feriado" },
];

export type Efemeride = typeof efemeridesData[number];
