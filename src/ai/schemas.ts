import { z } from 'zod';

export const ContactFormInputSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export const ContactFormOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;
