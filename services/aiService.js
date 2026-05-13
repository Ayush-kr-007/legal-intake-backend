const Groq = require("groq-sdk");

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const categorizeQuery = async (query) => {
  try {
    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `
You are a legal assistant AI.

Categorize the legal issue into one of these:
- Criminal Law
- Employment Law
- Family Law
- Property Law
- Tenant Law
- Consumer Law
- Other

Also assign priority:
- Low
- Medium
- High

Return ONLY valid JSON.

Example:
{
  "category": "Tenant Law",
  "priority": "Medium"
}
          `,
        },
        {
          role: "user",
          content: query,
        },
      ],
      temperature: 0,
    });

    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    console.log(error);

    return {
      category: "Other",
      priority: "Low",
    };
  }
};

module.exports = categorizeQuery;