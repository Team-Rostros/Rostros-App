// Predefined packages
import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import medicine from '../../img/medicine.png';
import Craneo from '../../img/Craneo.png';
import Rostro from '../../img/Rostro.png';
import Ojos from '../../img/Ojos.png';
import Nariz from '../../img/Nariz.png';
import Cuerpo from '../../img/Cuerpo.png';

const CardListaAnatomia = ({ link, urlImage, alt, title }) => {
    return (
        <div className="card">
            <Link to={link}>
                <img className="card__imagen" src={urlImage} alt={alt} />
            </Link>
            <h3 className="centrar-texto">{title}</h3>
        </div>
    );
}

const AnatomiaDelDesaparecido = () => {
    return (
        <div className="layout__grid">
            <aside className="grid__sidebarnav grid__sidebarnav--ana">
                <ul className="block no-margin">
                    <Link className="grid__enlace" to="/">Volver</Link>
                    <Link className="grid__enlace" to="/centro-ayuda">Centro de ayuda</Link>
                    <Link className="grid__enlace" to="/terminos">Términos y condiciones</Link>
                    <Link className="grid__enlace" to="/anatomias">Anatomía del desaparecido</Link>
                </ul>
            </aside>

            <main className="contenedor">
                <h1 className="centrar-texto">Anatomía del desaparecido</h1>

                <img className="main__imagen" src={medicine} alt="Icono resumen" />

                <div className="contenedor">

                    <p className="contenedor__parrafo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                </div>

                <section className="grid__anatomias">
                    <h2 className="centrar-texto">Lista</h2>

                    <div className="anatomias__card contenedor">

                        <CardListaAnatomia
                            link="/#"
                            urlImage={Craneo}
                            alt="Icono Craneo"
                            title="Cráneos"
                        />
                        <CardListaAnatomia
                            link="/#"
                            urlImage={Rostro}
                            alt="Icono Rostro"
                            title="Rostros"
                        />
                        <CardListaAnatomia
                            link="/#"
                            urlImage={Ojos}
                            alt="Icono Ojos"
                            title="Ojos"
                        />
                        <CardListaAnatomia
                            link="/#"
                            urlImage={Cuerpo}
                            alt="Icono Cuerpo"
                            title="Cuerpo"
                        />
                        <CardListaAnatomia
                            link="/#"
                            urlImage={Nariz}
                            alt="Icono Nariz"
                            title="Nariz"
                        />
                    </div>
                </section>
            </main>

        </div>
    );
}


export default AnatomiaDelDesaparecido;