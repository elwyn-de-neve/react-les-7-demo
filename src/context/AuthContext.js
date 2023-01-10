import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext( {} );

function AuthContextProvider( { children } ) {

    const [ auth, setAuth ] = useState( {
        isAuth: false,
        user: null
    } );
    const navigate = useNavigate()

    function login( jwt ) {
        console.log("De gebruiker is ingelogd 🔓")
        localStorage.setItem('token', jwt )

        const decodedToken = jwt_decode(jwt);

        async function fetchUserData(){
            try {
                const response = await axios.get(`http://localhost:3000/600/users/${ decodedToken.sub }`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${ jwt }`,
                    }
                })
                setAuth({
                    isAuth: true,
                    user: {
                        email: response.data.email,
                        id: response.data.id,
                        username: response.data.username
                    }
                })
                navigate("/profile")
                console.log(response)
            } catch ( e ) {
                console.error(e)
            }
        }
        void fetchUserData()
    }

    function logout(  ) {
        console.log("De gebruiker is uitgelogd 🔒")
        localStorage.clear()
        setAuth({
            isAuth: false,
            user: null
        })
    }

    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        login: login,
        logout: logout
    }

    return (
        <AuthContext.Provider value={ contextData }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
