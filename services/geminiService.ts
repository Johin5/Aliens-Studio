import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the API client
// Note: In a real production app, ensure API_KEY is set in environment variables.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are "InkBot", the virtual studio assistant for Aliens Tattoo Studio.
Your goal is to help clients book appointments, answer questions about tattoo safety, pain, pricing, and aftercare.
Key Info:
- Aliens is famous for Hyper-Realism, Custom Calligraphy, and Spiritual tattoos.
- We have studios in Mumbai, Navi Mumbai, Pune, Bangalore, Delhi, etc.
- We prioritize safety and hygiene (Aliens TattooCare).
- Pricing depends on size, detail, and artist level. We cannot give exact quotes without a consultation, but mention starting prices are around ₹3000-5000 for small pieces.
Tone: Professional, artistic, welcoming, and assuring.
Keep responses concise (under 100 words).
Always encourage booking a free consultation for specific design discussions.
`;

let chatSession: Chat | null = null;

export const initChat = () => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncGenerator<string, void, unknown>> => {
  if (!chatSession) {
    initChat();
  }

  if (!chatSession) {
    throw new Error("Failed to initialize chat session");
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    
    // Create a generator to yield text chunks as they arrive
    async function* streamGenerator() {
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    }
    
    return streamGenerator();

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};
