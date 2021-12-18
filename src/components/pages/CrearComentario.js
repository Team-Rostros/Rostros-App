import React, {useContext} from 'react';
import { useForm } from '../../hooks/useForm';
import { crearComentarios } from '../../utils/handleDesaparecido';
import AuthContext from '../../context/autenticacion/authContext';
import Swal from 'sweetalert2';

const CrearComentario = ({desaparecido, setOcultar, cargarComentarios}) => {

    //Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuario} = authContext;

    const [value, handleInputChange, cleanOBjects] = useForm({
        descripcion:''
    });

    const {descripcion} = value;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await crearComentarios({
            descripcion:descripcion,
            desaparecido: desaparecido._id,
            creador: usuario._id,
        });
        
        if(data){
            Swal.fire(
                '¡Buen trabajo!',
                '¡Comentario creado!',
                'success'
            );
        }

        cleanOBjects();
        setOcultar(c=>!c);
        cargarComentarios(desaparecido._id);
    }
    return (
        <div className="crear__comentario mb-5">
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label className="label bold" htmlFor="tel">Escriba el comentario:</label>
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