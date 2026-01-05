import { callGemini } from "./gemini.client.js";
import { SYSTEM_PROMPT } from "../prompts/system.prompt.js";
import { explanationPrompt } from "../prompts/explanation.prompt.js";

export async function generateExplanation(reasoning) {
  return await callGemini(
    SYSTEM_PROMPT,
    explanationPrompt(reasoning)
  );
}
