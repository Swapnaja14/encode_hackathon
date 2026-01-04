// import { GoogleGenAI } from "@google/genai";

// const apiKey = process.env.GEMINI_API_KEY;

// export function getGeminiClient() {
//   if (!apiKey) {
//     throw new Error("GEMINI_API_KEY not loaded. Check dotenv config.");
//   }

//   return new GoogleGenAI({ apiKey });
// }

// // REAL, CURRENT model
// const MODEL_NAME = "models/gemini-2.5-flash";

// export async function callGemini(systemPrompt, userPrompt) {
//   const ai = getGeminiClient();

//   const result = await ai.models.generateContent({
//     model: MODEL_NAME,
//     contents: [
//       {
//         role: "user",
//         parts: [
//           {
//             text: `${systemPrompt}\n\n${userPrompt}`,
//           },
//         ],
//       },
//     ],
//   });

//   // ✅ SAFE extraction
//   const text = result?.candidates?.[0]?.content?.parts
//     ?.map(p => p.text)
//     .join("");

//   if (!text) {
//     throw new Error("Gemini returned empty response");
//   }

//   // ✅ FINAL FORMAT (STRING)
//   return text;
// }



// import { GoogleGenAI } from "@google/genai";

// const MODEL_NAME = "models/gemini-2.5-flash";

// export async function callGemini(systemPrompt, userPrompt) {
//   const apiKey = process.env.GEMINI_API_KEY;

//   if (!apiKey) {
//     throw new Error("GEMINI_API_KEY not loaded. dotenv order issue.");
//   }

//   const ai = new GoogleGenAI({ apiKey });

//   const result = await ai.models.generateContent({
//     model: MODEL_NAME,
//     contents: [
//       {
//         role: "user",
//         parts: [
//           {
//             text: `${systemPrompt}\n\n${userPrompt}`,
//           },
//         ],
//       },
//     ],
//   });

//   const text =
//     result.candidates?.[0]?.content?.parts
//       ?.map(p => p.text)
//       .join("");

//   if (!text) {
//     throw new Error("Gemini returned empty response");
//   }

//   return text;
// }




import { GoogleGenAI } from "@google/genai";

// Fail fast if env is broken
if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY not loaded. Check dotenv config.");
}

// Initialize Gemini client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Use a REAL, AVAILABLE model (you already verified this)
const MODEL_NAME = "models/gemini-2.5-flash";

/**
 * Calls Gemini to analyze food ingredients
 * @param {string} ingredientList - Raw ingredient list from user
 * @param {string} ingredientContext - Optional preprocessing / tagging
 * @returns {string} Consumer-facing analysis (80–120 words)
 */
export async function analyzeIngredients(
  ingredientList,
  ingredientContext = ""
) {
  const systemPrompt = `
You are analyzing a food product based ONLY on its ingredient list.

Rules:
- Focus on the single most likely consumer concern
- Select only 2–3 relevant ingredients
- Explain trade-offs
- Mention uncertainty honestly
- No medical advice
- No questions
- Calm, non-alarmist tone
- 80–120 words
- Do NOT list all ingredients
- Do NOT generalize beyond this product
`;

  const userPrompt = `
Ingredients:
${ingredientList}

Ingredient context (if any):
${ingredientContext}
`;

  const result = await ai.models.generateContent({
    model: MODEL_NAME,
    contents: [
      {
        role: "system",
        parts: [{ text: systemPrompt }],
      },
      {
        role: "user",
        parts: [{ text: userPrompt }],
      },
    ],
  });

  // Correct extraction (Gemini does NOT return response.text())
  const text =
    result.candidates?.[0]?.content?.parts
      ?.map(part => part.text)
      .join("");

  if (!text) {
    throw new Error("Gemini returned no text output");
  }

  return text;
}
