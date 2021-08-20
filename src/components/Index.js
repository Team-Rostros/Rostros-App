// Predefined packages

import React from 'react';
import { Link } from 'react-router-dom';

//Assets

import logo from '../img/logo.png';
import layer from '../img/layer.png';
import feedback from '../img/feedback.png';
import messaging from '../img/messaging.png';
import clock from '../img/clock.png';
import coins from '../img/coins.png';

const Index = () => {
    return (
        <>
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

            <section class="banner__index">
                <div class="negro"></div>
                <div class="contenedor container--1200">
                    <h3 class="titulo__banner">Nunca paramos de preocuparnos por ti</h3>
                    <p class="parrafo__banner">Somos una organización benéfica, que ayuda a las
                        personas afectadas por la desaparición de un ser
                        querido.
                    </p>
                </div>
            </section>

            <section id="characters" class="caracteristicas">
                <div className="contenedor container--1200">
                    <h2 className="titulo__index">Caracteristicas</h2>

                    <div className="grid__character">
                        <div className="card card--character">
                            <img className="character__img" src={layer} alt="Icono Layer" />

                            <p className="justify text__character">Iquam consectetur accumsan
                                faucibus. Aliquam risus elit,
                                scelerisque sed augue sit amet,
                                porttitor dictum mauris.</p>
                        </div>

                        <div className="card card--character">
                            <img className="character__img" src={layer} alt="Icono Layer" />

                            <p className="justify text__character">Iquam consectetur accumsan
                                faucibus. Aliquam risus elit,
                                scelerisque sed augue sit amet,
                                porttitor dictum mauris.</p>
                        </div>

                        <div className="card card--character">
                            <img className="character__img" src={layer} alt="Icono Layer" />

                            <p className="justify text__character">Iquam consectetur accumsan
                                faucibus. Aliquam risus elit,
                                scelerisque sed augue sit amet,
                                porttitor dictum mauris.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="historia">
                <div className="contenedor container--1200">
                    <h2 className="titulo__index">La historia no para aquí...</h2>

                    <div className="grid">
                        <div className="grid__textobtn">
                            <p className="text__grid">Ayúdanos proporcionando información acerca de las personas desaparecidas</p>
                            <Link className="btn__gridi btn__grid--left" to="/#">Únete a la búsqueda</Link>
                        </div>

                        <div className="grid__imageni">
                            <img src={messaging} alt="Imagen Mensajes" />
                        </div>
                    </div>

                    <hr className="line__historia" />

                    <div className="grid grid__reverse">
                        <div className="grid__textobtn grid__textobtn--reverse">
                            <p className="text__grid text__grid--reverse">Ayúdanos proporcionando información acerca de las personas desaparecidas</p>
                            <Link className="btn__gridi btn__gridi--reverse" to="/#">Únete a la búsqueda</Link>
                        </div>

                        <div className="grid__imageni grid__imageni--reverse">
                            <img src={feedback} alt="Imagen Mensajes" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="apoyo">
                <div className="contenedor container--1200">
                    <h2 className="titulo__index">Maneras de apoyarnos</h2>

                    <div className="grid__apoyo">
                        <div className="apoyo__item">
                            <h3 className="titulo__index titulo__index--apoyo">Voluntario</h3>
                            <img className="apoyo__img" src={clock} alt="Icono Reloj" />
                            <p className="apoyo__text">Regale su tiempo para ayudar a poner a salvo a las personas desaparecidas.</p>
                            <Link className="apoyo__enlace" to="/#">Ser un voluntario</Link>
                        </div>

                        <div className="apoyo__item">
                            <h3 className="titulo__index titulo__index--apoyo">Donando</h3>
                            <img className="apoyo__img" src={coins} alt="Icono Monedas" />
                            <p className="apoyo__text">Cualquier donación pequeña o grande, puede ayudarnos a seguir siendo un salvavidas 24/7.</p>
                            <Link className="apoyo__enlace" to="/donaciones">Haz un donativo</Link>
                        </div>
                    </div>
                </div>
            </section>

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
        </>
    );
}

export default Index;