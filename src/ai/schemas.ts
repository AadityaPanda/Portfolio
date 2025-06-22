import { z } from 'zod';

export const ContactFormInputSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export const ContactFormOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export const ElevatorPitchInputSchema = z.object({
  topics: z.array(z.string()).min(1, { message: 'Please select at least one topic.' }),
});
export type ElevatorPitchInput = z.infer<typeof ElevatorPitchInputSchema>;

export const ElevatorPitchOutputSchema = z.object({
  pitch: z.string(),
});
export type ElevatorPitchOutput = z.infer<typeof ElevatorPitchOutputSchema>;
