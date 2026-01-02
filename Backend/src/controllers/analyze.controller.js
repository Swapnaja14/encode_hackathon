import { extractIngredientsFromImage } from "../services/ingredient.service.js";
import {
  normalizeIngredients,
  classifyIngredients,
  inferUserIntent,
  analyzeRisk,
  explainToUser
} from "../services/reasoning.service.js";

export async function analyzeProduct(req, res) {
  try {
    let ingredientText = req.body.ingredients;
    const productType = req.body.productType || "Packaged food";

    // Image case
    if (req.file) {
      ingredientText = await extractIngredientsFromImage(req.file.path);
    }

    if (!ingredientText) {
      return res.status(400).json({ error: "No ingredient text found" });
    }

    const normalized = await normalizeIngredients(ingredientText);
    const classified = await classifyIngredients(normalized);
    const intent = await inferUserIntent(productType, classified);
    const risk = await analyzeRisk(intent.primary_concern, classified);
    const explanation = await explainToUser(risk);

    res.json({
      ingredients: normalized,
      intent,
      risk,
      explanation
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI processing failed" });
  }
}
