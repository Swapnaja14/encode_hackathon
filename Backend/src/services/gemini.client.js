import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("GEMINI_API_KEY =", process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const geminiModel = genAI.getGenerativeModel({
  model: "gemini-1.5-pro"
});

export async function callGemini(systemPrompt, userPrompt) {
  const result = await geminiModel.generateContent([
    { role: "system", parts: [{ text: systemPrompt }] },
    { role: "user", parts: [{ text: userPrompt }] }
  ]);

  // const result = await model.generateContent("Hello Gemini");

  return result.response.text();
}

export default geminiModel;

