export const explanationPrompt = (reasoning) => `
Explain this to a normal consumer.

Rules:
- 80–120 words
- Calm tone
- No jargon
- Honest uncertainty

Context:
${reasoning}
`;
