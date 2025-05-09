import { GoogleGenAI } from "@google/genai";
console.log( process.env.NEXT_PUBLIC_GEMINI_API_KEY)
const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

export async function generateAIContent(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating AI content:", error);
    throw new Error("Failed to generate AI content");
  }
}