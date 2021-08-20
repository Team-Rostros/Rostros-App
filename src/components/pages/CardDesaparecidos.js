// Predefined packages
import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import male from '../../img/male.jpg';

const CardDesaparecidos = () => {
    return (
        <div className="cards__desaparecidos">
            <div className="card__des">
                <div className="card__imagen centrar-texto">
                    <img className="card__imgdes" src={male} alt="Foto perfil" />
                </div>

                <div className="card_descrip justify">
                    <span className="bold azul">Nombre Completo: </span><p className="ib no-margin">Jose Arturo</p>
                    <div className="card__group">
                        <div className="group">
                            <span className="bold azul">Perdida en: </span><p className="ib no-margin">Colombia</p>
                            <span className="bold azul">Perdida desde: </span><p className="ib no-margin">29/01/1999</p>
                        </div>
                        <div className="group">
                            <span className="bold azul">Departamento: </span><p className="ib no-margin">Huila</p>
                            <span className="bold azul">Ciudad: </span><p className="ib no-margin">Neiva</p>
                        </div>
                        <div className="group">
                            <span className="bold azul">Genero: </span><p className="ib no-margin">Mujer</p>
                            <span className="bold azul">Edad: </span><p className="ib no-margin">19</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link className="subir__btn centrar-texto bold">¿La has visto?</Link>
        </div>
    );
}

export default CardDesaparecidos;