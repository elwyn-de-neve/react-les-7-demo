import React, { useContext, useState } from 'react';
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Register() {
    const [ email, setEmail ] = useState( "" )
    const [ username, setUsername ] = useState( "" )
    const [ password, setPassword ] = useState( "" )

    const { login } = useContext( AuthContext )

    async function registerUser(e) {
        e.preventDefault()
        console.log( "De gebruiker is geregistreerd 👤" )
        try {
            const response = await axios.post('http://localhost:3000/register',{
                email: email,
                username: username,
                password: password,
            })
            login( response.data.accessToken )
        } catch ( e ) {
            console.error( e )
        }
    }

    return (
        <main className="container">
            <h1>Registreren</h1>
            <form onSubmit={ registerUser }>
                <input placeholder="Email" type="email" value={ email } onChange={ e => setEmail( e.target.value ) }/>
                <input placeholder="Username" type="text" value={ username } onChange={ e => setUsername( e.target.value ) }/>
                <input placeholder="Password" type="password" value={ password } onChange={ e => setPassword( e.target.value ) }/>
                <button type="submit">Sign Up</button>
            </form>
        </main>
    );
}

export default Register;