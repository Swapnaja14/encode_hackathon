import { callGemini } from "./gemini.client.js";
import { SYSTEM_PROMPT } from "../prompts/system.prompt.js";
import { reasoningPrompt } from "../prompts/reasoning.prompt.js";

export async function reasonAboutIngredients(analysis, intent) {
  return await callGemini(
    SYSTEM_PROMPT,
    reasoningPrompt(analysis, intent)
  );
}
