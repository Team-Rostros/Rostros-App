// Predefined packages
import React from 'react';
import { Link } from 'react-router-dom';

// Assets

const CardDesaparecidos = ({desaparecido, id,nombre, pais, fechad, departamento, ciudad, genero, edad, setDesaparecido, setMenu, show=4}) => {
    return (
        <div className="cards__desaparecidos">
            <div className="card__des">
                <div className="card__imagen centrar-texto">
                    <img className="card__imgdes" src={`http://localhost:4000/api/desaparecido/photo/${id}`} alt="Foto perfil" />
                    <a href="#/"
                        onClick={()=>{setDesaparecido(desaparecido);setMenu(show);}}
                        style={{fontSize:'1.3rem', textDecoration:'underline'}}
                        className="bold azul"
                    >
                        {show===4?'Editar': 'Ver detalle'}
                    </a>
                </div>

                <div className="card_descrip justify">
                    <span className="bold azul">Nombre Completo: </span><p className="ib no-margin">{nombre}</p>
                    <div className="card__group">
                        <div className="group">
                            <span className="bold azul">Perdida en: </span><p className="ib no-margin">{pais}</p>
                            <span className="bold azul">Perdida desde: </span><p className="ib no-margin">{fechad}</p>
                        </div>
                        <div className="group">
                            <span className="bold azul">Departamento: </span><p className="ib no-margin">{departamento}</p>
                            <span className="bold azul">Ciudad: </span><p className="ib no-margin">{ciudad}</p>
                        </div>
                        <div className="group">
                            <span className="bold azul">Genero: </span><p className="ib no-margin">{genero}</p>
                            <span className="bold azul">Edad: </span><p className="ib no-margin">{edad}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="#/" className="subir__btn centrar-texto bold">¿La has visto?</Link>
        </div>
    );
}

export default CardDesaparecidos;