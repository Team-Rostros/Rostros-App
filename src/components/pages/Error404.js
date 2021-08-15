import React, {Fragment} from 'react';

const Error404 = () => {
    return (
        <Fragment>
            <div className="background__nofound">

                <p className="nofound__titulo no-margin">404</p>


                <p className="nofound__parrafo no-margin" >Parece que estás perdido</p>

                <a className="boton nofound__button" href="#">Volver al inicio</a>

            </div>
        </Fragment>
    );
}
 
export default Error404;