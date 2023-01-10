import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Profile from "./pages/Profile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {

    const { isAuth } = useContext( AuthContext );

    return (
        <>
            <Nav/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/profile" element={ isAuth ? <Profile/> : <Navigate to="/"/> }/>
                <Route path="/register" element={ <Register/> }/>
                <Route path="/login" element={ <Login/> }/>
            </Routes>
        </>
    );
}

export default App;
