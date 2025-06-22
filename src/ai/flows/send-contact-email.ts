// src/ai/flows/send-contact-email.ts
'use server'; // This ensures the code runs on the server, protecting credentials

import { ai } from '@/ai/genkit';
import { ContactFormInput, ContactFormInputSchema, ContactFormOutput, ContactFormOutputSchema } from '@/ai/schemas';
import nodemailer from 'nodemailer'; // Import nodemailer

// --- Email Sending Configuration ---
// Get credentials from environment variables
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;
const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser; // Use specific from or default to smtp user

// Validate necessary environment variables are set
if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !recipientEmail) {
  // Log an error during server startup if essential env vars are missing
  // This helps catch configuration issues early.
  console.error('FATAL ERROR: Missing one or more required email environment variables!');
  console.error('Please ensure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_RECIPIENT_EMAIL are set.');
  // Depending on your setup, you might want to throw an error here
  // to prevent the server from starting if email sending is critical.
  // For now, we'll let it start but subsequent email attempts will fail.
}

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
  transporter.verify((error, success) => {
    if (error) {
      console.error('SMTP Transporter verification failed:', error);
      transporter = null; // Invalidate transporter if verification fails
    } else {
      console.log('SMTP Transporter is ready to send messages');
    }
  });
} else {
  console.warn('SMTP transporter could not be created due to missing environment variables. Email sending will be disabled.');
}


// This function now uses Nodemailer to send the email
async function sendEmail(input: ContactFormInput): Promise<{ success: boolean, message: string }> {
    if (!transporter || !recipientEmail || !fromEmail) {
        console.error('Email sending is disabled due to missing configuration.');
        return { success: false, message: 'Email service is not configured.' };
    }

    const mailOptions = {
        from: fromEmail, // Sender address (from env vars)
        to: recipientEmail, // List of recipients (your email from env vars)
        replyTo: input.email, // Set reply-to to the sender's email
        subject: `New Contact Form Message from ${input.name}`, // Subject line
        text: `
Name: ${input.name}
Email: ${input.email}

Message:
${input.message}
        `, // Plain text body
        // You could also send HTML
        // html: `<b>New message from ${input.name}</b><p>Email: ${input.email}</p><p>${input.message}</p>`,
    };

    try {
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info)); // Only if using ethereal.email test account

        return { success: true, message: 'Your message has been sent successfully!' };

    } catch (error) {
        console.error('Error sending email:', error);
        // Return a generic error message to the user for security
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
    // You might add additional server-side checks here if needed
    // For now, we just pass it to the Genkit flow
  return await sendContactEmailFlow(input);
}