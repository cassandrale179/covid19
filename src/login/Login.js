 

import React from 'react';
import './Login.css';

function goToSignup(){
    window.location.href = '/signup';
}

function goToHome(){
    window.location.href = '/home';
}

function Login() {
  return (
    <main>
      <div className="Login">
        <header className="header">
        <h1> Tracer </h1>
        <h3> Trace contact and stay safe. </h3>
        <img src="https://image.freepik.com/free-vector/telemedicine-online-medicine-medical-consultant-concept-coronavirus-outbreak-pandemic-healthcare-flat-design-abstract-people_28576-240.jpg" />
        <button onClick={goToSignup} className="button default"> Sign Up</button>
        <button onClick={goToHome} className="button"> Log in </button>
        </header>
        </div>
    </main>
  );
}

export default Login;


