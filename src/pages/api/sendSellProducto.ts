import nodemailer from 'nodemailer';

export async function POST({ request }: { request: Request }): Promise<Response> {
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

  const emailText = `
        Nombre: ${body.name}
        Teléfono: ${body.phone}
        Correo: ${body.email}
        Ciudad: ${body.city}
        País: ${body.country}
        Actividad: ${body.activity}
        Comentarios: ${body.comments}
    `

    // const attachments = [];

    // Agregar la primera imagen
    // if (body.image1) {
    //   attachments.push({
    //     filename: 'image1.jpg',
    //     content: Buffer.from(body.image1, 'base64'),
    //     cid: 'image1.jpg'
    //   });
    // }
    
    // // Verificar y agregar otras imágenes
    // if (body.image2) {
    //   attachments.push({
    //     filename: 'image2.jpg',
    //     content: Buffer.from(body.image2, 'base64'),
    //     cid: 'image2.jpg'
    //   });
    // }
    
    // if (body.image3) {
    //   attachments.push({
    //     filename: 'image3.jpg',
    //     content: Buffer.from(body.image3, 'base64'),
    //     cid: 'image3.jpg'
    //   });
    // }

  try {
    const info = await transport.sendMail({
      from: import.meta.env.GMAIL_USER,
      to: ['comercial@fainoxgroup.com'],
      subject: 'Trabaje con nosotros',
      text: emailText,
      // attachments: attachments
    })
    return new Response(
      JSON.stringify({ message: 'Correo Enviado', messageId: info.messageId }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Erro en el envio de mensaje', error: error }),
      { status: 500, headers: { 'Content-type': 'application/json' } }
    )
  }
}