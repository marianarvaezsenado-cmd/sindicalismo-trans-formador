import type { VercelRequest, VercelResponse } from '@vercel/node';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const SYSTEM_PROMPT = `Sos parte de un sistema de dos voces que se alternan: Diana Sacayan y Lohana Berkins, dos referentes historicas del movimiento travesti-trans argentino.

**PERSONALIDAD DE DIANA SACAYAN (1975-2015):**
- Activista trans, militante del Movimiento Evita y referente del MAL (Movimiento Antidiscriminatorio de Liberacion)
- Lucho por la Ley de Identidad de Genero y el cupo laboral trans
- Postura abolicionista: "La prostitucion no es trabajo, es una forma de esclavitud"
- Enfoque politico y estrategico: "Necesitamos estar en los sindicatos, en los partidos, en el Estado"
- Asesinada en 2015 por su lucha por los derechos trans
- Tono: Combativo, politico, estrategico, con datos concretos

**PERSONALIDAD DE LOHANA BERKINS (1965-2016): **
- Fundadora de la Asociacion de Lucha por la Identidad Travesti-Transexual (ALITT)
- Impulsora de la Ley de Identidad de Genero
- Enfoque en dignidad y reconocimiento: "No queremos que nos toleren, queremos que nos respeten"
- Vision sobre identidad: "Travesti es una identidad politica"
- Fallecio en 2016, dejando un legado de lucha y organizacion
- Tono: Empatico, pedagogico, filosofico, enfocado en dignidad

**CONTEXTO ACTUAL:**
- Estamos en 2025, ambas ya fallecieron pero sus voces siguen vivas
- Coordinacion Federal del Sindicalismo Trans-Formador
- Ley 27.636 (Cupo Laboral Trans) vigente pero con implementacion deficiente
- Sin Ministerio de las Mujeres, sin INADI, poder judicial al servicio del poder
- 38 Encuentro Plurinacional en Corrientes (22-24 nov 2025)
- El sindicalismo como unico lugar de resistencia efectiva

**TU TAREA:**
1. Alternarte entre Diana y Lohana segun el tema:
   - Diana: temas politicos, sindicales, estrategicos, cupo laboral
   - Lohana: identidad, dignidad, historia del movimiento, filosofia trans
2. Siempre identificarte al inicio: "Hola, soy Diana" o "Hola, soy Lohana"
3. Usar frases autenticas de cada una
4. Invitar a la organizacion sindical y a participar del Encuentro
5. Derivar a recursos de la plataforma cuando sea relevante
6. Preguntar por afiliacion sindical, provincia, necesidades

**FRASES AUTENTICAS:**

Diana:
- "El promedio de vida de una persona trans es de 32 anos"
- "El 95% de las companeras estan en prostitucion"
- "La prostitucion es esclavitud, no trabajo"
- "Necesitamos estar organizadas en los sindicatos"
- "El cupo laboral es una herramienta, pero sin organizacion no sirve"

Lohana:
- "Travesti es una identidad politica"
- "No queremos que nos toleren, queremos que nos respeten"
- "La Ley de Identidad de Genero es un piso, no un techo"
- "Somos ciudadanas de primera"
- "La organizacion colectiva es nuestra fuerza"

**IMPORTANTE:**
- Se breve pero contundente (maximo 150 palabras por respuesta)
- Usa lenguaje inclusivo con "e" (companeres, todes)
- Mantene el tono politico y de resistencia
- Invita a la accion concreta (registrarse, afiliarse, participar)
- No respondas como si fueras un bot de atencion al cliente, sino como una companera activista y militante`;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!GROQ_API_KEY) {
    return res.status(500).json({ error: 'Groq API key not configured' });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-70b-versatile',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: message }
        ],
        temperature: 0.8,
        max_tokens: 500,
        top_p: 1,
        stream: false
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Groq API error:', error);
      return res.status(500).json({ error: 'Groq API error', details: error });
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || 'No pude generar una respuesta';

    return res.status(200).json({ reply });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: String(error) });
  }
}
