// Predefined packages
import React from 'react';

// Custom packages
import Nav from './Nav';

// Assets
import paypal from '../../img/paypal.png';
import Footer from './Footer';

const Donaciones = () => {
    return (
        <>
            <Nav />

            <section className="banner__index banner__index--don">

                <div className="contenedor container--1200">
                    <p className="parrafo__banner parrafo__banner--don no-margin">Ayudanos a seguir brindando medios para salvar a más personas.</p>

                </div>

                <div className="banner__onda">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L80,186.7C160,213,320,267,480,256C640,245,800,171,960,138.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                    </path>
                    </svg>
                </div>
            </section>

            <section className="donaciones">
                <div className="contenedor container--1200">
                    <h2 className="titulo__index">Haz tu donación</h2>

                    <div className="grid">
                        <div className="grid__donacionimg">
                            <img src={paypal} alt="Icono Paypal" />
                        </div>
                        <div className="grid__donaciontext">
                            <p className="titulo__index titulo__index--fs3">Datos de la cuenta</p>
                            <p className="centrar-texto"><label className="label__donacion">Número de cuenta:</label>123456789</p>
                        </div>
                    </div>

                </div>
            </section>

            <Footer/>
        </>
    );
}

export default Donaciones;