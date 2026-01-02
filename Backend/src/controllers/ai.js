import { extractIngredients, inferIntent, reasonAboutIngredients, generateFollowUp } from "../services/aiReasoning.js";

export const getHealthFact = (req, res) => {
    const facts = [
        "Trans fats found in packaged foods can slowly damage your heart, even if eaten in small amounts.",
        "Some artificial food colors in candies and snacks can make children more restless and less focused.",
        "Highly processed cooking oils can cause inflammation and make your body feel tired or bloated.",
        "Apples contain soluble fiber that supports gut health and blood sugar control.",
        "Bananas are rich in potassium, which helps regulate blood pressure.",
        "Berries contain antioxidants that reduce inflammation."
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    res.json({ fact: randomFact });
};

export const analyseProduct = (req, res) => {
    const { inputType, content } = req.body;
    const ingredients = extractIngredients(inputType, content);
    const intent = inferIntent(ingredients);
    const reasoning = reasonAboutIngredients(ingredients);

    res.json({
        inferredIntent: intent, reasoning,
        finalExplanation: reasoning.finalExplanation
    });
};

export const followUpQuestions = (req, res) => {
    const { previousContent, userQuestion } = req.body;
    const reply = generateFollowUp(previousContent, userQuestion);

    res.json({ reply });
}