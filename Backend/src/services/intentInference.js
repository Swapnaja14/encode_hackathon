import { callGemini } from "./gemini.client.js";
import { SYSTEM_PROMPT } from "../prompts/system.prompt.js";
import { intentPrompt } from "../prompts/intent.prompt.js";

export async function inferIntent(ingredientAnalysis) {
  return await callGemini(
    SYSTEM_PROMPT,
    intentPrompt(ingredientAnalysis)
  );
}
