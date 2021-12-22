import React, { useEffect, useState } from 'react';

import ItemComentario from './ItemComentario';

// Assets
import { listarComentarios } from '../../utils/handleDesaparecido';
import CrearComentario from './CrearComentario';

const SeccionComentarios = ({ desaparecido }) => {

    const [comentarios, setComentarios] = useState([]);
    const [ocultar, setOcultar] = useState(true);

    const cargarComentarios = async (id) => {
        const data = await listarComentarios(id);
        setComentarios(data);
    }

    useEffect(() => {
        cargarComentarios(desaparecido._id);
    }, [desaparecido]);

    return (
        <>
            <section className="comentarios contenedor container--80rem">
                <h3 className="centrar-texto titulo__index titulo__index--fs3">Comentarios</h3>
                {comentarios.map(c => <ItemComentario
                    key={c._id} {...c}
                    comentario={c}
                />
                )}

            </section>
            {comentarios.length === 0 && <p className="no_results">No hay resultados disponibles...</p>}
            {ocultar?<a href="#/" data-cy="ccomentario-input" onClick={() => setOcultar(c=>!c)} className="subir__btn centrar-texto bold subir__btn--azul">
                Crear comentario
            </a>
            :
            <CrearComentario
                desaparecido={desaparecido}
                setOcultar={setOcultar} 
                cargarComentarios={cargarComentarios}/>
            }
            
        </>
    );
}

export default SeccionComentarios;