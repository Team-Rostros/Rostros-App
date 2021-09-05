// Predefined packages
import React, { useState } from 'react';

// Custom packages
import { useForm } from '../../hooks/useForm';
import { regExpPassword } from '../../utils/validator';

// Assets
import logoazul from '../../img/logoazul.png';

const RecuperarPassword = () => {

    const [values, handleInputChange] = useForm({
        password: '',
        rpassword: ''
    });

    const { password, rpassword } = values;

    // Extracting Errors
    const [error, setError] = useState({
        ePassword: "0",
        eRpassword: "0"
    });

    const { ePassword, eRpassword } = error;

    // Validar campos
    const validateAndShow = (e) => {

        const { target } = e;
        const { name } = target;

        switch (name) {
            case 'password':
                setError({ ...error, ePassword: handleInputChange(e, regExpPassword) });
                break;
            case 'rpassword':
                setError({ ...error, eRpassword: handleInputChange(e, regExpPassword) });
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        // Hacer las respectivas validaciones de coincidencia entre passwords
    }

    return (
        <div className="contenedor__pass">
            <form className="rcontra" onSubmit={handleSubmit}>
                <img className="rcontra__logoazul" src={logoazul} alt="Logo Rostros" />
                <h3 className="centrar-texto">Recuperar Contraseña</h3>

                <div className="input">
                    <label className="label label--rcontra bold" htmlFor="rcontra">Digite la nueva contraseñaa</label>
                    <input
                        id="rcontra"
                        type="password"
                        name="password"
                        value={password}
                        className="input-style input-style--rcontra"
                        onChange={validateAndShow}
                    />
                    {!ePassword && <p className="error">Campo inválido</p>}
                </div>

                <div className="input">
                    <label className="label label--rcontra bold" htmlFor="password">Digite nuevamente la contraseña</label>
                    <input
                        id="password"
                        type="password"
                        name="rpassword"
                        value={rpassword}
                        className="input-style input-style--rcontra"
                        onChange={validateAndShow}
                    />
                    {!eRpassword && <p className="error">Campo inválido</p>}
                </div>

                <input type="submit" value="Actualizar" className="boton boton--primario centrar-bloque boton--rcontra" />
            </form>
        </div>
    );
}

export default RecuperarPassword;