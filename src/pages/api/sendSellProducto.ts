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
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'estebanclimb@gmail.com',
      pass: 'site mown gkdv dqmt',
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  const emailText = `
        Nombre: ${body.name}
        Apellido: ${body.lastname}
        Correo: ${body.email}
        Dirección: ${body.address}
        Teléfono: ${body.phone}
        Ciudad: ${body.minucipio}
        ${body.empresa ? `Empresa: ${body.empresa}` : ''}
        ${body.area ? `Área: ${body.area}` : ''}
    `

    const attachments = [];

    // Agregar la primera imagen
    if (body.image1) {
      attachments.push({
        filename: 'image1.jpg',
        content: Buffer.from(body.image1, 'base64'),
        cid: 'image1.jpg'
      });
    }
    
    // Verificar y agregar otras imágenes
    if (body.image2) {
      attachments.push({
        filename: 'image2.jpg',
        content: Buffer.from(body.image2, 'base64'),
        cid: 'image2.jpg'
      });
    }
    
    if (body.image3) {
      attachments.push({
        filename: 'image3.jpg',
        content: Buffer.from(body.image3, 'base64'),
        cid: 'image3.jpg'
      });
    }

  try {
    const info = await transport.sendMail({
      from: 'estebanclimb@gmail.com',
      // to: ['manu.rodriguezc.dev@gmail.com', 'comercial@fainoxgroup.com'],
      to: ['manu.rodriguezc.dev@gmail.com'],
      subject: 'Solicitud Venta de Equipo',
      text: emailText,
      attachments: attachments
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