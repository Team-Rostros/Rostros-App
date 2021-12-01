// Predefined packages
import React from 'react';

// Asssets

import female from '../../img/female.png';
import { extraerFecha } from '../../utils/convertidor';

const ItemComentario = ({comentario, creador}) => {

    return (
        <div className="grid grid__comentario">
            <div className="comentario__imagen">
                <img className="comentario__img" src={female} alt="Avatar del creador del comentario" />
            </div>

            <div className="comentario__texto">
                <p>{comentario.descripcion}</p>
                <span className="italic mr-3">creado en {extraerFecha(comentario.createdAt)}</span>
                <span className="italic">creado por : {`${comentario.creador} ${comentario.apellido}`} </span>
                <span className="italic"> Autor: {`${comentario.nombre} ${comentario.apellido}`} </span>
            </div>

        </div>
    );
}

export default ItemComentario;