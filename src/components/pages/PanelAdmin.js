// Predefined packages
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// Custom packages
import VerComentariosAdmin from './VerComentariosAdmin';
import VerDesaparecidosAdmin from './VerDesaparecidosAdmin';
import AuthContext from '../../context/autenticacion/authContext';

// Assets
import logoazulv from '../../img/logoazulv.png';
import home from '../../img/home.png';
import userfriends from '../../img/userfriends.png';
import Comments from '../../img/comments-b.png';
import Bell from '../../img/bell.png';

const PanelAdmin = ({ history }) => {

    //Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { usuario, cerrarSesion } = authContext;

    if (!usuario?.is_admin) history.push('/panel-usuario');

    const [menu, setMenu] = useState(0);

    const sweetAlert = () => {
        Swal.fire({
            title: 'Cerrando Sesion',
            timer: 500,
            timerProgressBar: true,
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        });

        setTimeout(() => {
            cerrarSesion();
        }, 500);
    }

    return (
        <div className="grid__desaparecido">
            <aside className="grid__aside">

                <Link to="/">
                    <img className="aside__imagen logo__aside" src={logoazulv} alt="Logo Rostros" />
                </Link>

                <div className="item__aside">
                    <Link to="/">
                        <img className="aside__imagen" src={home} alt="Icono Home" />
                        <h3 className="titulo__aside centrar-texto">Inicio</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to="#/" onClick={() => setMenu(0)}>
                        <img className="aside__imagen" src={Comments} alt="Icono Users" />
                        <h3 className="titulo__aside centrar-texto">Ver Comentarios</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to="#/" onClick={() => setMenu(1)}>
                        <img className="aside__imagen" src={userfriends} alt="Icono Users" />
                        <h3 className="titulo__aside centrar-texto">Ver Desaparecidos</h3>
                    </Link>
                </div>

            </aside>

            <div className="grid__main">

                <nav className="flexbox">
                    <Link className="label__nav" to="/#">
                        <img className="flexbox__navimagen flexbox__navimagen--bell centrar-texto" src={Bell} alt="Icono Campana" />
                    </Link>
                    <Link className="label__nav" to="/#">
                        {usuario ? <a className="label__nav" >{usuario.nombre}</a> : null}
                    </Link>
                    <button
                        className="label__nav"
                        onClick={() => sweetAlert()}
                    >Salir</button>

                </nav>

                {
                    menu === 0
                    ?
                    <VerComentariosAdmin />
                    :
                    <VerDesaparecidosAdmin />
                }

            </div>
        </div>
    );
}

export default PanelAdmin;