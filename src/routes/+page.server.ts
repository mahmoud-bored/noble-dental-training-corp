import nodemailer from 'nodemailer';
import { EMAIL_ADDRESS, APP_PASSWORD } from '$env/static/private';

export function load({ cookies }) {
    const langPref = cookies.get('lang')
    
    return { 
        langPref
    }
}

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: EMAIL_ADDRESS,
      pass: APP_PASSWORD,
    },
});

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        const name = data.get('name')   
        const phoneNumber = data.get('phoneNumber')
        const email = data.get('email')
        const message = data.get('message')
        
        let success
        async function sendMessage() {
            const info = await transporter.sendMail({
                from: `"${name}" <${EMAIL_ADDRESS}>`,
                to: EMAIL_ADDRESS,
                subject: `NOBLE: ${name}`,
                html: `
                    <p><bold>Name:</bold> ${name}</p>
                    <p><bold>Phone Number:</bold> ${phoneNumber}</p>
                    <p><bold>Email:</bold> ${email}</p>
                    <br/>
                    <p><bold>Message:</bold> ${message}</p>
                `,
            });
        }
        await sendMessage().then(() => {
            success = true
        }).catch((err) => {
            console.log(err)
            success = false
        })   

        return { success }
    }
}
