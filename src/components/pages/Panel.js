// Predefined packages
import React from 'react';
import { Link } from 'react-router-dom';

// Custom packages
import Footer from './Footer';
import Nav from './Nav';

// Assets
import usersolid from '../../img/usersolid.png';

const CardPanel = ({ icon, alt, title, link }) => {
    return (
        <div className="card card--azul">
            <Link to={link}>
                <img className="img__card--azul" src={icon} alt={alt} />

            </Link>
            <p>{title}</p>
        </div>
    );
}

const Panel = () => {
    return (
        <>
            <Nav />

            <section>
                <div className="contenedor">
                    <h1 className="titulo__index">Panel de Administración</h1>

                    <div className="cards__pa--azul">

                        <CardPanel
                            icon={usersolid}
                            alt="Icono Ver Comentarios"
                            title="Ver comentarios"
                            link="/"
                        />
                        <CardPanel
                            icon={usersolid}
                            alt="Icono Ver Comentarios"
                            title="Ver publicaciones"
                            link="/"
                        />
                        <CardPanel
                            icon={usersolid}
                            alt="Icono Ver Comentarios"
                            title="Próximamente..."
                            link="/"
                        />
                        <CardPanel
                            icon={usersolid}
                            alt="Icono Ver Comentarios"
                            title="Próximamente..."
                            link="/"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Panel;