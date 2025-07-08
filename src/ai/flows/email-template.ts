import { ContactFormInput } from '@/ai/schemas';

/**
 * Escapes HTML characters in user input to prevent XSS and formatting issues
 * @param str The string to escape
 * @returns The escaped string
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Generates a professional HTML email template for the contact form submission.
 * Features a modern design with professional branding, improved typography, and mobile responsiveness.
 * @param input The contact form data
 * @returns An HTML string representing the email body
 */
export function generateEmailHtml(input: ContactFormInput): string {
  const { name, email, subject, message } = input;

  // Preserve line breaks from the textarea input and escape HTML
  const formattedMessage = escapeHtml(message).replace(/\n/g, '<br />');
  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedSubject = escapeHtml(subject);
  
  // Get current date for timestamp
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>New Portfolio Contact</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        /* Reset Styles */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { margin: 0 !important; padding: 0 !important; background-color: #f8fafc !important; }
        table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        td { padding: 0; }
        img { border: 0; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
        
        /* Link Styles */
        a { text-decoration: none; color: inherit; }
        a:hover { text-decoration: underline; }
        
        /* Typography */
        .font-primary { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
        .font-mono { font-family: 'SF Mono', Monaco, Inconsolata, 'Roboto Mono', Consolas, 'Courier New', monospace; }
        
        /* Utility Classes */
        .text-center { text-align: center; }
        .text-left { text-align: left; }
        .no-underline { text-decoration: none !important; }
        
        /* Brand Colors */
        .brand-primary { color: #1a365d; }
        .brand-secondary { color: #2d3748; }
        .brand-accent { color: #3182ce; }
        .brand-success { color: #38a169; }
        .brand-muted { color: #718096; }
        
        /* Mobile Responsive */
        @media screen and (max-width: 600px) {
            .container { width: 100% !important; min-width: 100% !important; }
            .mobile-padding { padding: 20px !important; }
            .mobile-padding-sm { padding: 15px !important; }
            .mobile-text-sm { font-size: 14px !important; }
            .mobile-hidden { display: none !important; }
            .stack-mobile { display: block !important; width: 100% !important; }
            .mobile-message-box { padding: 16px !important; }
            .mobile-action-buttons table { width: 100% !important; }
            .mobile-action-buttons td { display: block !important; width: 100% !important; padding: 6px 0 !important; }
            .mobile-action-buttons a { display: block !important; text-align: center !important; }
        }
        
        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
            .dark-bg { background-color: #1a202c !important; }
            .dark-text { color: #e2e8f0 !important; }
            .dark-border { border-color: #2d3748 !important; }
        }
    </style>
</head>
<body class="font-primary" style="margin: 0; padding: 0; background-color: #f8fafc; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    
    <!-- Preheader Text (Hidden) -->
    <div style="display: none; font-size: 1px; color: #f8fafc; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
        New contact form submission from ${escapedName} - ${escapedSubject}...
    </div>
    
    <!-- Email Container -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; min-height: 100vh;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                
                <!-- Main Content Container -->
                <table class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width: 600px; max-width: 100%; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1); overflow: hidden;">
                    
                    <!-- Header Section -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 0;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td class="mobile-padding" style="padding: 40px 40px 30px 40px; text-align: center;">
                                        <!-- Logo/Icon -->
                                        <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto 20px auto;">
                                            <tr>
                                                <td style="width: 60px; height: 60px; background-color: rgba(255, 255, 255, 0.2); border-radius: 30px; text-align: center; vertical-align: middle;">
                                                    <div style="font-size: 28px; color: #ffffff; line-height: 60px;">✉</div>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                            New Contact Message
                                        </h1>
                                        <p style="color: rgba(255, 255, 255, 0.9); font-size: 16px; margin: 8px 0 0 0; font-weight: 400;">
                                            You've received a new message from your portfolio
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Timestamp Bar -->
                    <tr>
                        <td style="background-color: #edf2f7; padding: 12px 40px; border-bottom: 1px solid #e2e8f0;">
                            <p style="margin: 0; font-size: 13px; color: #718096; text-align: center;">
                                <strong>Received:</strong> ${currentDate}
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Main Content -->
                    <tr>
                        <td class="mobile-padding" style="padding: 40px;">
                            
                            <!-- Sender Information Card -->
                            <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); border-radius: 12px; padding: 30px; margin-bottom: 30px; border-left: 4px solid #3182ce;">
                                <h2 style="color: #1a365d; font-size: 20px; font-weight: 600; margin: 0 0 20px 0; display: flex; align-items: center;">
                                    <span style="display: inline-block; width: 8px; height: 8px; background-color: #38a169; border-radius: 50%; margin-right: 12px;"></span>
                                    Contact Details
                                </h2>
                                
                                <!-- Name -->
                                <div style="margin-bottom: 20px;">
                                    <label style="display: block; font-size: 12px; font-weight: 600; color: #718096; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                                        Full Name
                                    </label>
                                    <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 16px; color: #2d3748; font-weight: 500;">
                                        ${escapedName}
                                    </div>
                                </div>
                                
                                <!-- Email -->
                                <div style="margin-bottom: 20px;">
                                    <label style="display: block; font-size: 12px; font-weight: 600; color: #718096; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                                        Email Address
                                    </label>
                                    <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 16px;">
                                        <a href="mailto:${escapedEmail}" style="color: #3182ce; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center;">
                                            <span style="margin-right: 8px;">✉</span>
                                            ${escapedEmail}
                                        </a>
                                    </div>
                                </div>

                                <!-- Subject -->
                                <div>
                                    <label style="display: block; font-size: 12px; font-weight: 600; color: #718096; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                                        Subject
                                    </label>
                                    <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 16px; color: #2d3748; font-weight: 500;">
                                        ${escapedSubject}
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Message Content -->
                            <div style="margin-bottom: 30px;">
                                <h2 style="color: #1a365d; font-size: 20px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                                    <span style="display: inline-block; width: 8px; height: 8px; background-color: #ed8936; border-radius: 50%; margin-right: 12px;"></span>
                                    Message Content
                                </h2>
                                
                                <div style="background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 12px; padding: 24px; position: relative; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);" class="mobile-message-box">
                                    <!-- Quote Icon -->
                                    <div style="position: absolute; top: -8px; left: 24px; width: 16px; height: 16px; background-color: #3182ce; transform: rotate(45deg);" class="mobile-hidden"></div>
                                    
                                    <div style="font-size: 16px; line-height: 1.7; color: #2d3748; word-wrap: break-word; overflow-wrap: break-word;">
                                        ${formattedMessage}
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Action Buttons -->
                            <div style="text-align: center; margin: 40px 0;" class="mobile-action-buttons">
                                <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto; width: auto;">
                                    <tr>
                                        <td style="padding: 0 6px 12px 0; vertical-align: top;">
                                            <a href="mailto:${escapedEmail}?subject=Re: ${escapedSubject}" style="display: inline-block; background: linear-gradient(135deg, #3182ce 0%, #2c5282 100%); color: #ffffff; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 14px; text-decoration: none; box-shadow: 0 2px 4px rgba(49, 130, 206, 0.3); white-space: nowrap;">
                                                Reply to ${escapedName.split(' ')[0]}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 0 6px; vertical-align: top;">
                                            <a href="mailto:${escapedEmail}?subject=Re: ${escapedSubject}&body=Hi ${escapedName.split(' ')[0]},%0D%0A%0D%0AThank you for reaching out through my portfolio. I'll get back to you soon!%0D%0A%0D%0ABest regards" style="display: inline-block; background-color: #ffffff; color: #3182ce; padding: 14px 28px; border: 2px solid #3182ce; border-radius: 8px; font-weight: 600; font-size: 14px; text-decoration: none; white-space: nowrap;">
                                                Quick Reply
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 30px 40px; border-top: 1px solid #e2e8f0;">
                            <div style="text-align: center;">
                                <div style="margin-bottom: 16px;">
                                    <div style="display: inline-block; width: 32px; height: 2px; background: linear-gradient(90deg, #3182ce 0%, #ed8936 100%); border-radius: 1px;"></div>
                                </div>
                                
                                <p style="margin: 0 0 12px 0; font-size: 14px; color: #718096; font-weight: 500;">
                                    This message was sent via your portfolio contact form
                                </p>
                                
                                <p style="margin: 0; font-size: 12px; color: #a0aec0;">
                                    Portfolio Email Service • Delivered securely via SMTP
                                </p>
                                
                                <!-- Social Links (Optional - can be customized) -->
                                <div style="margin-top: 20px;">
                                    <p style="margin: 0; font-size: 12px; color: #a0aec0;">
                                        Stay connected: 
                                        <a href="#" style="color: #3182ce; text-decoration: none; margin: 0 6px;">LinkedIn</a> • 
                                        <a href="#" style="color: #3182ce; text-decoration: none; margin: 0 6px;">GitHub</a> • 
                                        <a href="#" style="color: #3182ce; text-decoration: none; margin: 0 6px;">Portfolio</a>
                                    </p>
                                </div>
                            </div>
                        </td>
                    </tr>
                    
                </table>
                
                <!-- Email Footer -->
                <div style="text-align: center; margin-top: 30px;">
                    <p style="margin: 0; font-size: 12px; color: #a0aec0;">
                        Need help with this email? This is an automated message from your portfolio contact system.
                    </p>
                </div>
                
            </td>
        </tr>
    </table>
    
</body>
</html>
  `.trim();
}

/**
 * Generates a well-formatted plain text version of the contact email
 * @param input The contact form data
 * @returns A plain text string representing the email body
 */
export function generateEmailText(input: ContactFormInput): string {
  const { name, email, subject, message } = input;
  
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  return `
═══════════════════════════════════════
    NEW PORTFOLIO CONTACT MESSAGE
═══════════════════════════════════════

Received: ${currentDate}

┌─ CONTACT DETAILS ─────────────────────
│ Name:    ${name}
│ Email:   ${email}
│ Subject: ${subject}
└───────────────────────────────────────

┌─ MESSAGE CONTENT ─────────────────────
│
│ ${message.split('\n').join('\n│ ')}
│
└───────────────────────────────────────

QUICK ACTIONS:
• Reply to this email to respond directly to ${name.split(' ')[0]}
• Email: ${email}

═══════════════════════════════════════
This message was sent via your portfolio 
contact form and delivered securely.
═══════════════════════════════════════
  `.trim();
}
