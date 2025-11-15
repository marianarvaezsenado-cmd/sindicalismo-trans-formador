# Estado Actual del Proyecto - Sindicalismo Trans-Formador
**Fecha del Checkpoint:** 13 de noviembre de 2025  
**Fecha Objetivo Presentación:** 17 de noviembre de 2025  
**Fecha Objetivo Encuentro:** 22-24 de noviembre de 2025 en Corrientes

---

## ✅ COMPLETADO

### 1. Base de Datos (15 Tablas)
- ✅ `users` - Usuarios del sistema
- ✅ `registro_trans` - Censo/observatorio de trabajadoras trans
- ✅ `organismos` - Organismos del sector público
- ✅ `sindicatos` - Información de sindicatos
- ✅ `organismo_sindicato` - Relación entre organismos y sindicatos
- ✅ `delegados_trans` - Delegados trans y referentes de diversidad
- ✅ `seccionales` - Ubicaciones físicas de sindicatos (para geolocalización)
- ✅ `recursos` - Materiales descargables
- ✅ `noticias` - Noticias sobre sindicalismo, política y salud
- ✅ `efemerides` - Efemérides feministas, sindicales, trans y feriados
- ✅ `curriculums` - CVs de personas que quieren ingresar al Estado
- ✅ `contactos` - Organizaciones, abogades, referentes, obras sociales
- ✅ `reportes_radar_trans` - Reportes de violencia institucional, despidos, discriminación
- ✅ `encuentros_pluri` - Historia y seguimiento de Encuentros Plurinacionales
- ✅ `visitas_contador` - Contador de visitas a la plataforma

### 2. Efemérides Cargadas (77 total)
**Feministas:** 31 efemérides
- Día Internacional de las Mujeres (8 de marzo)
- Ni Una Menos (3 de junio)
- Día Internacional de la Eliminación de la Violencia contra la Mujer (25 de noviembre)
- Y 28 más...

**Trans/LGBTIQ+:** 12 efemérides
- Día Internacional de la Visibilidad Transgénero (31 de marzo)
- Sanción Ley de Identidad de Género (9 de mayo)
- Día del Orgullo LGBTTIQ+ (28 de junio)
- Sanción Ley de Cupo Laboral Trans (24 de junio)
- Día Internacional de la Memoria Trans (20 de noviembre)
- Y 7 más...

**Sindicales:** 11 efemérides
- Día del Trabajador (1° de mayo)
- El Cordobazo (29 de mayo)
- Día del Metalúrgico (7 de septiembre)
- Día de la Lealtad Peronista (17 de octubre)
- **Día del Militante (17 de noviembre)** ⭐
- Ley de Residencia (22 de noviembre)
- Y 5 más...

**Feriados Nacionales:** 9 efemérides
- Día de la Memoria (24 de marzo)
- Día del Veterano y Malvinas (2 de abril)
- Primer Gobierno Patrio (25 de mayo)
- Día de la Bandera (20 de junio)
- Declaración de la Independencia (9 de julio)
- Día de la Soberanía Nacional (20 de noviembre)
- Y 3 más...

**Otros:** 14 efemérides

### 3. Datos Iniciales Cargados
- ✅ 2 sindicatos principales: UPCN y ATE
- ✅ 3 organismos de ejemplo: Congreso, Senado, Diputados
- ✅ Seccionales de CABA para ambos sindicatos

### 4. Constantes y Configuración
- ✅ Información del proyecto (nombre, lema, encuentro)
- ✅ Leyenda explicativa del QR
- ✅ Lista de 24 provincias argentinas
- ✅ 12 anexos definidos con rutas y descripciones
- ✅ Contactos del proyecto

### 5. Scripts Creados
- ✅ `scripts/seed-sindicatos.ts` - Poblar sindicatos iniciales
- ✅ `scripts/seed-efemerides.ts` - Poblar 76 efemérides
- ✅ `scripts/add-dia-militante.ts` - Agregar Día del Militante

---

## 🚧 PENDIENTE DE DESARROLLO

### Página Web Principal
- [ ] Landing con QR prominente + Leyenda explicativa
- [ ] Mapa de Argentina bicontinental interactivo
- [ ] Contador de visitas visible
- [ ] Formulario de registro por provincia
- [ ] Diseño con paleta de colores (Zaguán + bandera trans + peronismo)

