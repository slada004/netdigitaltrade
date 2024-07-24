function initializeEmailJS() {
  const options = {
    publicKey: 'mcgbHphqZYbo9Dkp0',
  };
  emailjs.init('mcgbHphqZYbo9Dkp0'); // Use the publicKey from the options object
}

async function sendEmail(recipientName, recipientEmail) {
  console.log('Starting...');
  initializeEmailJS();

  const templateParams = {
    to_name: recipientName,
    to_email: recipientEmail,
    from_name: 'Netdigitaltrade.com',
    from_email: 'support@netdigitaltrade.com',
  };

  console.log('Initializing...');

  try {
    const response = await emailjs.send('service_bvb4vmp', 'template_zvt21up', templateParams);
    console.log('SUCCESS!', response.status, response.text);
  } catch (error) {
    console.log('FAILED...', error);
    document.getElementById('btn-text').textContent = 'Sign In';
    return;
  }
}


async function login () {
    try {
  
      console.log('working!!!');
      console.log(document.getElementById('btn-text').textContent);
      document.getElementById('btn-text').value = 'Please Wait...';
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      // const url = 'https://crypto-backend1.herokuapp.com/api/user/login/';
  
      const url = 'https://mich-backend.onrender.com/api/user/login/';
  
      const body = {
        email,
        password,
      }
  
      const req = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
  
      const res = await req.json();
      console.log(res);
  
      if (req.status !==200) {
        document.getElementById('btn-text').value = 'Sign In';
        alert(res.message || res.errMessage);
      } else {
        localStorage.setItem('token', res.token);
        document.location.href = '/dash.html';
      }
    } catch (error) {
      console.log(error);
      document.getElementById('btn-text').textContent = 'Sign In';
      alert('Check Your Internet Connection!');
    }
  };
  
  
  async function register () {
    try {
      if (document.location.origin === 'https://meta30trader.com') {
        alert('Can not register at this time. Please Try again later');
      } else {
        document.getElementById('btn-text').value = 'Please Wait...';
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // const url = 'https://crypto-backend1.herokuapp.com/api/user/login/';
  
        // const url = 'https://crypto-backend2.herokuapp.com/api/user/register/';
  
        const url = 'https://mich-backend.onrender.com/api/user/register';
  
        const body = {
          name,
          email,
          password,
        }
  
        const req = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        });
  
        const res = await req.json();
        // console.log(res);
  
        if (req.status !==200) {
          document.getElementById('btn-text').textContent = 'Sign In';
          alert(res.message);
        } else {
          localStorage.setItem('token', res.token);
          await sendEmail(name, email);
          document.location.href = '/dash.html';
        }
      }
    } catch (error) {
      document.getElementById('btn-text').textContent = 'Sign In';
      console.log(error);
      alert('Check Your Internet Connection');
    }
  };