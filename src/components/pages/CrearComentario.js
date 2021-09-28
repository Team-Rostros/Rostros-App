import React from 'react';
import { useForm } from '../../hooks/useForm';
import { crearComentarios } from '../../utils/handleDesaparecido';

const CrearComentario = ({desaparecido, setOcultar, cargarComentarios}) => {

    const [value, handleInputChange, cleanOBjects] = useForm({
        descripcion:''
    });

    const {descripcion} = value;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await crearComentarios({
            descripcion:descripcion,
            desaparecido: desaparecido._id,
            creador: desaparecido.creador,
        });

        if(data) alert("Creado exitosamente");

        cleanOBjects();
        setOcultar(c=>!c);
        cargarComentarios(desaparecido._id);
    }
    return (
        <div className="crear__comentario">
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label className="label bold" htmlFor="tel">Escriba el comentario</label>
                    <textarea
                        type="text"
                        className="input-style"
                        id="descripcion"
                        name="descripcion"
                        value={descripcion}
                        onChange={handleInputChange}
                        required>
                    </textarea>

                </div>
                <input type="submit" className="subir__btn centrar-texto bold" value="Agregar comentario"/>
            </form>
        </div>
    );
}

export default CrearComentario;