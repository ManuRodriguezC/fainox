import nodemailer from 'nodemailer';
import path from 'path';
export { renderers } from '../../renderers.mjs';

path.dirname(new URL(import.meta.url).pathname);
async function POST({ request }) {
  let body;
  const contentType = request.headers.get("Content-Type")?.trim();
  if (contentType !== "application/json") {
    return new Response(
      JSON.stringify({ message: "Error: Content-Type debe ser application/json" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  try {
    body = await request.json();
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error: Cuerpo de la solicitud vacío o no es JSON válido" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "estebanclimb@gmail.com",
      pass: "site mown gkdv dqmt"
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  const emailText = `
        Nombre: ${body.name}
        Apellido: ${body.lastname}
        Correo: ${body.email}
        Dirección: ${body.address}
        Teléfono: ${body.phone}
        Ciudad: ${body.minucipio}`;
  const imageBuffer = Buffer.from(body.image, "base64");
  const imageName = "image.jpg";
  try {
    const info = await transport.sendMail({
      from: "estebanclimb@gmail.com",
      to: "manu.rodriguezc.dev@gmail.com",
      subject: "Solicitud Venta de Equipo",
      text: emailText,
      attachments: [{
        filename: imageName,
        content: imageBuffer,
        cid: "imagen.jpg"
      }]
    });
    return new Response(
      JSON.stringify({ message: "Correo Enviado", messageId: info.messageId }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Erro en el envio de mensaje", error }),
      { status: 500, headers: { "Content-type": "application/json" } }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
