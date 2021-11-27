// Predefined packages
import React from 'react';

// Custom packages
import { extraerFecha } from '../../utils/convertidor';

// Assets
import female from '../../img/female.png';

const CardComentariosAdmin = ({
    _id,
    descripcion,
    creador,
    desaparecido,
    createdAt,
    eliminar
}) => {

    return (
        <div className="grid grid__comentario">
            <div className="comentario__imagen">
                <img className="comentario__img" src={female} alt="Icono Foto" />
            </div>

            <div className="comentario__texto">
                <p>{descripcion}</p>
                <div className="comentario__flex">
                    <span className="italic"> Creado en {extraerFecha(createdAt)} </span>
                    <span className="italic"> Autor: {`${creador.nombre} ${creador.apellido}`} </span>
                    <span className="italic"> Desaparecido: {`${desaparecido?.nombre1} ${desaparecido?.apellido1}`} </span>
                </div>
            </div>
            <a href="#/" onClick={()=>eliminar(_id)} className="subir__btn subir__btn--rojo centrar-texto bold subir__btn--100">Eliminar</a>
        </div>
    );
}

export default CardComentariosAdmin;