import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

console.log("KEY:", process.env.GEMINI_API_KEY);

const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const response = await client.models.generateContent({
  model: "gemini-1.5-flash",
  contents: "Say hello in one sentence",
});

console.log(response.text);
