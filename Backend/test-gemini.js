import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const result = await ai.models.generateContent({
  model: "models/gemini-2.5-flash",
  contents: [
    {
      role: "user",
      parts: [{ text: "Say hello in one sentence." }],
    },
  ],
});

// ✅ correct extraction
const text =
  result.candidates?.[0]?.content?.parts
    ?.map(p => p.text)
    .join("");

console.log(text);
