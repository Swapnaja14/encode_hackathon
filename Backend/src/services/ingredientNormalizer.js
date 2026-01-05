import { callGemini } from "./gemini.client.js";
import { SYSTEM_PROMPT } from "../prompts/system.prompt.js";
import { normalizePrompt } from "../prompts/normalize.prompt.js";

export async function normalizeIngredients(rawText) {
  const response = await callGemini(
    SYSTEM_PROMPT,
    normalizePrompt(rawText)
  );
  return JSON.parse(response);
}
