// import { callGemini } from "../services/gemini.client.js";

// router.post("/analyze", async (req, res) => {
//   try {
//     const { ingredients } = req.body;

//     const systemPrompt =
//       "You are an AI food expert. Respond clearly and concisely.";

//     const userPrompt =
//       `Create a recipe using these ingredients: ${ingredients}`;

//     const output = await callGemini(systemPrompt, userPrompt);

//     res.json({ success: true, output });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, error: err.message });
//   }
// });

// export default router;




// import express from "express";
// import { callGemini } from "../services/gemini.client.js";

// const router = express.Router();

// router.post("/analyze", async (req, res) => {
//   try {
//     const { systemPrompt, userPrompt } = req.body;

//     if (!userPrompt) {
//       return res.status(400).json({ error: "userPrompt is required" });
//     }

//     const result = await callGemini(
//       systemPrompt || "You are a helpful food analysis assistant.",
//       userPrompt
//     );

//     res.json({
//       success: true,
//       data: result,
//     });
//   } catch (error) {
//     console.error("Analyze error:", error.message);
//     res.status(500).json({
//       success: false,
//       error: error.message,
//     });
//   }
// });

// export default router;




import express from "express";
import { analyzeIngredients } from "../services/gemini.client.js";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  try {
    const { ingredients } = req.body;

    const analysis = await analyzeIngredients(ingredients);

    res.json({ analysis });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
