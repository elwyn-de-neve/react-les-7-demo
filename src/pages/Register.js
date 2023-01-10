import React from 'react';

function Register(  ) {

    function registerUser(){
        console.log("De gebruiker is geregistreerd 👤")
    }

    return (
        <main className="container">
            <h1>Registreren</h1>
            <button type="button" onClick={ registerUser }>Sign Up</button>
        </main>
    );
}

export default Register;