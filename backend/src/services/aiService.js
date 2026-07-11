const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-3.5-flash"
});

const generateComparisonSummary = async (

    currentUser,

    compareUser,

    comparison

) => {

    const prompt = `
You are an expert Competitive Programming Coach.

Compare these two Codeforces users.

Current User:

${JSON.stringify(currentUser, null, 2)}

Opponent:

${JSON.stringify(compareUser, null, 2)}

Comparison:

${JSON.stringify(comparison, null, 2)}

Return ONLY valid JSON.

Use this exact structure:

{
  "strengths":[
    "...",
    "...",
    "..."
  ],

  "weaknesses":[
    "...",
    "...",
    "..."
  ],

  "summary":"...",

  "recommendation":"...",

  "studyPlan":[
    "...",
    "...",
    "..."
  ]
}

Do not write markdown.

Do not use code blocks.

Do not explain anything.

Return JSON only.
`;

    const result = await model.generateContent(prompt);

    const response = await result.response;

    return response.text();

};

module.exports = {

    generateComparisonSummary

};