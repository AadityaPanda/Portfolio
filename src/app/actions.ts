'use server';

import { generateElevatorPitch, type GenerateElevatorPitchInput } from '@/ai/flows/generate-elevator-pitch';

export async function createPitch(input: GenerateElevatorPitchInput): Promise<{ pitch?: string; error?: string }> {
  try {
    const result = await generateElevatorPitch(input);
    return { pitch: result.pitch };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to generate pitch. Please try again.' };
  }
}
