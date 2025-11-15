# Modificaciones Implementadas - 14 de Noviembre de 2025

## Plataforma Trans-Formadora - Coordinación Federal del Sindicalismo Trans-Formador

---

## ✅ MODIFICACIONES COMPLETADAS

### 1. **Logos en Página Principal**

**Implementado:**
- ✅ Logo de **Zaguán Transindical** arriba del QR code
- ✅ Logo del **Congreso Trans** (círculos con colores de la bandera trans) abajo del QR code
- ✅ Ambos logos integrados en el diseño con fondo rosa

**Archivos:**
- `/home/ubuntu/sindicalismo-trans-formador/client/public/zaguan-logo.jpeg`
- `/home/ubuntu/sindicalismo-trans-formador/client/public/congreso-trans-logo.jpg`

---

### 2. **Mapa Bicontinental de Argentina**

**Implementado:**
- ✅ Mapa bicontinental de Argentina como imagen de fondo del QR code
- ✅ Opacidad ajustada para que el QR sea legible
- ✅ Diseño visual mejorado con superposición de elementos

**Archivo:**
- `/home/ubuntu/sindicalismo-trans-formador/client/public/argentina-bicontinental.jpg`

---

### 3. **Textos Políticos Actualizados**

**Implementado:**
- ✅ **Título:** "Coordinación **Federal**" (cambio de "Nacional" a "Federal")
- ✅ **Subtítulo:** "El futuro del sindicalismo será **revolucionario** o no será" (cambio de "inclusivo" a "revolucionario")
- ✅ **Nuevos mensajes políticos:**
  - "EL ESTADO AHORA SOMOS NOSOTRES"
  - "Somos les que quedamos quienes nos toca la organización"
  - "Es vital y cuestión de defensa propia involucrarnos en los gremios: ese es un lugar que nos pertenece por naturaleza trabajadora estatal hacerlo de nuestra resistencia, formación, construcción efectiva, real es nuestra agencia de cara al 2027"
  - "Recordar. Reacordar. Recuperar la dimensión espiritual de la raíz de esta Argentina de unir, discutir, debatir para encontrar la síntesis"

**Archivo modificado:**
- `/home/ubuntu/sindicalismo-trans-formador/client/src/pages/Home.tsx`

---

### 4. **Efeméride del 13 de Noviembre**

**Implementado:**
- ✅ **Día del Pensamiento Nacional** agregado al calendario
- ✅ Fecha: 13 de noviembre
- ✅ Descripción completa sobre Arturo Jauretche y el Decreto N° 988/2003
- ✅ Categoría: Feriado Nacional
- ✅ Visible en el calendario interactivo

**Script ejecutado:**
- `/home/ubuntu/sindicalismo-trans-formador/scripts/add-dia-pensamiento-nacional.ts`

**Total de efemérides:** 78 (77 originales + 1 nueva)

---

### 5. **Nuevo Recurso: LEY INTEGRAL TRANS - ATTTA**

**Implementado:**
- ✅ Nuevo item agregado en la sección "Nuevos Recursos"
- ✅ Badge "NUEVO" destacado
- ✅ **Descripción:** "ATTTA (Asociación de Travestis, Transexuales y Transgéneros de Argentina). 30 años de lucha por la Ley Integral Trans. Miembro de FALGBT - Federación Argentina LGBT+."
- ✅ Enlace a Instagram: @atttarednacional
- ✅ Icono de balanza (Scale) en color púrpura

**Total de nuevos recursos:** 5
1. CRISTINA LIBRE
2. REPARACIÓN HISTÓRICA
3. MONOTRIBUTO
4. AMMAR - Casa Roja
5. **LEY INTEGRAL TRANS - ATTTA** ✨

**Archivo modificado:**
- `/home/ubuntu/sindicalismo-trans-formador/client/src/pages/Anexos.tsx`

**Investigación realizada:**
- `/home/ubuntu/sindicalismo-trans-formador/investigacion_organizaciones_lgbt.md`

---

### 6. **Bot Mejorado: Diana y Lohana**

