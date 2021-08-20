// Predefined packages
import React from 'react';

// Custom packages

// Assets
import male from '../../img/male.jpg';
import ItemComentario from './ItemComentario';

const ItemDesaparecido = () => {
    return (
        <div className="contenedor container--1200">
            <h1 className="titulo__index">Solicitud del reporte desaparecido</h1>

            <div className="tab">
                <button className="tablinks" onClick="openCity(event, 'ip')" id="defaultOpen">Informacion Personal</button>
                <button className="tablinks" onClick="openCity(event, 'cm')" id="caracteristicasM">Caracteristicas M</button>
                <button className="tablinks" onClick="openCity(event, 'cf')" id="caracteristicasF">Caracteristicas F</button>
                <button className="tablinks" onClick="openCity(event, 'ir')" id="informacionR">Informacion Relevante</button>
            </div>


            <div id="ip" className="tabcontent">
                <h2 className="titulo__index titulo__index--fs3 centrar-texto">Informacion Personal</h2>
                <img className="tab__imagen" src={male} alt="Icono Foto" />

                {/**Formulario */}

                <form className="grid__form container--80rem">
                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="pnombre">Primer nombre</label>
                            <p className="centrar-texto">June</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="papellido">Primer apellido</label>
                            <p className="centrar-texto">N</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="snombre">Segundo nombre</label>
                            <p className="centrar-texto">Dorie</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="sapellido">Segundo apellido</label>
                            <p className="centrar-texto">N</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="nombre">Género</label>
                            <p className="centrar-texto">Femenino</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="apellido">Fecha de nacimiento</label>
                            <p className="centrar-texto">29/01/1999</p>
                        </div>
                    </div>

                    <h3 className="centrar-texto titulo__index titulo__index--fs3">Ultima vez vista</h3>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="pais">Pais</label>
                            <p className="centrar-texto">Colombia</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="depart">Departamento</label>
                            <p className="centrar-texto">Huila</p>
                        </div>
                    </div>

                    <div className="input-group input-group--tres">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="ciudad">Ciudad</label>
                            <p className="centrar-texto">Neiva</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="zipcode">Zip Code</label>
                            <p className="centrar-texto">410006</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="fechad">Fecha</label>
                            <p className="centrar-texto">30/05/2021</p>
                        </div>
                    </div>

                    <a href="#/" onClick="openCity(event, 'cm')" className="subir__btn centrar-texto bold">Siguiente</a>

                    <a href="#/" className="subir__btn centrar-texto bold subir__btn--verde">Marcar como encontrada</a>

                </form>
            </div>

            <div id="cm" className="tabcontent">
                <h2 className="titulo__index titulo__index--fs3 centrar-texto">Caracteristicas Morfologicas</h2>

                {/**Formulario */}

                <form className="grid__form container--80rem">
                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="craneo">Craneo</label>
                            <p className="centrar-texto">Dolicocefalia</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="rostro">Rostro</label>
                            <p className="centrar-texto">Ovalado</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="cuello">Cuello</label>
                            <p className="centrar-texto">Largo</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="ojos">Ojos</label>
                            <p className="centrar-texto">Ovalado</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="cuerpo">Cuerpo</label>
                            <p className="centrar-texto">Endomorfo</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="labios">Labios</label>
                            <p className="centrar-texto">Gruesos</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="oreja">Orejas</label>
                            <p className="centrar-texto">Verticales</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="nariz">Nariz</label>
                            <p className="centrar-texto">Bonita</p>
                        </div>
                    </div>


                    <a href="#/" onclick="openCity(event, 'cf')" className="subir__btn centrar-texto bold">Siguiente</a>

                </form>
            </div>

            <div id="cf" className="tabcontent">
                <h2 className="titulo__index titulo__index--fs3 centrar-texto">Caracteristicas Fisicas</h2>

                {/**Formulario */}

                <form className="grid__form container--80rem">
                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="piel">Tipo de piel</label>
                            <p className="centrar-texto">Morena</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="cpiel">Color de piel</label>
                            <p className="centrar-texto">Morena</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="pigm">Pigmentacion</label>
                            <p className="centrar-texto">Puntos rojos</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="peso">Peso</label>
                            <p className="centrar-texto">1.68</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="cabello">Cabello</label>
                            <p className="centrar-texto">Ondulado</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="ccabello">Color Cabello</label>
                            <p className="centrar-texto">Negro</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="cojos">Color de ojos</label>
                            <p className="centrar-texto">Verdes</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="clabios">Color de labios</label>
                            <p className="centrar-texto">Rojo intenso</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="cojos">Estatura</label>
                            <p className="centrar-texto">1.67</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="cdientes">Color de dientes</label>
                            <p className="centrar-texto">Amarillos</p>
                        </div>
                    </div>


                    <a href="#/" onClick="openCity(event, 'ir')" className="subir__btn centrar-texto bold">Siguiente</a>
                </form>
            </div>

            <div id="ir" className="tabcontent">
                <h2 className="titulo__index titulo__index--fs3 centrar-texto">Informacion Relevante</h2>

                <div className="container--80rem">
                    <form className="block__form">
                        <p className="centrar-texto">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                        <a href="#/" onClick="openCity(event, 'cf')" className="subir__btn centrar-texto bold">Anterior</a>
                    </form>
                </div>


            </div>

            {/**Comentarios */}


            <section className="comentarios contenedor container--80rem">
                <h3 className="centrar-texto titulo__index titulo__index--fs3">Comentarios</h3>

                {/**Comentario */}

                <ItemComentario
                    urlImage={male}
                    alt="Icono Foto"
                    comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim deserunt voluptatibus ducimus ex eos vel impedit veniam tempore, illo, dolorem asperiores quasi. Quam saepe dolores voluptatem quisquam accusamus esse cum."
                    time="Hace un instante"
                />
                <ItemComentario
                    urlImage={male}
                    alt="Icono Foto"
                    comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim deserunt voluptatibus ducimus ex eos vel impedit veniam tempore, illo, dolorem asperiores quasi. Quam saepe dolores voluptatem quisquam accusamus esse cum."
                    time="Hace un instante"
                />
                <ItemComentario
                    urlImage={male}
                    alt="Icono Foto"
                    comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim deserunt voluptatibus ducimus ex eos vel impedit veniam tempore, illo, dolorem asperiores quasi. Quam saepe dolores voluptatem quisquam accusamus esse cum."
                    time="Hace un instante"
                />
                <ItemComentario
                    urlImage={male}
                    alt="Icono Foto"
                    comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim deserunt voluptatibus ducimus ex eos vel impedit veniam tempore, illo, dolorem asperiores quasi. Quam saepe dolores voluptatem quisquam accusamus esse cum."
                    time="Hace un instante"
                />

            </section>
        </div>
    );
}

export default ItemDesaparecido;