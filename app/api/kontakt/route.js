// Fil: /app/api/kontakt/route.js
import nodemailer from "nodemailer";

// Ensure this function uses the Node.js runtime on Vercel
export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Create a transporter with your SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true for port 465 (SSL), false for 587 (TLS)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_USER, // your own email address
      subject: subject,
      text: `Melding fra ${name} (${email}): ${message}`,
    });

    // Return a JSON response
    return new Response(JSON.stringify({ message: "Henvendelse sendt" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Feil under sending av e-post:", error);
    return new Response(JSON.stringify({ message: "Noe gikk galt" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
