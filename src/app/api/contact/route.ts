import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY || 're_7sse958a_ExA9ywcquVqQmBEEZwxvAvJD');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, service, message } = body;

    if (!fullName || !email || !service || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailHtml = await render(
        React.createElement(EmailTemplate, {
          fullName,
          email,
          phone,
          company,
          service,
          message,
        })
    );

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FORM_FROM || 'Bisly Nigeria <onboarding@resend.dev>',
      to: [process.env.CONTACT_FORM_TO || 'info@bislynig.com.ng'],
      subject: `Contact Form Inquiry [${fullName}] - ${service}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend Error:', error);
      const message = typeof error === 'object' ? (error as any).message : String(error);
      return Response.json({ error: message || 'Failed to send email' }, { status: 500 });
    }

    return Response.json(data);
  } catch (err: any) {
    console.error('API Error:', err);
    return Response.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
