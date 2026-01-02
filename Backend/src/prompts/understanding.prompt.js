export const understandingPrompt = (ingredients) => `
You are analyzing a food product ingredient list.

Tasks:
- Identify ingredient purpose
- Identify which ingredients matter to consumers
- Ignore nutritionally irrelevant ones

Ingredients:
${JSON.stringify(ingredients)}
`;
