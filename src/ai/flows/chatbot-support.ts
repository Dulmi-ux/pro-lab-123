'use server';

/**
 * @fileOverview An AI chatbot for customer support, answering questions about products and services.
 *
 * - chatbotSupport - A function that handles the chatbot support process.
 * - ChatbotSupportInput - The input type for the chatbotSupport function.
 * - ChatbotSupportOutput - The return type for the chatbotSupport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotSupportInputSchema = z.object({
  query: z.string().describe('The user query for the chatbot.'),
});
export type ChatbotSupportInput = z.infer<typeof ChatbotSupportInputSchema>;

const ChatbotSupportOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
});
export type ChatbotSupportOutput = z.infer<typeof ChatbotSupportOutputSchema>;

export async function chatbotSupport(input: ChatbotSupportInput): Promise<ChatbotSupportOutput> {
  return chatbotSupportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotSupportPrompt',
  input: {schema: ChatbotSupportInputSchema},
  output: {schema: ChatbotSupportOutputSchema},
  prompt: `You are a customer support chatbot for a tech company called Prolab IT Solutions.

  Your job is to answer questions about the company's products and services.

  Here are some details on the products and services offered:
  - Laptops: High-performance laptops for various needs.
  - Desktops: Customizable desktop computers for professionals and gamers.
  - Accessories: A wide range of accessories, including keyboards, mice, and monitors.
  - Technical Support: Access to IT professionals for support requests.

  If a user asks a question you cannot answer, or expresses frustration, suggest they use the contact form to speak with a human expert.

  Answer the following question:
  {{query}}`,
});

const chatbotSupportFlow = ai.defineFlow(
  {
    name: 'chatbotSupportFlow',
    inputSchema: ChatbotSupportInputSchema,
    outputSchema: ChatbotSupportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
