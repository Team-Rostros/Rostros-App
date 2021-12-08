// Predefined packages
import React from 'react';
import { Link } from 'react-router-dom';

// Custom packages

// Assets
import helpful from '../../img/helpful.png';

const CentroAyuda = () => {
    return (
        <div className="layout__grid">
            <aside className="grid__sidebarnav grid__sidebarnav--100hv">
                <ul className="block no-margin">
                    <Link className="grid__enlace" to="/">Volver</Link>
                    <Link className="grid__enlace" to="/#">Centro de ayuda</Link>
                    <Link className="grid__enlace" to="/terminos">Términos y condiciones</Link>
                    <Link className="grid__enlace" to="/anatomias">Anatomía del desaparecido</Link>
                </ul>
            </aside>

            <main className="contenedor">
                <h1 className="centrar-texto">Centro de ayuda</h1>

                <img className="main__imagen" src={helpful} alt="Icono resumen" />

                <div className="contenedor">

                    <p className="contenedor__parrafo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                </div>
            </main>
        </div>
    );
}

export default CentroAyuda;