import { callLLM } from "./llm.service.js";
import { SYSTEM_PROMPT } from "../prompts/system.prompt.js";
import { normalizePrompt } from "../prompts/normalize.prompt.js";
import { classifyPrompt } from "../prompts/classify.prompt.js";
import { intentPrompt } from "../prompts/intent.prompt.js";
import { reasoningPrompt } from "../prompts/reasoning.prompt.js";
import { explainPrompt } from "../prompts/explain.prompt.js";

export async function normalizeIngredients(text) {
  const res = await callLLM([
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: normalizePrompt(text) }
  ]);
  return JSON.parse(res);
}

export async function classifyIngredients(ingredients) {
  const res = await callLLM([
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: classifyPrompt(JSON.stringify(ingredients)) }
  ]);
  return JSON.parse(res);
}

export async function inferUserIntent(productType, classified) {
  const res = await callLLM([
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: intentPrompt(productType, JSON.stringify(classified)) }
  ]);
  return JSON.parse(res);
}

export async function analyzeRisk(concern, classified) {
  const res = await callLLM([
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: reasoningPrompt(concern, JSON.stringify(classified)) }
  ]);
  return JSON.parse(res);
}

export async function explainToUser(risk) {
  return await callLLM([
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: explainPrompt(JSON.stringify(risk)) }
  ]);
}
