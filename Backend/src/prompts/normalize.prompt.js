export const normalizePrompt = (rawText) => `
Normalize the following ingredient list.

Tasks:
1. Split into individual ingredients.
2. Remove marketing words.
3. Expand abbreviations if obvious.
4. Keep ingredient names concise.

Return JSON array only.

Ingredient text:
${rawText}
`;
