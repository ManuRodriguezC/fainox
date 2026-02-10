import nodemailer from 'nodemailer';

export async function POST({ request }: { request: Request}): Promise<Response> {
  let body
  const contentType = request.headers.get('Content-Type')?.trim();
  if (contentType !== 'application/json') {
    return new Response(
      JSON.stringify({ message: 'Error: Content-Type debe ser application/json' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }  

  try {
    body = await request.json();
  } catch (error) {
    console.log(error)
    return new Response(
      JSON.stringify({ message: 'Error: Cuerpo de la solicitud vacío o no es JSON válido' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: import.meta.env.GMAIL_USER,
        pass: import.meta.env.GMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

  const products = body.products.split("+").join(", ");

  const emailText = `
    Nombre: ${body.name}
    Apellido: ${body.lastname}
    Correo: ${body.email}
    Dirección: ${body.address}
    Teléfono: ${body.phone}
    Ciudad: ${body.minucipio}
    Productos: ${products}
    ${body.empresa ? `Empresa: ${body.empresa}` : ''}
    ${body.area ? `Área: ${body.area}` : ''}
  `;

  try {
    const info = await transport.sendMail({
      from: import.meta.env.GMAIL_USER,
      // to: [import.meta.env.GMAIL_TO],
      to: ['manu.rodriguezc.dev@gmail.com'],
      subject: 'Solicitud de Cotizacion',
      text: emailText
    })
    return new Response(
      JSON.stringify({ message: 'Correo Enviado', messageId: info.messageId}),
      { status: 200, headers: { 'Content-Type': 'application/json'}}
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Erro en el envio de mensaje', error: error}),
      { status: 500, headers: {'Content-type': 'application/json'}}
    )
  }
}