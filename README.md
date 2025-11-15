# 🏳️‍⚧️ Coordinación Federal del Sindicalismo Trans-Formador

**Plataforma Digital Integral para la Organización Sindical Trans**

> *"El futuro del sindicalismo será revolucionario o no será"*

---

## 📋 Sobre el Proyecto

Plataforma web, bot conversacional y app móvil para la **Coordinación Federal del Sindicalismo Trans-Formador**, creada para el **38° Encuentro Plurinacional de Mujeres, Lesbianas, Trans, Travestis, Bisexuales, Intersexuales y No Binaries** (Corrientes, 22-24 de noviembre de 2025).

### **Objetivo**

Crear una red federal de trabajadoras travestis, trans, transgénero y no binarias (TTNB+) que ingresaron al Estado por la **Ley de Cupo Laboral Trans N° 27.636** (Ley Diana Sacayán - Lohana Berkins), fortaleciendo la organización sindical como herramienta de resistencia, defensa y construcción colectiva.

---

## ✨ Funcionalidades

### **🌐 Plataforma Web**

- **Página Principal** con QR code, logos institucionales y mapa bicontinental
- **Bot Conversacional "Diana y Lohana"** con IA (personalidades auténticas)
- **Mapa Interactivo** con geolocalización de seccionales, delegades y reportes
- **Calendario de Efemérides** (78 fechas feministas, trans, sindicales y nacionales)
- **Radar Trans** para monitoreo colectivo de violencia institucional y despidos
- **13 Anexos + 5 Nuevos Recursos** (ATTTA, AMMAR, Futuro Trans, etc.)
- **Historia de los Encuentros Plurinacionales** (35°, 36°, 37°, 38°)
- **Formulario de Registro** (censo/observatorio)

### **🤖 Bot Conversacional**

- Personalidades auténticas de **Diana Sacayán** y **Lohana Berkins**
- Inteligencia Artificial (OpenAI GPT-4.1-mini)
- Derivación inteligente a recursos de la plataforma
- Preguntas proactivas y recomendaciones personalizadas
- Disponible en: Web, WhatsApp (próximamente), Telegram (próximamente)

### **📱 App Móvil** (En desarrollo)

- Todas las funciones de la web adaptadas a móvil
- Notificaciones push de alertas y convocatorias
- Geolocalización mejorada
- Acceso offline a recursos clave

---

## 🛠️ Tecnologías

- **Frontend:** React + TypeScript + Vite
- **Backend:** Node.js + Express + tRPC
- **Base de Datos:** MySQL (15 tablas, 78 efemérides)
- **IA:** OpenAI GPT-4.1-mini
- **Mapas:** Leaflet + OpenStreetMap
- **Estilos:** Tailwind CSS
- **Despliegue:** Vercel (recomendado)

---

## 🚀 Instalación y Despliegue

### **Requisitos Previos**

- Node.js 22.13.0+
- pnpm 10.4.1+
- MySQL 8.0+

### **Instalación Local**

```bash
# Clonar repositorio
git clone https://github.com/[tu-usuario]/sindicalismo-trans-formador.git
cd sindicalismo-trans-formador

# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales

# Ejecutar migraciones de base de datos
pnpm db:push

# Cargar datos iniciales
pnpm db:seed

# Iniciar servidor de desarrollo
pnpm dev
```

### **Despliegue en Vercel (Recomendado)**

1. Crear cuenta en [Vercel](https://vercel.com)
2. Conectar con GitHub
3. Importar este repositorio
4. Configurar variables de entorno:
   - `DATABASE_URL`
   - `OPENAI_API_KEY`
   - `NODE_ENV=production`
5. Deploy automático

Ver guía completa: [GUIA_DESPLIEGUE_PERMANENTE.md](./GUIA_DESPLIEGUE_PERMANENTE.md)

---

## 📊 Base de Datos

### **15 Tablas Operativas**

1. `registro_trans` - Censo de trabajadoras trans
2. `organismos` - Organismos estatales con cupo
3. `sindicatos` - Sindicatos y seccionales
4. `seccionales` - Seccionales por provincia
5. `efemerides` - 78 fechas clave
6. `radar_trans` - Reportes de violencia/despidos
7. `encuentros` - Historia de Encuentros Plurinacionales
8. `contactos` - Red de organizaciones
9. `curriculums` - CVs para bolsa de trabajo
10. `recursos` - Materiales descargables
11. `noticias` - Actualidad sindical
12. `delegados_trans` - Delegades por provincia
13. `organismo_sindicato` - Relación organismos-sindicatos
14. `bot_conversations` - Historial del bot
15. `alertas_colectivas` - Sistema de alertas

---

## 🎨 Diseño

### **Paleta de Colores**

- **Rosa/Fucsia** (#FF69B4) - Principal
- **Celeste** (#ADD8E6) - Secundario
- **Verde claro** (#90EE90) - Acento
- **Colores de la bandera trans** (celeste, rosa, blanco)

### **Identidad Visual**

- Logo de Zaguán Transindical
- Logo del Congreso Trans
- Mapa bicontinental de Argentina
- Diseño responsive (web y móvil)

---

## 📖 Documentación

- [Guía de Despliegue Permanente](./GUIA_DESPLIEGUE_PERMANENTE.md)
- [Estado del Proyecto](./PLATAFORMA_COMPLETA_17NOV2025.md)
- [Modificaciones Recientes](./MODIFICACIONES_14NOV2025_COMPLETAS.md)
- [Bot Implementado](./BOT_IMPLEMENTADO.md)
- [Agenda 2026](./Agenda_Transfeminista_Sindical_2026.md)

---

## 🤝 Contribuir

Este es un proyecto de organización política y sindical. Si querés contribuir:

1. Fork el repositorio
2. Creá una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrí un Pull Request

---

## 📞 Contacto

- **Email:** coordinacion@sindicalismo-trans-formador.ar
- **Instagram:** [@zaguanttnb](https://instagram.com/zaguanttnb)
- **Web:** https://sindicalismo-trans-formador.ar

---

## 🏳️‍⚧️ A la Memoria de

- **Diana Sacayán** (1975-2015) - Activista trans, militante por el cupo laboral
- **Lohana Berkins** (1965-2016) - Fundadora del movimiento trans argentino
- **Eva Duarte de Perón** (1919-1952) - Abanderada de los humildes

---

## 📄 Licencia

Este proyecto está bajo Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 💪 Mensaje Político

> **"EL ESTADO AHORA SOMOS NOSOTRES"**

> **"Somos las que estamos y quedamos quienes nos organizamos"**

En estos tiempos de desamparo de Estado, con la eliminación del Ministerio de las Mujeres, del INADI, y ante un poder judicial que no nos representa, **el sindicalismo es nuestro único lugar de resistencia efectiva y real**.

Es vital y cuestión de **defensa propia** involucrarnos en los gremios. Ese es un lugar que nos pertenece por naturaleza como trabajadoras estatales, y hacerlo nuestro es parte de nuestra resistencia, formación y construcción efectiva de cara al futuro.

---

**"El futuro del sindicalismo será revolucionario o no será"**

🏳️‍⚧️ 💪 ✊ ✌️

---

**Elaborado por:** Natalia García  
**Afiliada UPCN** - Honorable Senado de la Nación  
**Trabajadora Travesti Trans** - Ingreso por Ley 27.636  
**Militante Peronista**

**Noviembre 2025**
