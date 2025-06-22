
'use server';
/**
 * @fileOverview A Genkit flow for sending a contact email.
 *
 * - sendContactEmail - A function that handles the contact form submission.
 */

import { ai } from '@/ai/genkit';
import { ContactFormInput, ContactFormInputSchema, ContactFormOutput, ContactFormOutputSchema } from '@/ai/schemas';

// This is a placeholder for a real email sending service.
// In a real application, you would use a service like SendGrid, Resend, or Nodemailer.
async function sendEmail(input: ContactFormInput) {
    console.log('New contact form submission:');
    console.log(`  Name: ${input.name}`);
    console.log(`  Email: ${input.email}`);
    console.log(`  Message: ${input.message}`);
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, message: 'Your message has been sent successfully!' };
}


const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    // Here you would integrate with a real email service (e.g., SendGrid, Resend)
    // For now, we'll just simulate the email sending process.
    try {
      const result = await sendEmail(input);
      if (result.success) {
        return { success: true, message: result.message };
      } else {
        return { success: false, message: 'Failed to send message.' };
      }
    } catch (error) {
      console.error('Error sending contact email:', error);
      return { success: false, message: 'An unexpected error occurred.' };
    }
  }
);


export async function sendContactEmail(
  input: ContactFormInput
): Promise<ContactFormOutput> {
  return await sendContactEmailFlow(input);
}
