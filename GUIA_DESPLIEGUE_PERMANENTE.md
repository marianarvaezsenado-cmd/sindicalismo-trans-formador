# 🚀 Guía de Despliegue Permanente

## Plataforma Trans-Formadora - Coordinación Federal del Sindicalismo Trans-Formador

---

## ⚠️ IMPORTANTE

El sandbox de Manus es temporal. Para tener un sitio web permanente y accesible 24/7, necesitás desplegarlo en un servicio de hosting.

**Recomiendo:** **Vercel** (100% gratuito, fácil, profesional)

---

## 📋 REQUISITOS PREVIOS

Antes de comenzar, necesitás:

1. ✅ Una cuenta de **GitHub** (gratuita) - https://github.com
2. ✅ Una cuenta de **Vercel** (gratuita) - https://vercel.com
3. ✅ Una cuenta de **PlanetScale** o **Railway** para la base de datos (gratuita)

---

## 🎯 OPCIÓN 1: DESPLIEGUE RÁPIDO EN VERCEL (RECOMENDADO)

### **Paso 1: Crear cuenta en GitHub**

1. Andá a https://github.com
2. Hacé clic en "Sign up"
3. Completá el registro (email, contraseña, username)

### **Paso 2: Subir el proyecto a GitHub**

**YO VOY A HACER ESTO POR VOS:**

Voy a crear un repositorio público con todo el código y te voy a dar el link.

### **Paso 3: Crear cuenta en Vercel**

1. Andá a https://vercel.com
2. Hacé clic en "Sign Up"
3. Elegí "Continue with GitHub" (conectá con tu cuenta de GitHub)

### **Paso 4: Importar proyecto desde GitHub**

1. En Vercel, hacé clic en "Add New..." → "Project"
2. Buscá el repositorio "sindicalismo-trans-formador"
3. Hacé clic en "Import"
4. Configurá las variables de entorno (te las voy a dar)
5. Hacé clic en "Deploy"

### **Paso 5: ¡Listo!**

Vercel te va a dar una URL permanente tipo:
- `sindicalismo-trans-formador.vercel.app`

Y podés configurar un dominio propio si querés:
- `sindicalismo-trans-formador.com.ar`

---

## 🗄️ BASE DE DATOS PERMANENTE

### **Opción A: PlanetScale (Recomendado)**

1. Andá a https://planetscale.com
2. Creá una cuenta gratuita
3. Creá una nueva base de datos
4. Copiá las credenciales (DATABASE_URL)
5. Pegá la DATABASE_URL en las variables de entorno de Vercel

### **Opción B: Railway**

1. Andá a https://railway.app
2. Creá una cuenta con GitHub
3. Creá un nuevo proyecto MySQL
4. Copiá la DATABASE_URL
5. Pegá en Vercel

---

## 🔑 VARIABLES DE ENTORNO

En Vercel, tenés que configurar estas variables:

```
DATABASE_URL=mysql://usuario:password@host:3306/database
OPENAI_API_KEY=tu_api_key_de_openai
NODE_ENV=production
```

**La API key de OpenAI:**
- Si tenés cuenta de OpenAI: https://platform.openai.com/api-keys
- Si no, puedo ayudarte a conseguir una

---

## 📱 DOMINIO PROPIO (OPCIONAL)

Si querés un dominio tipo `sindicalismo-trans-formador.com.ar`:

1. Comprá el dominio en:
   - **NIC Argentina** (para .com.ar) - https://nic.ar
   - **Namecheap** (para .com, .org) - https://namecheap.com
   
2. En Vercel:
   - Andá a tu proyecto → Settings → Domains
   - Agregá tu dominio
   - Seguí las instrucciones para configurar DNS

---

## 🆘 SI NECESITÁS AYUDA

**Opción 1: Yo lo hago por vos**

Si me das acceso a una cuenta de GitHub y Vercel, puedo configurar todo.

**Opción 2: Te guío paso a paso**

Podemos hacer una videollamada y te voy guiando.

**Opción 3: Contratar a alguien**

Un desarrollador puede hacerlo en 1-2 horas. Costo aproximado: $20.000-$50.000 ARS.

---

## 💰 COSTOS

### **Plan Gratuito (Suficiente para empezar):**

- ✅ Vercel: Gratis
- ✅ GitHub: Gratis
- ✅ PlanetScale: Gratis (5GB de base de datos)
- ✅ Dominio .com.ar: ~$500 ARS/año

**Total: $500 ARS/año (solo el dominio)**

### **Plan Escalable (Si crece mucho):**

- Vercel Pro: $20 USD/mes
- PlanetScale: $29 USD/mes
- Dominio: $500 ARS/año

**Total: ~$50 USD/mes + dominio**

---

## 🎯 PRÓXIMOS PASOS

**¿Qué querés hacer?**

1. **Que yo suba el código a GitHub** y te dé el link para que lo importes en Vercel
2. **Que te explique cada paso** en detalle
3. **Que busquemos a alguien** que lo haga por vos
4. **Que exploremos otras opciones** de hosting

---

**Decime qué preferís y seguimos! 🏳️‍⚧️💪✊**
