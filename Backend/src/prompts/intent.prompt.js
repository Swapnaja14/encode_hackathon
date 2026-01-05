export const intentPrompt = (analysis) => `
Infer the most likely consumer concern based on this ingredient context.

Do NOT ask questions.

Ingredient context:
${analysis}
`;