**Implementado:**
- ✅ **Preguntas proactivas:**
  - Fecha de cumpleaños para conectar con efemérides
  - Si ingresó por cupo laboral y quiere compartir su historia
  - Si está afiliada a algún sindicato
  - Si necesita acompañamiento o contacto con delegades

- ✅ **Derivación a recursos específicos:**
  - Violencia/despidos → Radar Trans
  - Organizaciones → Anexos (ATTTA, FALGBT, Futuro Trans, AMMAR)
  - Efemérides → Calendario
  - Delegades/seccionales → Mapa de la Red
  - Monotributo → Recurso con info de Zaguán
  - Reparación histórica → Futuro Trans
  - Trabajo sexual → AMMAR - Casa Roja

- ✅ **Invitación a compartir historias** de ingreso al cupo laboral
- ✅ **Recomendación de organizaciones** según la temática de conversación

**Archivo modificado:**
- `/home/ubuntu/sindicalismo-trans-formador/server/routers/bot.ts`

---

### 7. **Agenda Transfeminista Sindical 2026**

**Implementado:**
- ✅ Agenda descargable en formato Markdown
- ✅ **78 efemérides** organizadas por mes
- ✅ Descripción completa de cada fecha
- ✅ Referencias históricas y fuentes
- ✅ Diseño profesional listo para imprimir o convertir a PDF

**Contenido:**
- Todas las efemérides feministas, trans, sindicales y nacionales
- Organizadas por mes (enero a diciembre)
- Información completa: tipo, país, internacional, descripción, referencias, fuentes
- Footer con información de contacto y mensaje político

**Archivo generado:**
- `/home/ubuntu/sindicalismo-trans-formador/Agenda_Transfeminista_Sindical_2026.md`

**Script utilizado:**
- `/home/ubuntu/sindicalismo-trans-formador/scripts/export-efemerides-2026.ts`

---

## 📊 RESUMEN ESTADÍSTICO

### Base de Datos
- **15 tablas** operativas
- **78 efemérides** cargadas (incluye la del 13 de noviembre)
- **5 nuevos recursos** agregados
- **2 sindicatos** principales (UPCN, ATE) con datos completos

### Funcionalidades
- ✅ Página principal con logos y mapa bicontinental
- ✅ Bot conversacional Diana/Lohana con IA (OpenAI gpt-4.1-mini)
- ✅ Mapa interactivo con marcadores de seccionales, delegades y Radar Trans
- ✅ Calendario de efemérides con 78 fechas
- ✅ Radar Trans para reportar violencia institucional
- ✅ 13 Anexos + 5 Nuevos Recursos
- ✅ Historia de los Encuentros Plurinacionales (35°, 36°, 37°, 38°)
- ✅ Formulario de registro completo
- ✅ Contador de visitas