### Secciones de Anexos (0-13)
- [ ] Anexo 0: Orientación Teórica y Legal
- [ ] Anexo 1: Red Provincial
- [ ] Anexo 2: Contactos Internacionales
- [ ] Anexo 3: Cláusulas para Convenios
- [ ] Anexo 4: Protocolo Antidiscriminatorio
- [ ] Anexo 5: Radar Trans (Sistema de Monitoreo)
- [ ] Anexo 6: Formación Digital
- [ ] Anexo 7: Salud Integral Trans
- [ ] Anexo 8: Argumentario Legal para Paritarias
- [ ] Anexo 9: Herramientas de Comunicación (esta plataforma)
- [ ] Anexo 12: Historia de los Encuentros
- [ ] Anexo 13: Noticias y Actualidad

### Funcionalidades Clave
- [ ] **Radar Trans**: Reportar y visualizar incidentes
- [ ] **Red de Apoyo y Orientación**: Experiencias reales, contactos, leyes
- [ ] **Resistencia en Red**: Mapa en tiempo real de dónde están organizándose
- [ ] **Biblioteca del Cupo**: Todos los documentos sobre cupo laboral TTNB
- [ ] **Alertas Colectivas**: Sistema para activar la red
- [ ] **Calendario de Efemérides**: Visualización mensual/anual
- [ ] **Consulta de Sindicato**: Bot que responde según organismo de trabajo
- [ ] **Subida de Currículums**: Para quienes quieren ingresar al Estado
- [ ] **Geolocalización**: Mapa con seccionales y delegados cercanos

### Bot de Consultas
- [ ] Integración con WhatsApp/Telegram/Web
- [ ] Respuestas sobre sindicatos por organismo
- [ ] Información sobre derechos y contactos
- [ ] Efemérides del día
- [ ] Registro personalizado de cada persona

### App Móvil
- [ ] Versión Android/iOS/Web App
- [ ] Todas las funcionalidades de la web
- [ ] QR integrado para censo
- [ ] Notificaciones push para alertas

---

## 📋 PRÓXIMOS PASOS

### Para el 17 de Noviembre (Presentación)
1. Desarrollar landing principal con QR y leyenda
2. Implementar formulario de registro básico
3. Crear sección de Radar Trans funcional
4. Implementar calendario de efemérides
5. Desarrollar al menos 3 anexos prioritarios (0, 1, 5)

### Para el 22-24 de Noviembre (Encuentro)
1. Completar todos los anexos
2. Implementar bot básico
3. Desarrollar app web responsive
4. Sistema de alertas colectivas
5. Mapa interactivo con geolocalización
6. Biblioteca del Cupo completa

---

## 🎯 ENFOQUE DEL PROYECTO

**Objetivo Real:** No es utopía, es resistencia concreta.

**Tono:** Humilde, humano, real. No promesas, sino herramientas concretas para la resistencia cotidiana.

**Público:** Toda la comunidad TTNB que trabaja o quiere trabajar en el Estado. Red federal, cultural, abierta, autogestiva.

**Contexto:**
- Ausencia de Estado, INADI, poder judicial al servicio del poder
- Organizaciones tradicionales que solo activan en elecciones
- Represión policial, económico difícil, clase política que se protege
- **"Somos les que somos y quedamos les que quedamos"**

**Estrategia:** Los gremios son el lugar de resistencia y construcción efectiva. Conectarnos, orientarnos, apoyarnos.

---

## 🔧 TECNOLOGÍAS UTILIZADAS

- **Backend:** Node.js, Express, tRPC
- **Frontend:** React 19, Tailwind 4
- **Base de Datos:** MySQL/TiDB (Drizzle ORM)
- **Autenticación:** Manus OAuth
- **Deployment:** Manus Platform

---

## 📝 NOTAS IMPORTANTES

1. **17 de noviembre:** Fecha doblemente significativa (5 años ingreso Senado + Día del Militante)
2. **Paleta de colores:** Rosa/fucsia + celeste + verde + colores bandera trans
3. **QR prioritario:** Lo más importante al entrar es el QR con leyenda
4. **Código abierto:** El proyecto es de código abierto, hecho por trabajadores
5. **Transfeminismo:** Fusión de efemérides estatales + feministas + sindicales

---

## ✅ VERIFICACIÓN FINAL

- [x] Base de datos completa (15 tablas)
- [x] 77 efemérides cargadas (incluyendo 17 de noviembre)
- [x] Datos iniciales (sindicatos, organismos, seccionales)
- [x] Constantes y configuración actualizadas
- [x] Scripts de seed funcionando
- [x] Todo.md actualizado con tareas pendientes
- [x] Documentación del estado actual

**Estado:** ✅ LISTO PARA CHECKPOINT

**Próximo paso:** Continuar desarrollo en nueva conversación con este estado como base.
