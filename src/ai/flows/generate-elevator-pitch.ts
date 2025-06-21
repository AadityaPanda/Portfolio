'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a tailored elevator pitch based on selected skills and experiences.
 *
 * - generateElevatorPitch - A function that takes selected skills and experiences as input and returns a concise elevator pitch.
 * - GenerateElevatorPitchInput - The input type for the generateElevatorPitch function.
 * - GenerateElevatorPitchOutput - The return type for the generateElevatorPitch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateElevatorPitchInputSchema = z.object({
  skills: z
    .array(z.string())
    .describe('A list of key skills to include in the elevator pitch.'),
  experiences: z
    .array(z.string())
    .describe('A list of key experiences to include in the elevator pitch.'),
});
export type GenerateElevatorPitchInput = z.infer<typeof GenerateElevatorPitchInputSchema>;

const GenerateElevatorPitchOutputSchema = z.object({
  pitch: z
    .string()
    .describe('A concise and compelling elevator pitch tailored to the selected skills and experiences.'),
});
export type GenerateElevatorPitchOutput = z.infer<typeof GenerateElevatorPitchOutputSchema>;

export async function generateElevatorPitch(
  input: GenerateElevatorPitchInput
): Promise<GenerateElevatorPitchOutput> {
  return generateElevatorPitchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateElevatorPitchPrompt',
  input: {schema: GenerateElevatorPitchInputSchema},
  output: {schema: GenerateElevatorPitchOutputSchema},
  prompt: `You are an expert at crafting elevator pitches. Based on the skills and experiences provided, create a concise and compelling elevator pitch.

Skills:
{{#each skills}}- {{{this}}}
{{/each}}

Experiences:
{{#each experiences}}- {{{this}}}
{{/each}}

Elevator Pitch:`,
});

const generateElevatorPitchFlow = ai.defineFlow(
  {
    name: 'generateElevatorPitchFlow',
    inputSchema: GenerateElevatorPitchInputSchema,
    outputSchema: GenerateElevatorPitchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