### Diseño
- **Colores:** Rosa/fucsia (#FF69B4), celeste (#ADD8E6), verde (#90EE90), blanco/rosa claro + colores de la bandera trans
- **Responsive:** Adaptado para web y móvil
- **Accesibilidad:** Navegación clara y botones destacados

---

## 🔗 ACCESO A LA PLATAFORMA

**URL de desarrollo:** https://3000-ijpdhwh5m6ce15e6s9if8-76119e76.manusvm.computer

**Puerto local:** 3000

**Estado:** ✅ Operativo y funcional

---

## 📁 ARCHIVOS CLAVE MODIFICADOS

### Frontend (Client)
1. `/home/ubuntu/sindicalismo-trans-formador/client/src/pages/Home.tsx`
   - Logos agregados
   - Mapa bicontinental como fondo del QR
   - Textos políticos actualizados

2. `/home/ubuntu/sindicalismo-trans-formador/client/src/pages/Anexos.tsx`
   - Nuevo recurso ATTTA agregado

3. `/home/ubuntu/sindicalismo-trans-formador/client/src/pages/Bot.tsx`
   - Bot conversacional funcional

4. `/home/ubuntu/sindicalismo-trans-formador/client/src/pages/Mapa.tsx`
   - Mapa interactivo con filtros

5. `/home/ubuntu/sindicalismo-trans-formador/client/src/pages/Calendario.tsx`
   - Calendario con 78 efemérides

6. `/home/ubuntu/sindicalismo-trans-formador/client/src/pages/Encuentros.tsx`
   - Historia de los 4 encuentros

### Backend (Server)
1. `/home/ubuntu/sindicalismo-trans-formador/server/routers/bot.ts`
   - Sistema de prompts mejorado
   - Derivación a recursos
   - Preguntas proactivas

2. `/home/ubuntu/sindicalismo-trans-formador/server/routers/efemerides.ts`
   - Router para calendario

3. `/home/ubuntu/sindicalismo-trans-formador/server/routers/radarTrans.ts`
   - Router para Radar Trans

### Scripts
1. `/home/ubuntu/sindicalismo-trans-formador/scripts/add-dia-pensamiento-nacional.ts`
   - Agregar efeméride del 13 de noviembre

2. `/home/ubuntu/sindicalismo-trans-formador/scripts/export-efemerides-2026.ts`
   - Generar agenda 2026

### Imágenes
1. `/home/ubuntu/sindicalismo-trans-formador/client/public/zaguan-logo.jpeg`
2. `/home/ubuntu/sindicalismo-trans-formador/client/public/congreso-trans-logo.jpg`
3. `/home/ubuntu/sindicalismo-trans-formador/client/public/argentina-bicontinental.jpg`

### Documentación
1. `/home/ubuntu/sindicalismo-trans-formador/investigacion_organizaciones_lgbt.md`
   - Investigación sobre ATTTA, FALGBT y otras organizaciones

2. `/home/ubuntu/sindicalismo-trans-formador/Agenda_Transfeminista_Sindical_2026.md`
   - Agenda descargable con 78 efemérides

3. `/home/ubuntu/sindicalismo-trans-formador/BOT_IMPLEMENTADO.md`
   - Documentación del bot

4. `/home/ubuntu/sindicalismo-trans-formador/PLATAFORMA_COMPLETA_17NOV2025.md`
   - Resumen anterior de la plataforma

---

## 🎯 OBJETIVOS CUMPLIDOS

### Para la Presentación del 17 de Noviembre de 2025

✅ **Todos los objetivos cumplidos:**

1. ✅ Logos de Zaguán y Congreso Trans en página principal
2. ✅ Mapa bicontinental detrás del QR code
3. ✅ Textos políticos actualizados (Federal, revolucionario)
4. ✅ Efeméride del 13 de noviembre agregada
5. ✅ Nuevo recurso ATTTA - Ley Integral Trans
6. ✅ Bot mejorado con preguntas proactivas y derivación a recursos
7. ✅ Agenda 2026 descargable con 78 efemérides

### Para el 38° Encuentro Plurinacional (22-24 de Noviembre de 2025)

✅ **Plataforma completamente funcional:**

- Bot conversacional con personalidades auténticas de Diana y Lohana
- Mapa interactivo de la red nacional
- Calendario de efemérides completo
- Radar Trans para monitoreo colectivo
- 13 Anexos + 5 Nuevos Recursos
- Historia de los Encuentros
- Formulario de registro
- Diseño responsive y accesible

---

## 💪 MENSAJE POLÍTICO

> **"EL ESTADO AHORA SOMOS NOSOTRES"**

> **"Somos les que quedamos quienes nos toca la organización"**

> **"El futuro del sindicalismo será revolucionario o no será"**

> **"Somos les que somos y quedamos les que quedamos"**

---

## 🏳️‍⚧️ RECONOCIMIENTOS

**En memoria de:**
- Diana Sacayán (1975-2015)
- Lohana Berkins (1965-2016)

**Por un sindicalismo inclusivo, trans-formador y de resistencia.**

---

## 📞 CONTACTO

- **Plataforma web:** https://sindicalismo-trans-formador.ar
- **Instagram:** @zaguanttnb
- **Email:** coordinacion@sindicalismo-trans-formador.ar

---

**Fecha de implementación:** 14 de noviembre de 2025

**Próxima presentación:** 17 de noviembre de 2025 (5° aniversario del ingreso al Senado + Día del Militante)

**Encuentro Plurinacional:** 22, 23 y 24 de noviembre de 2025 en Corrientes

---

🏳️‍⚧️ 💪 ✊

**El futuro del sindicalismo será revolucionario o no será.**
