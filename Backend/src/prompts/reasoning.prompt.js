export const reasoningPrompt = (analysis, intent) => `
Analyze the ingredient list with respect to the inferred concern.

Tasks:
1. Select only the most relevant ingredients.
2. Explain why they matter.
3. Describe trade-offs.
4. Clearly state uncertainty.

Ingredient analysis:
${analysis}

Inferred concern:
${intent}
`;
