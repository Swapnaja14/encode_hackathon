import { callGemini } from "./gemini.client.js";
import { SYSTEM_PROMPT } from "../prompts/system.prompt.js";
import { understandingPrompt } from "../prompts/understanding.prompt.js";

export async function understandIngredients(ingredients) {
  return await callGemini(
    SYSTEM_PROMPT,
    understandingPrompt(ingredients)
  );
}
