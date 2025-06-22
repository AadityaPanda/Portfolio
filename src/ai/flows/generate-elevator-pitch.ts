
'use server';
/**
 * @fileOverview A Genkit flow for generating a professional elevator pitch.
 *
 * - generateElevatorPitch - A function that handles the pitch generation process.
 * - ElevatorPitchInput - The input type for the generateElevatorPitch function.
 * - ElevatorPitchOutput - The return type for the generateElevatorPitch function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { ElevatorPitchInputSchema, ElevatorPitchOutputSchema, type ElevatorPitchInput, type ElevatorPitchOutput } from '@/ai/schemas';
import { ABOUT_ME_TEXT, SKILLS_DATA } from '@/lib/data';


const fullContextSchema = z.object({
    about: z.string(),
    skills: z.string(),
    topics: z.array(z.string()),
});

const elevatorPitchPrompt = ai.definePrompt({
    name: 'elevatorPitchPrompt',
    input: { schema: fullContextSchema },
    prompt: `You are a career coach creating a short, punchy elevator pitch for a software developer.

    Here is some information about them:
    - About Me: {{{about}}}
    - Key Skills: {{{skills}}}
    - Topics to focus on for this pitch: {{#each topics}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

    Based on the information, generate a compelling, 1-2 sentence elevator pitch. The pitch should be professional, confident, and highlight their expertise in the specified topics. Output only the pitch text, nothing else.`
});

const generateElevatorPitchFlow = ai.defineFlow(
    {
        name: 'generateElevatorPitchFlow',
        inputSchema: ElevatorPitchInputSchema,
        outputSchema: ElevatorPitchOutputSchema,
    },
    async (input) => {
        const skillsList = Object.values(SKILLS_DATA).flat().join(', ');

        const result = await elevatorPitchPrompt({
            about: ABOUT_ME_TEXT,
            skills: skillsList,
            topics: input.topics,
        });

        const text = result.text;

        return { pitch: text! };
    }
);

export async function generateElevatorPitch(
    input: ElevatorPitchInput
): Promise<ElevatorPitchOutput> {
    return generateElevatorPitchFlow(input);
}
