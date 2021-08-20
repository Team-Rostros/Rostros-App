// Predefined packages
import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <>
            <div className="background__nofound">

                <p className="nofound__titulo no-margin">404</p>


                <p className="nofound__parrafo no-margin" >Parece que estás perdido</p>

                <Link className="boton nofound__button" to="/">Volver al inicio</Link>

            </div>
        </>
    );
}
 
export default Error404;