import {NextResponse} from 'next/server';
import {Resend} from 'resend';

// Asegúrate de tener la variable de entorno RESEND_API_KEY configurada
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = 'oscarquintanaa25@gmail.com'; // Tu dirección de correo

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {name, email, message} = body;

    if (!name || !email || !message) {
      return NextResponse.json({error: 'Fehlende Felder'}, {status: 400});
    }

    const {data, error} = await resend.emails.send({
      from: 'Portfolio Kontakt <onboarding@resend.dev>', // Resend requiere este remitente para dominios no verificados
      to: [toEmail],
      subject: `Neue Nachricht von ${name} über das Portfolio`,
      reply_to: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr>
          <h3>Nachricht:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json(
        {error: 'Fehler beim Senden der E-Mail.'},
        {status: 500}
      );
    }

    return NextResponse.json({
      message: 'Email erfolgreich gesendet!',
      data: data,
    });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      {error: 'Ein interner Serverfehler ist aufgetreten.'},
      {status: 500}
    );
  }
}
