# Bot "Hablás con Diana o Lohana" - IMPLEMENTADO ✅

## Estado: FUNCIONAL

**Fecha de implementación:** 13 de noviembre de 2025

---

## Características Implementadas

### 1. Personalidades Auténticas
- **Diana Sacayán:** Responde sobre temas políticos, datos, trabajo, sindicatos, cupo laboral
- **Lohana Berkins:** Responde sobre identidad, orgullo, experiencias vividas, contención emocional
- Sistema de alternancia automática según el tema de conversación

### 2. Base de Conocimiento
- Investigación exhaustiva de entrevistas, discursos y escritos reales
- Frases textuales de ambas activistas
- Datos históricos y estadísticos precisos
- Contexto de la plataforma y sus funcionalidades

### 3. Integración Técnica
- ✅ Router tRPC: `/server/routers/bot.ts`
- ✅ Página del bot: `/client/src/pages/Bot.tsx`
- ✅ Ruta configurada: `/bot`
- ✅ API de OpenAI (gpt-4.1-mini) funcionando correctamente
- ✅ Manejo de errores y logging implementado

### 4. Diseño Visual
- Colores diferenciados por personalidad:
  - **Diana:** Celeste (secondary)
  - **Lohana:** Verde (accent)
- Interfaz de chat con burbujas de mensajes
- Indicador de quién está hablando
- Timestamps en cada mensaje
- Botón destacado en la página principal

---

## Ejemplo de Respuesta de Diana

**Pregunta:** "¿Qué es el cupo laboral trans?"

**Respuesta de Diana:**
> "Compañera, el cupo laboral trans es una política pública fundamental que busca reparar la exclusión histórica que sufrimos las personas travestis, trans y no binaries en el mundo del trabajo formal. En Argentina, la Ley 27.636 lleva nuestro nombre y establece que al menos el 1% de los empleos en el sector público nacional deben ser ocupados por personas travestis, trans y no binaries.
> 
> ¿Por qué es tan importante? Porque el promedio de vida de una persona trans en Argentina es de 32 años, en gran parte por la marginalización y la violencia que sufrimos. El 95% de nosotres vimos en la prostitución una de las pocas alternativas de subsistencia, una forma de esclavitud que queremos erradicar desde la organización y el trabajo digno.
>
> El cupo laboral trans es una herramienta estratégica para que podamos producir políticas públicas, discursos, trabajo genuino. No somos sólo cuerpos para placer, somos ciudadanas de primera, con derechos plenos y capacidad para transformar la sociedad desde dentro de los gremios y las organizaciones."

---

## Funcionalidades del Bot

1. **Información sobre cupo laboral trans**
2. **Explicación de la Ley 27.636 (Diana Sacayán - Lohana Berkins)**
3. **Orientación sobre sindicatos (UPCN, ATE, otros)**
4. **Contención y acompañamiento sobre identidad**
5. **Invitación a registrarse en la plataforma**
6. **Conexión con delegades trans**
7. **Información sobre el 38° Encuentro Plurinacional**
8. **Explicación del Radar Trans**

---

## Temas que Maneja

### Diana responde sobre:
- Trabajo, sindicatos, cooperativas
- Datos, estadísticas, información legal
- Organización política, movimientos sociales
- Cupo laboral trans
- Prostitución vs. trabajo genuino
- Estrategias políticas
- Violencia institucional con datos
- Clase social y orientación sexual

### Lohana responde sobre:
- Identidad, orgullo, dignidad
- Contención emocional, acompañamiento
- Violencia, discriminación, experiencias cotidianas
- Cuerpo travesti
- Educación como liberación
- Vejez y derecho a envejecer
- Historias personales

---

## Limitaciones Explícitas

El bot NO puede:
- Resolver casos legales (deriva a abogades)
- Dar diagnósticos médicos (deriva a salud)
- Prometer trabajos (explica cómo funciona el cupo)
- Reemplazar la organización colectiva (invita a participar)

---

## Archivos Clave

### Investigación
- `/home/ubuntu/sindicalismo-trans-formador/investigacion_diana_lohana_COMPLETA.md`
- `/home/ubuntu/sindicalismo-trans-formador/investigacion_diana_pagina12.md`
- `/home/ubuntu/sindicalismo-trans-formador/investigacion_diana_marcha.md`

### Código
- `/home/ubuntu/sindicalismo-trans-formador/server/routers/bot.ts`
- `/home/ubuntu/sindicalismo-trans-formador/client/src/pages/Bot.tsx`
- `/home/ubuntu/sindicalismo-trans-formador/client/src/App.tsx`

---

## Próximos Pasos

### Mejoras Futuras (Post-17 de noviembre)
1. Guardar historial de conversaciones en base de datos
2. Implementar en WhatsApp y Telegram
3. Agregar más contexto sobre casos específicos
4. Mejorar sistema de alternancia entre Diana y Lohana
5. Agregar funcionalidad de "hablar con ambas a la vez"
6. Integrar con Radar Trans para reportes directos desde el chat
7. Conectar con sistema de registro/censo

---

## Notas Técnicas

- **Modelo:** gpt-4.1-mini (OpenAI-compatible API)
- **Temperature:** 0.8 (balance entre creatividad y coherencia)
- **Max tokens:** 500 (respuestas concisas pero completas)
- **Base URL:** https://api.manus.im/api/llm-proxy/v1
- **Variables de entorno:** OPENAI_API_KEY, OPENAI_BASE_URL

---

## Conclusión

El bot "Hablás con Diana o Lohana" está **completamente funcional** y listo para la presentación del 17 de noviembre de 2025. Las personalidades son auténticas, las respuestas son coherentes y contextuales, y la integración con la plataforma es completa.

**Estado:** ✅ LISTO PARA PRODUCCIÓN
