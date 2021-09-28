// Predefined packages
import React from 'react';

// Asssets

import female from '../../img/female.png';
import { extraerFecha } from '../../utils/convertidor';

const ItemComentario = ({comentario}) => {

    return (
        <div className="grid grid__comentario">
            <div className="comentario__imagen">
                <img className="comentario__img" src={female} alt="Avatar del creador del comentario" />
            </div>

            <div className="comentario__texto">
                <p>{comentario.descripcion}</p>
                <span className="italic">creado en {extraerFecha(comentario.createdAt)}</span>
            </div>
        </div>
    );
}

export default ItemComentario;