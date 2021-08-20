// Predefined packages
import React from 'react';
import { Link } from 'react-router-dom';

// Custom packages

//Assets
import logo from '../../img/logo.png';

const Nav = () => {
    return (
        <nav className="nav__flex">
            <div className="nav">
                <Link to="/"><img className="nav__imagen" src={logo} alt="Logo" /> </Link>
            </div>

            <div className="nav__flex">

                <Link className="nav__enlace" to="index.html">Inicio</Link>
                <Link className="nav__enlace" to="#characters">Características</Link>
                <Link className="nav__enlace" to="/terminos">Términos</Link>
                <Link className="nav__enlace" to="/login">Iniciar sesión</Link>

            </div>
        </nav>
    );
}

export default Nav;