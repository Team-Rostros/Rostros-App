// Predefined packages
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
                <div className="contenedor container--1200">
                    <div className="grid__footer block__footer">
                        <div className="footer__rostros">
                            <p className="titulo__footer">Rostros</p>
                            <p>Street Address</p>
                            <p>Street Address</p>
                            <p>Street Address</p>
                            <p>rostros@gmail.com</p>
                        </div>
                        <div className="footer__nav">
                            <p className="titulo__footer">Navegación</p>
                            <ul className="footer__lista">
                                <li> <Link to="/" className="footer__li">Inicio</Link></li>
                                <li> <Link to="/#characters" className="footer__li">Caracteristicas</Link></li>
                                <li> <Link to="/terminos" className="footer__li">Terminos</Link></li>
                                <li> <Link to="/login" className="footer__li">Iniciar sesion</Link></li>
                            </ul>
                        </div>
                        <div className="footer__nosotros">
                            <p className="titulo__footer">Acerca de nosotros</p>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis quae perferendis necessitatibus quis ratione molestiae.</p>
                        </div>
                        <div className="footer__sociales">
                            <p className="titulo__footer titulo__footer--last">Redes Sociales</p>

                            <ul className="footer__lista footer__lista--last">
                                <li> <a href="/#" className="footer__li">Facebook</a></li>
                                <li> <a href="/#" className="footer__li">Instagram</a></li>
                                <li> <a href="/#" className="footer__li">Twitter</a></li>
                                <li> <a href="/#" className="footer__li">Gmail</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__enlace">
                        <p className="centrar-texto no-margin">2021 Rostros. Todos los derechos reservados</p>
                    </div>
                </div>

            </footer>
    )
}

export default Footer;