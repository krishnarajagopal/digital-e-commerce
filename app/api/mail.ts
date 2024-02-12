
"use server"
import nodemailer from 'nodemailer';
import setimmediate from 'setimmediate';
/**
 * Sends an email with the given parameters.
 *
 * @param {string} to - The email address of the recipient
 * @param {string} name - The name of the recipient
 * @param {string} subject - The subject of the email
 * @param {string} body - The body of the email
 */

interface Email {
        to: string;
        name: string;
        subject: string;
        body: string
}
export async function sendEmail({ to, name, body, subject = "Hello worrrldddd......!!!!!" }: Email) {
        console.log(`inside send email`)
        const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
        // create reusable transport object using the default SMTP transport
        const transport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                auth: {
                        user: SMTP_EMAIL,
                        pass: SMTP_PASSWORD
                }
        })
        try {
                const testResult = await transport.verify();
                console.log(`Email validation test result:${testResult}`);


        } catch (error) {
                console.log(`Error verifying the transport${error}`);


        }

        try {
                // send mail with defined transport object
                const sendEmailResult = await transport.sendMail({
                        from: SMTP_EMAIL, // sender address
                        to, // list of receivers
                        subject, // Subject line
                        html: `<h1>Hi ${name}!</h1><p>your payment for ${body}: was successfully processed.</p>`// HTML body content
                });
                console.log(`sent email to ${to}`);

        } catch (error) {
                console.log(`Error sending email : ${error}`);

        }

}