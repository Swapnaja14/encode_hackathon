import { normalizeIngredients } from "../services/ingredientNormalizer.js";
import { understandIngredients } from "../services/ingredientUnderstanding.js";
import { inferIntent } from "../services/intentInference.js";
import { reasonAboutIngredients } from "../services/reasoningEngine.js";
import { generateExplanation } from "../services/explanationGenerator.js";

export async function analyzeIngredients(req, res) {
  try {
    const { ingredientsText } = req.body;

    const normalized = await normalizeIngredients(ingredientsText);
    const understanding = await understandIngredients(normalized);
    const intent = await inferIntent(understanding);
    const reasoning = await reasonAboutIngredients(understanding, intent);
    const explanation = await generateExplanation(reasoning);

    res.json({
      normalized,
      intent,
      explanation
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
