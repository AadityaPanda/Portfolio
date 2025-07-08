'use server'; // This ensures the code runs on the server, protecting credentials

import { ai } from '@/ai/genkit';
import { ContactFormInput, ContactFormInputSchema, ContactFormOutput, ContactFormOutputSchema } from '@/ai/schemas';
import { generateEmailHtml, generateEmailText } from './email-template';
import nodemailer from 'nodemailer';

// --- Email Sending Configuration ---
// Get credentials from environment variables
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;
const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;

// Create a Nodemailer transporter
// Reusing the transporter is more efficient than creating a new one for each email
let transporter: nodemailer.Transporter | null = null;

if (smtpHost && smtpPort && smtpUser && smtpPass) {
  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // Use SSL if port is 465, otherwise use TLS (port 587)
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  // Optional: Verify transporter connection (useful for debugging)
  // This runs asynchronously and doesn't block server start if verification fails,
  // but sets transporter to null if there's a persistent issue.
  transporter.verify((error, success) => {
    if (error) {
      console.error('SMTP Transporter verification failed:', error);
      transporter = null; // Invalidate transporter if verification fails
      console.warn('Email sending will be disabled.');
    } else {
      console.log('SMTP Transporter is ready to send messages');
    }
  });
} else {
  console.warn('SMTP transporter could not be created due to missing environment variables. Email sending will be disabled.');
}

/**
 * Sends an email using the configured Nodemailer transporter
 * @param input The contact form data
 * @returns Promise with success status and message
 */
async function sendEmail(input: ContactFormInput): Promise<{ success: boolean, message: string }> {
  // Check transporter readiness before attempting to send
  if (!transporter) {
    console.error('Email sending failed: Transporter not initialized or verified failed.');
    return { success: false, message: 'Email service is not available.' };
  }

  // Check recipient email is configured
  if (!recipientEmail) {
    console.error('Email sending failed: Recipient email not configured.');
    return { success: false, message: 'Recipient email address is not set.' };
  }

  const mailOptions = {
    // Format the 'from' field to show sender name + your email as the technical sender
    // This often helps with deliverability and looks better in the inbox.
    from: fromEmail, // This should be the configured SMTP_USER or CONTACT_FROM_EMAIL
    replyTo: `${input.name} <${input.email}>`, // Set reply-to to the sender's name and email
    to: recipientEmail, // The email address where you receive messages
    subject: `[Portfolio Contact] ${input.subject}`, // Clear subject line using user's subject
    html: generateEmailHtml(input), // Use the HTML template from email-template.ts
    text: generateEmailText(input), // Use the plain text template from email-template.ts
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    // You could use ethereal.email for testing/previewing if needed during development
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return { success: true, message: 'Your message has been sent successfully!' };

  } catch (error) {
    console.error('Error sending email:', error);
    // Return a generic error message to the user for security
    // Log the specific error details on the server side only.
    return { success: false, message: 'There was an error sending your message. Please try again later.' };
  }
}

// The Genkit flow remains the same, calling the updated sendEmail function
const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    // Call the actual email sending function
    return await sendEmail(input);
  }
);

// The exported function to be called from the frontend
export async function sendContactEmail(
  input: ContactFormInput
): Promise<ContactFormOutput> {
  return await sendContactEmailFlow(input);
}
