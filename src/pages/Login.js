import React, { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Login() {

    const { login } = useContext( AuthContext )

    async function handleLogin() {
        try {
            const response = await axios.post('http://localhost:3000/login',{
                email: "klaas@novi.nl",
                password: "123456",
            })
            login( response.data.accessToken )
        } catch ( e ) {
            console.error( e )
        }
    }

    return (
        <main className="container">
            <h1>Login</h1>
            <button type="button" onClick={ handleLogin }>Login</button>
        </main>
    );
}

export default Login;