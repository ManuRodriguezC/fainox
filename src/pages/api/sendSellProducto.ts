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
        Ciudad: ${body.minucipio}`

    const imageBuffer = Buffer.from(body.image, 'base64')
    const imageName = 'image.jpg'

    try {
        const info = await transport.sendMail({
            from: 'estebanclimb@gmail.com',
            to: 'manu.rodriguezc.dev@gmail.com',
            subject: 'Solicitud Venta de Equipo',
            text: emailText,
            attachments: [{
                filename: imageName,
                content: imageBuffer,
                cid: 'imagen.jpg'
            }]
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