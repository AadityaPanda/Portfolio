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

/**
 * Generates a professional HTML email template for the contact form submission.
 * @param input The contact form data.
 * @returns An HTML string representing the email body.
 */
function generateEmailHtml(input: ContactFormInput): string {
    const { name, email, message } = input;

    // Use .replace to preserve line breaks from the textarea
    const formattedMessage = message.replace(/\n/g, '<br />');

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#ffffff" style="background-color: #ffffff; border-radius: 8px; padding: 30px; border: 1px solid #e0e0e0;">
                            <h1 style="color: #333333; font-size: 24px; border-bottom: 2px solid #eeeeee; padding-bottom: 15px; margin-top: 0; margin-bottom: 20px;">New Contact Form Submission</h1>
                            
                            <p style="font-weight: bold; color: #333333; margin-top: 0; margin-bottom: 5px;">From:</p>
                            <div style="background-color: #f9f9f9; border: 1px solid #e0e0e0; padding: 10px 15px; border-radius: 4px; margin-bottom: 20px; word-break: break-all;">
                                ${name}
                            </div>
                            
                            <p style="font-weight: bold; color: #333333; margin-top: 0; margin-bottom: 5px;">Email Address:</p>
                            <div style="background-color: #f9f9f9; border: 1px solid #e0e0e0; padding: 10px 15px; border-radius: 4px; margin-bottom: 20px; word-break: break-all;">
                                <a href="mailto:${email}" style="color: #2077d2; text-decoration: none;">${email}</a>
                            </div>
                            
                            <p style="font-weight: bold; color: #333333; margin-top: 0; margin-bottom: 5px;">Message:</p>
                            <div style="background-color: #f9f9f9; border: 1px solid #e0e0e0; padding: 15px; border-radius: 4px; white-space: pre-wrap; word-wrap: break-word; line-height: 1.6;">
                                ${formattedMessage}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding-top: 20px; font-size: 12px; color: #999999;">
                            <p style="margin: 0;">This email was sent from your portfolio contact form.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `;
}

// This function now uses Nodemailer to send the email
async function sendEmail(input: ContactFormInput): Promise<{ success: boolean, message: string }> {
    if (!transporter || !recipientEmail || !fromEmail) {
        console.error('Email sending is disabled due to missing configuration.');
        return { success: false, message: 'Email service is not configured.' };
    }

    const mailOptions = {
        from: `"${input.name}" <${fromEmail}>`, // Show sender's name in email client
        to: recipientEmail,
        replyTo: input.email,
        subject: `New Contact Form Message from ${input.name}`,
        html: generateEmailHtml(input), // Use the new HTML template
    };

    try {
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
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
  return await sendContactEmailFlow(input);
}
