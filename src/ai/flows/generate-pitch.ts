'use server';
/**
 * @fileOverview AI Elevator Pitch Generator.
 *
 * - generatePitch - A function that creates a concise elevator pitch.
 * - PitchGeneratorInput - The input type for the generatePitch function.
 * - PitchGeneratorOutput - The return type for the generatePitch function.
 */

import { ai } from '@/ai/genkit';
import { PitchGeneratorInput, PitchGeneratorInputSchema, PitchGeneratorOutput, PitchGeneratorOutputSchema } from '@/ai/schemas';
import { z } from 'genkit';

const generatePitchPrompt = ai.definePrompt({
  name: 'generatePitchPrompt',
  input: { schema: PitchGeneratorInputSchema },
  output: { schema: PitchGeneratorOutputSchema },
  prompt: `You are an expert career coach creating a professional elevator pitch for a software developer named {{name}}.

Generate a concise, impactful, and professional "elevator pitch" (2-3 sentences) that highlights their key strengths based on the following selected skills and experience points.

The pitch should be engaging and suitable for a LinkedIn summary or a brief introduction at a networking event.

Highlighted items:
{{#each items}}
- {{{this}}}
{{/each}}

Generate the pitch and return it in the 'pitch' field.`,
});

const generatePitchFlow = ai.defineFlow(
  {
    name: 'generatePitchFlow',
    inputSchema: PitchGeneratorInputSchema,
    outputSchema: PitchGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await generatePitchPrompt(input);
    if (!output) {
      throw new Error('Failed to generate pitch.');
    }
    return output;
  }
);

export async function generatePitch(
  input: PitchGeneratorInput
): Promise<PitchGeneratorOutput> {
  return await generatePitchFlow(input);
}
