import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname);

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

    const templatePath =  path.join(__dirname, 'sellProduct.html');
    let emailTemplate = fs.readFileSync(templatePath, 'utf8');

    emailTemplate = emailTemplate
        .replace('{{name}}', body.name)
        .replace('{{lastname}}', body.lastname)
        .replace('{{email}}', body.email)
        .replace('{{address}}', body.address)
        .replace('{{phone}}', body.phone)
        .replace('{{city}}', body.city)
        .replace('{{municipio}}', body.minucipio)
        .replace('{{product}}', body.product)

    const imageBuffer = Buffer.from(body.image, 'base64')
    const imageName = 'image.jpg'

    try {
        const info = await transport.sendMail({
            from: 'estebanclimb@gmail.com',
            to: 'manu.rodriguezc.dev@gmail.com',
            subject: 'Solicitud Venta de Equipo',
            html: emailTemplate,
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