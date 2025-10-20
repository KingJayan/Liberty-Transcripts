import { Resend } from 'resend';

export const prerender = false;

export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    const {name, email, phone, caseNumber, court, hearingDate, details } = formData;
    
    const resend = new Resend(import.meta.env.RESEND_API_KEY);
    
    const emailBody = `
New Bankruptcy Transcript Request

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Case Number: ${caseNumber}
Court/Jurisdiction: ${court}
Hearing Date: ${hearingDate || 'Not provided'}

Additional Details:
${details || 'None provided'}

---
This request was submitted via the Liberty Transcripts website.
    `.trim();

    await resend.emails.send({
      from: 'Liberty Transcripts <noreply@yourdomain.com>',
      to: [process.env.OWNER_EMAIL || 'dbpatel1180@gmail.com', process.env.SPONSOR_EMAIL || 'sponsor@example.com'],
      replyTo: email,
      subject: `New Transcript Request: ${caseNumber}`,
      text: emailBody,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
