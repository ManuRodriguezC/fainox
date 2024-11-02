import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
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
    console.log(body);
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error: Cuerpo de la solicitud vacío o no es JSON válido" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "estebanclimb@gmail.com",
      pass: "site mown gkdv dqmt"
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  const templatePath = path.join(__dirname, "cotizacion.html");
  let emailTemplate = fs.readFileSync(templatePath, "utf8");
  const products = body.products.split("+").join(", ");
  emailTemplate = emailTemplate.replace("{{name}}", body.name).replace("{{lastname}}", body.lastname).replace("{{email}}", body.email).replace("{{address}}", body.address).replace("{{phone}}", body.phone).replace("{{city}}", body.city).replace("{{municipio}}", body.minucipio).replace("{{products}}", products);
  try {
    const info = await transport.sendMail({
      from: "estebanclimb@gmail.com",
      to: "manu.rodriguezc.dev@gmail.com",
      subject: "Solicitud de Cotizacion",
      html: emailTemplate
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
