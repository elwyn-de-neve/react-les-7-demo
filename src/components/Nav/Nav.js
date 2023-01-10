import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import './Nav.css'

function Nav() {

    const { isAuth, logout } = useContext( AuthContext )

    function handleLogout() {
        logout()
    }

    return (
        <header>
            <nav className="container">
                <ul>
                    <li><NavLink to="/" className={ ( { isActive } ) => isActive ? "link--active" : "link" }>Home</NavLink></li>
                    <li><NavLink to="/profile" className={ ( { isActive } ) => isActive ? "link--active" : "link" }>Profile</NavLink></li>
                </ul>
                <ul>
                    { isAuth ?
                        <button type="button" onClick={ handleLogout }>Logout</button>
                        :
                        <>
                            <li><NavLink to="/register" className={ ( { isActive } ) => isActive ? "link--active" : "link" }>Register</NavLink></li>
                            <li><NavLink to="/login" className={ ( { isActive } ) => isActive ? "link--active" : "link" }>Login</NavLink></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Nav;