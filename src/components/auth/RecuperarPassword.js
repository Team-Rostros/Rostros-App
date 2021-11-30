// Predefined packages
import React, { useContext } from 'react';
import AlertaContext from '../../context/alertas/alertaContext';
import { recuperarPassword } from '../../context/autenticacion/recuperarPassword';
import { useForm } from '../../hooks/useForm';

// Assets
import logoazul from '../../img/logoazul.png';

const RecuperarPassword = ({history}) => {

    //Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const [{ password, rpassword, email }, handleInputChange] = useForm({
        password: '',
        rpassword: '',
        email: '',
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        if (password === '' || rpassword === '' || email === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        //Revisar que los dos passwords sean iguales
        if (password !== rpassword) {
            mostrarAlerta('La contraseñas no son iguales', 'alerta-error');
            return;
        }

        const data = await recuperarPassword(email, password);
        if (data.success) {
            mostrarAlerta('Se realizó el cambio exitosamente', 'alerta-ok');
            history.replace('/login');
        } else {
            mostrarAlerta('No se logró modificar la contraseña', 'alerta-error');
        }
    }
    return (
        <div className="contenedor__pass">
            <form className="rcontra" onSubmit={onSubmit}>
                {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
                <img className="rcontra__logoazul" src={logoazul} alt="Logo Rostros" />
                <h3 className="centrar-texto">Recuperar Contraseña</h3>




                <div className="input">
                    <label className="label label--rcontra bold" htmlFor="email">Correo eléctronico</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        className="input-style input-style--rcontra"
                        onChange={handleInputChange}
                    />

                </div>
                <div className="input">
                    <label className="label label--rcontra bold" htmlFor="rcontra">Digite la nueva contraseña</label>
                    <input
                        id="rcontra"
                        type="password"
                        name="password"
                        value={password}
                        className="input-style input-style--rcontra"
                        onChange={handleInputChange}
                    />

                </div>

                <div className="input">
                    <label className="label label--rcontra bold" htmlFor="password">Digite nuevamente la contraseña</label>
                    <input
                        id="password"
                        type="password"
                        name="rpassword"
                        value={rpassword}
                        className="input-style input-style--rcontra"
                        onChange={handleInputChange}
                    />

                </div>

                <input type="submit" value="Actualizar" className="boton boton--primario centrar-bloque boton--rcontra" />
            </form>
        </div>
    );
}

export default RecuperarPassword;