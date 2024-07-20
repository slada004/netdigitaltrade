// import { emailjs } from './js/email.min.js';

// console.log(emailjs)

function initializeEmailJS() {
    const options = {
        publicKey: 'mcgbHphqZYbo9Dkp0',
    };
    emailjs.init('mcgbHphqZYbo9Dkp0'); // Replace with your EmailJS user ID
}


export function sendEmail(recipientName = 'Emmanuel Worgu', recipientEmail = 'emmanuelworgu@gmail.com') {
    console.log('Starting...')
    initializeEmailJS()
    var templateParams = {
        to_name: 'Emmanuel Worgu',
        to_email: 'emmanuelworgu@gmail.com',
        from_name: 'Your Name',
        from_email: 'support@netdigitaltrade.com',
    };

    console.log('Initializing...')

    emailjs.send('service_bvb4vmp', 'template_zvt21up', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}

// sendEmail();

// window.sendEmail = sendEmail;