import axios from "axios";
import OpenAI from "openai";
import Configuration from "openai";

const OPENAI_API_KEY = "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";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAI({
  apiKey: "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",
});

export async function sendMessageToOpenAI(message: any) {
  const response = await openai.completions.create({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0.9,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response.choices[0].text;
}
