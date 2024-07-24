import { emailjs } from './js/email.min.js';

async function initializeEmailJS() {
    try {
        emailjs.init('mcgbHphqZYbo9Dkp0'); // Replace with your EmailJS user ID
    } catch (error) {
        throw new Error('Failed to initialize EmailJS: ' + error.message);
    }
}

export async function sendEmail(recipientName = 'Emmanuel Worgu', recipientEmail = 'emmanuelworgu@gmail.com') {
    try {
        await initializeEmailJS();
        const templateParams = {
            to_name: recipientName,
            to_email: recipientEmail,
            from_name: 'Your Name',
            from_email: 'support@netdigitaltrade.com',
        };

        const response = await emailjs.send('service_bvb4vmp', 'template_zvt21up', templateParams);
        console.log('SUCCESS!', response.status, response.text);
        return response;
    } catch (error) {
        console.log('FAILED...', error);
        throw error;
    }
}

window.sendEmail = sendEmail;
