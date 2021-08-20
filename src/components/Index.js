// Predefined packages
import React from 'react';
import { Link } from 'react-router-dom';

// Custom packages
import Nav from './pages/Nav';

//Assets
import layer from '../img/layer.png';
import feedback from '../img/feedback.png';
import messaging from '../img/messaging.png';
import clock from '../img/clock.png';
import coins from '../img/coins.png';
import Footer from './pages/Footer';

const Index = () => {
    return (
        <>
            <Nav/>

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

            <Footer/>
        </>
    );
}

export default Index;