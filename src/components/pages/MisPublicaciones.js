import React, {Fragment, useContext, useEffect} from 'react';

import AuthContext from '../../context/autenticacion/authContext';

//Assets
import LogoAzul from '../../img/logoazulv.png';
import Home from '../../img/home.png';
import UserSolid from '../../img/usersolid.png';
import UserFriends from '../../img/userfriends.png';
import Coins from '../../img/coinz.png';
import Question from '../../img/question.png';
import Bell from '../../img/bell.png';
import SignOut from '../../img/signout.png';
import Search from '../../img/search.png';
import Filter from '../../img/filter.png';
import Male from '../../img/male.jpg';

const Mispublicaciones = () => {

    //Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado} = authContext;

    useEffect(()=>{
        usuarioAutenticado();
    }, [])
    return (
        <Fragment>
            <div className="grid__desaparecido">
                <aside className="grid__aside">

                    <a href="index.html"><img className="aside__imagen logo__aside" src={LogoAzul} alt="Logo Rostros" /></a>

                    <div className="item__aside">
                        <a href="index.html">
                            <img className="aside__imagen" src={Home} alt="Icono Home" />
                            <h3 className="titulo__aside centrar-texto">Inicio</h3>
                        </a>   
                    </div>

                    <div className="item__aside">
                        <a href="crear-desaparecido.html">
                            <img className="aside__imagen" src={UserSolid} alt="Icono User" />
                            <h3 className="titulo__aside centrar-texto">Reportar Desaparecido</h3>
                        </a>
                    </div>

                    <div className="item__aside">
                        <a href="ver-desaparecidos.html">
                            <img className="aside__imagen" src={UserFriends} alt="Icono Users" />
                            <h3 className="titulo__aside centrar-texto">Ver Desaparecidos</h3>
                        </a>
                    </div>

                    <div className="item__aside">
                        <a href="donaciones.html">
                            <img className="aside__imagen" src={Coins} alt="Icono Coin" />
                            <h3 className="titulo__aside centrar-texto">Donar</h3>
                        </a>
                    </div>

                    <div className="item__aside">
                        <a href="centroayuda.html">
                            <img className="aside__imagen" src={Question} alt="Icono Question" />
                            <h3 className="titulo__aside centrar-texto">Ayuda</h3>
                        </a>  
                    </div>
                </aside>

                <div className="grid__main">
                    <nav className="flexbox">
                        <a className="label__nav" href="#"><img className="flexbox__navimagen flexbox__navimagen--bell centrar-texto" src={Bell} alt="Icono Campana" /></a>
                        <a className="label__nav" href="#">Hola Diego</a>
                        <a className="label__nav" href="#">Mis publicaciones</a>
                        <a className="label__nav" href="#">Salir<img className="flexbox__navimagen flexbox__navimagen--sign" src={SignOut} alt="Icono Sign Out" /></a>
                        
                    </nav>

                    <div className="search">
                        <input className="input__search" type="search" placeholder="Consulte por el nombre" />
                        <button className="btn__search"><img className="search__img" src={Search} /></button>                
                    </div>

                    <div className="filter">
                        <div className="filter__checks">
                            <button><img className="filter__img" src={Filter} /></button>
                            <input type="checkbox" name="asc" id="asc" />Más reciente
                            <input type="checkbox" name="des" id="desc" />Más antigua
                        </div>
                    </div>

                    <div className="contenedor container--1200">
                        <h1 className="titulo__index">Mis publicaciones</h1>

                        <div className="cards__contenedor">
                            <div className="cards__desaparecidos">
                                <div className="card__des">
                                    <div className="card__imagen centrar-texto">
                                        <img className="card__imgdes" src={Male} alt="Foto perfil" />
                                    </div>
                                    
                                    <div className="card_descrip justify">
                                        <span className="bold azul">Nombre Completo: </span><p className="ib no-margin">Jose Arturo</p>
                                        <div className="card__group">
                                            <div className="group">
                                                <span className="bold azul">Perdida en: </span><p className="ib no-margin">Colombia</p>
                                                <span className="bold azul">Perdida desde: </span><p className="ib no-margin">29/01/1999</p>
                                            </div>
                                            <div className="group">
                                                <span className="bold azul">Departamento: </span><p className="ib no-margin">Huila</p>
                                                <span className="bold azul">Ciudad: </span><p className="ib no-margin">Neiva</p>
                                            </div>
                                            <div className="group">
                                                <span className="bold azul">Genero: </span><p className="ib no-margin">Mujer</p>
                                                <span className="bold azul">Edad: </span><p className="ib no-margin">19</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="subir__btn centrar-texto bold">¿La has visto?</a>
                            </div>
            
                            <div className="cards__desaparecidos">
                                <div  className="card__des">
                                    <div className="card__imagen centrar-texto">
                                        <img className="card__imgdes" src={Male} alt="Foto perfil" />
                                    </div>
                                    
                                    <div className="card_descrip justify">
                                        <span className="bold azul">Nombre Completo: </span><p className="ib no-margin">Jose Arturo</p>
                                        <div className="card__group">
                                            <div className="group">
                                                <span className="bold azul">Perdida en: </span><p className="ib no-margin">Colombia</p>
                                                <span className="bold azul">Perdida desde: </span><p className="ib no-margin">29/01/1999</p>
                                            </div>
                                            <div className="group">
                                                <span className="bold azul">Departamento: </span><p className="ib no-margin">Huila</p>
                                                <span className="bold azul">Ciudad: </span><p className="ib no-margin">Neiva</p>
                                            </div>
                                            <div className="group">
                                                <span className="bold azul">Genero: </span><p className="ib no-margin">Mujer</p>
                                                <span className="bold azul">Edad: </span><p className="ib no-margin">19</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="subir__btn centrar-texto bold">¿La has visto?</a>
                            </div>
            
                            <div className="cards__desaparecidos">
                                <div className="card__des">
                                    <div className="card__imagen centrar-texto">
                                        <img className="card__imgdes" src={Male} alt="Foto perfil" />
                                    </div>
                                    
                                    <div className="card_descrip justify">
                                        <span className="bold azul">Nombre Completo: </span><p className="ib no-margin">Jose Arturo</p>
                                        <div className="card__group">
                                            <div className="group">
                                                <span className="bold azul">Perdida en: </span><p className="ib no-margin">Colombia</p>
                                                <span className="bold azul">Perdida desde: </span><p className="ib no-margin">29/01/1999</p>
                                            </div>
                                            <div className="group">
                                                <span className="bold azul">Departamento: </span><p className="ib no-margin">Huila</p>
                                                <span className="bold azul">Ciudad: </span><p className="ib no-margin">Neiva</p>
                                            </div>
                                            <div className="group">
                                                <span className="bold azul">Genero: </span><p className="ib no-margin">Mujer</p>
                                                <span className="bold azul">Edad: </span><p className="ib no-margin">19</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="subir__btn centrar-texto bold">¿La has visto?</a>
                            </div>
                        </div>

                        

                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Mispublicaciones;