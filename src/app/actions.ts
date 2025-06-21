'use server';

import { z } from 'zod';

export async function sendContactEmail(data: { name: string; email: string; message: string }) {
  const schema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }),
  });

  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    // This returns detailed validation errors, which is helpful for debugging.
    return { success: false, error: "Invalid data provided.", issues: parsed.error.issues };
  }
  
  // In a real application, you would integrate an email sending service here.
  // For example, using Resend, Nodemailer, or SendGrid.
  console.log("Received contact form submission:", parsed.data);
  
  // For now, we'll just simulate a successful email sending process.
  return { success: true, message: "Your message has been sent successfully!" };
}
