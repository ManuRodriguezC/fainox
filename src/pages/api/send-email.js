import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: import.meta.env.GMAIL_USER,
        pass: import.meta.env.GAMIL_PASS,
    },
})

export const POST = async ({request}) => {
    const data = await request.json()
    console.log(data)
    const { name, phone, address, info } = data

    try {
        const mailOptions = {
            from: import.meta.env.GMAIL_USER,
            to: 'manu.rodriguezc.dev@gmail.com',
            subject: 'Solicitud de Cotización',
            text: data
        }
        await transporter.sendMail(mailOptions)

        return new Response(JSON.stringify({ success: true, message: 'Email sent successfull'}), {
            status: 200,
            headers: {
                'Content-type': 'application/json'
            },
        });
    } catch (error) {
        console.error('Error sending email:', error)
        return new Response(JSON.stringify({ success: false, message: 'Failed to send email'}), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}