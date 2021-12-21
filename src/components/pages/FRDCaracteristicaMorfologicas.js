// Predefined packages
import React, {useState} from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import Modal from '../modals/Modal';






const FRDCaracteristicaMorfologicas = ({
    craneo,
    rostro,
    cuello,
    ojos,
    cuerpo,
    labios,
    oreja,
    nariz,
    handleInputChange,
    className
}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [estadoModal2, cambiarEstadoModal2] = useState(false);
    const [estadoModal3, cambiarEstadoModal3] = useState(false);
    const [estadoModal4, cambiarEstadoModal4] = useState(false);
    const [estadoModal5, cambiarEstadoModal5] = useState(false);

    return (
        <div id="cm" className={`tabcontent ${className}`}>
            <h2 className="titulo__index titulo__index--fs3 centrar-texto">Características Morfológicas</h2>


            <div className="input-group">
                <div className="input">
                    <div className="flex">
                        <label className="label bold" htmlFor="craneo">Craneo</label>
                        <svg onClick={()=> cambiarEstadoModal1(!estadoModal1)} className="help" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-question-fill" viewBox="0 0 16 16">
                            <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"/>
                        </svg>
                    </div> 
                    <select {...register("craneo", { required: true })}
                        type="text"
                        name="craneo"
                        id="craneo"
                        value={craneo}
                        className="input-style"
                        onChange={handleInputChange}
                        
                    >
                        <option value="">--Seleccione el craneo--</option>
                        <option value="Dolicocefalico" >Dolicocefalico</option>
                        <option value="Braquicefalo" >Braquicefalo</option>
                        <option value="Mesocefalo" >Mesocefalo</option>

                    </select>

                    {errors.craneo && "Este campo es requerido"}

                    <Modal
                        estado={estadoModal1}
                        cambiarEstado={cambiarEstadoModal1}
                        titulo="Craneo">
                        <Contenido>
                            <h1>Tipos de craneos</h1>
                            <div className="grid">
                                <div className='flex__col'>
                                    <p>Dolicocefalia</p>
                                    <p className='height__p'>Se caracteriza por ser largo en su longitud, y se ve aumentada por lo estrecho de las sienes, , el rostro se ve más alargado y delgado.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Braquicéfalo</p>
                                    <p className='height__p'>Se caracteriza por ser redondo, de longitud más corto, sienes más abultadas, vista de perfil la zona occipital se ve plana, el rostro se ve más ancho y pequeño.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Mesocéfalo</p>
                                    <p className='height__p'>Tienen proporcionados sus diámetros vertical y transverso con maxilares y arcadas dentarias de configuración facial normal. De perfil tiene una curva normal. </p>
                                </div>
                            </div>
                            <Boton onClick={()=> cambiarEstadoModal1(!estadoModal1)}>Cerrar</Boton>
                        </Contenido>
                    </Modal>
                </div>

                <div className="input">
                    <div className="flex">
                            <label className="label bold" htmlFor="craneo">Rostro</label>
                            <svg onClick={()=> cambiarEstadoModal2(!estadoModal2)} className="help" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-question-fill" viewBox="0 0 16 16">
                                <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"/>
                            </svg>
                    </div> 
                    <select
                        type="text"
                        name="rostro"
                        id="rostro"
                        value={rostro}
                        className="input-style"
                        onChange={handleInputChange}
                        
                    >
                        <option>--Seleccione el rostro--</option>
                        <option value="Redondo">Redondo</option>
                        <option value="Ovalado">Ovalado</option>
                        <option value="Cuadrado">Cuadrado</option>
                        <option value="Rectangular">Rectangular</option>
                        <option value="Hexagonal">Hexagonal</option>
                        <option value="Triangular">Triangular</option>
                        <option value="Triangular invertido">Triangular invertido</option>
                    </select>

                    <Modal
                        estado={estadoModal2}
                        cambiarEstado={cambiarEstadoModal2}
                        titulo="Rostro">
                        <Contenido>
                            <h1>Tipos de rostros</h1>
                            <div className="grid grid__cols5">
                                <div className='flex__col'>
                                    <p>Redondo</p>
                                    <p className='height__p'>Este tipo de rostro se caracteriza por tener aproximadamente la misma altura que anchura.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Ovalado</p>
                                    <p className='height__p'>El rostro ovalado es considerado como la forma de rostro más armonioso y favorecedor en general pero especialmente en el sexo femenino.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Cuadrado</p>
                                    <p className='height__p'>El rostro cuadrado se caracteriza por una forma de cara muy angulosa y de rasgos marcados.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Rectangular</p>
                                    <p className='height__p'>Podemos considerar el tipo de rostro rectangular o alargado como la versión cuadrada del rostro ovalado.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Hexagonal</p>
                                    <p className='height__p'>El rostro de forma hexagonal, también llamado de forma de diamante.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Triangular</p>
                                    <p className='height__p'>El rostro triangular se caracteriza por una mandíbula amplia y una frente estrecha en comparación, con los pómulos en una situación intermedia.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Triangulo Invertido</p>
                                    <p className='height__p'>El rostro en forma de corazón, también llamado triángulo invertido, se caracteriza por tener unos pómulos más anchos que la mandíbula pero esta menos que la frente.</p>
                                </div>

                                
                            </div>
                            <Boton onClick={()=> cambiarEstadoModal1(!estadoModal2)}>Cerrar</Boton>
                        </Contenido>
                    </Modal>
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="cuello">Cuello</label>
                    <select
                        type="text"
                        name="cuello"
                        id="cuello"
                        value={cuello}
                        className="input-style"
                        onChange={handleInputChange}
                        
                    >
                        <option>--Seleccione el cuello--</option>
                        <option value="Largo">Largo</option>
                        <option value="Corto">Lorto</option>
                        <option value="Grueso">Grueso</option>
                        <option value="Delgado">Delgado</option>
                    </select>
                </div>

                <div className="input">
                    <div className="flex">
                        <label className="label bold" htmlFor="craneo">Ojos</label>
                        <svg onClick={()=> cambiarEstadoModal3(!estadoModal3)} className="help" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-question-fill" viewBox="0 0 16 16">
                            <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"/>
                        </svg>
                    </div> 
                    <select
                        type="text"
                        name="ojos"
                        id="ojos"
                        value={ojos}
                        className="input-style"
                        onChange={handleInputChange}
                        
                    >
                        <option>--Seleccione los ojos--</option>
                        <option value="Almendrados" >Almendrados</option>
                        <option value="Juntos" >Juntos</option>
                        <option value="Hundidos" >Hundidos</option>
                        <option value="Prominentes" >Prominentes</option>
                        <option value="Asiaticos" >Asiaticos</option>
                        <option value="Caidos" >Caidos</option>
                        <option value="Apartados" >Apartados</option>
                    </select>

                    <Modal
                        estado={estadoModal3}
                        cambiarEstado={cambiarEstadoModal3}
                        titulo="Ojos">
                        <Contenido>
                            <h1>Tipos de ojos</h1>
                            <div className="grid grid__cols5">
                                <div className='flex__col'>
                                    <p>Almendrados</p>
                                    <p className='height__p'>Se trata del tipo de ojos más común. Tal como su nombre apunta, tienen una forma similar a una almendra.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Juntos</p>
                                    <p className='height__p'>Este tipo de ojos se caracterizan porque la distancia entre ellos es más pequeña que la estándar, ya que suele ser menor a la extensión de un ojo.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Hundidos</p>
                                    <p className='height__p'>Estos ojos se caracterizan porque el párpado tiene tendencia a ser más prominente en el borde externo que en el interno.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Saltones</p>
                                    <p className='height__p'>Es justo lo contrario a lo anterior, caracterizándose por un abultamiento o elevación con respecto al interior de los ojos.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Asiáticos</p>
                                    <p className='height__p'>Los ojos que pertenecen a este tipo son más pequeños que la media y muy fáciles de reconocer.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Caídos</p>
                                    <p className='height__p'>Los ojos caídos tienen esta apariencia cuando el párpado móvil parece ejercer peso sobre el ojo estando abierto. </p>
                                </div>

                                <div className='flex__col'>
                                    <p>Apartados</p>
                                    <p className='height__p'>Son fáciles de reconocer ya que son opuestos a los ojos estrechos o juntos.</p>
                                </div>

                                
                            </div>
                            <Boton onClick={()=> cambiarEstadoModal1(!estadoModal3)}>Cerrar</Boton>
                        </Contenido>
                    </Modal>
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <div className="flex">
                        <label className="label bold" htmlFor="craneo">Cuerpo</label>
                        <svg onClick={()=> cambiarEstadoModal4(!estadoModal4)} className="help" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-question-fill" viewBox="0 0 16 16">
                            <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"/>
                        </svg>
                    </div> 
                    <select
                        type="text"
                        name="cuerpo"
                        id="cuerpo"
                        value={cuerpo}
                        className="input-style"
                        onChange={handleInputChange}
                        
                    >
                        <option>--Seleccione el cuerpo--</option>
                        <option value="Ectomorfo" >Ectomorfo</option>
                        <option value="Endomorfo" >Endomorfo</option>
                        <option value="Mesomorfo" >Mesomorfo</option>
                    </select>

                    <Modal
                        estado={estadoModal4}
                        cambiarEstado={cambiarEstadoModal4}
                        titulo="Cuerpo">
                        <Contenido>
                            <h1>Tipos de cuerpos</h1>
                            <div className="grid">
                                <div className='flex__col'>
                                    <p>Ectomorfo</p>
                                    <p className='height__p'>Una persona de cuerpo ectomorfo es alguien que acumula poca grasa. Así mismo, su estructura ósea no suele ser muy gruesa, lo que no necesariamente implica que sean individuos de huesos débiles.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Endomorfo</p>
                                    <p className='height__p'>Tienen la tendencia de acumular grasas en sus tejidos y al contrario de lo que ocurre con los ectomorfos. Toda su anatomía es más ancha, empezando por la estructura esquelética.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Mesomorfo</p>
                                    <p className='height__p'>Genéticamente se les considera como el cuerpo ideal, lo que no necesariamente implica que se trate de personas más sanas.</p>
                                </div>
                                
                            </div>
                            <Boton onClick={()=> cambiarEstadoModal1(!estadoModal4)}>Cerrar</Boton>
                        </Contenido>
                    </Modal>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="labios">Labios</label>
                    <select
                        type="text"
                        name="labios"
                        id="labios"
                        value={labios}
                        className="input-style"
                        onChange={handleInputChange}
                        
                    >
                        <option>--Seleccione los labios--</option>
                        <option value="Delgados" >Delgados</option>
                        <option value="Gruesos" >Gruesos</option>
                        <option value="Labio superior pronunciado" >Labio superior pronunciado</option>
                        <option value="Labio inferior diferente" >Labio inferior diferente</option>
                        <option value="En forma de arco" >En forma de arco</option>
                        <option value="Arco de cupido indefinido" >Arco de cupido indefinido</option>
                        <option value="Grosor medio" >Grosor medio</option>
                        <option value="Estirados o anchos" >Estirados o anchos</option>
                        <option value="Gruesos al centro" >Gruesos al centro</option>
                        <option value="Direccionados hacia abajo" >Direccionados hacia abajo</option>
                    </select>
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="oreja">Orejas</label>
                    <select
                        type="text"
                        name="oreja"
                        id="oreja"
                        value={oreja}
                        className="input-style"
                        onChange={handleInputChange}
                        
                    >
                        <option>--Seleccione las orejas--</option>
                        <option value="Largas" >Largas</option>
                        <option value="Pequeñas" >Pequeñas</option>
                        <option value="Tamaño medio" >Tamaño medio</option>
                        <option value="Hacia afuera" >Hacia afuera</option>
                        <option value="En punta" >En punta</option>
                        <option value="Inclinadas" >Inclinadas</option>
                        <option value="Lobulos grandes" >Lobulos grandes</option>
                        <option value="Helice grande" >Helice grande</option>
                        <option value="Asa" >Asa</option>
                        <option value="Verticales" >Verticales</option>
                    </select>
                </div>

                <div className="input">
                    <div className="flex">
                        <label className="label bold" htmlFor="craneo">Nariz</label>
                        <svg onClick={()=> cambiarEstadoModal5(!estadoModal5)} className="help" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-question-fill" viewBox="0 0 16 16">
                            <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"/>
                        </svg>
                    </div> 
                    <select
                        type="text"
                        name="nariz"
                        id="nariz"
                        value={nariz}
                        className="input-style"
                        onChange={handleInputChange}
                        
                    >
                        <option>--Seleccione la nariz--</option>
                        <option value="Aguileña">Aguileña</option>
                        <option value="Griega">Griega</option>
                        <option value="Nubia">Nubia</option>
                        <option value="Chata">Chata</option>
                        <option value="Respingada">Respingada</option>
                        <option value="Bulbosa">Bulbosa</option>
                    </select>

                    <Modal
                        estado={estadoModal5}
                        cambiarEstado={cambiarEstadoModal5}
                        titulo="Rostro">
                        <Contenido>
                            <h1>Tipos de nariz</h1>
                            <div className="grid grid__cols5">
                                <div className='flex__col'>
                                    <p>Aguileña</p>
                                    <p className='height__p'>Es un tipo de nariz que se caracteriza por tener un tabique muy pronunciado que se curva hacia la punta.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Griega</p>
                                    <p className='height__p'>A este tipo de nariz también se la denomina nariz recta, ya que el puente que tiene es completamente recto.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Nubia</p>
                                    <p className='height__p'>A este tipo de nariz también se la denomina nariz recta, ya que el puente que tiene es completamente recto.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Chata</p>
                                    <p className='height__p'>Se trata de esas narices que son delgadas y con la punta muy plana. De hecho, si la ponemos de perfil está hundida en la cara, casi no tiene puente nasal.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Respingada</p>
                                    <p className='height__p'>La nariz respingada tiene una punta sobresaliente que se va aguzando. El tabique suele ser recto, aunque se curva un poco hacia el final.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Bulbosa</p>
                                    <p className='height__p'>Esta nariz se caracteriza por ser muy redonda y tener la punta en forma de ''bola''.</p>
                                </div>

                                <div className='flex__col'>
                                    <p>Desigual</p>
                                    <p className='height__p'>Este tipo de nariz está marcado por su contorno desigual, uno de los dos lados de la nariz es diferente al otro.</p>
                                </div>

                                
                            </div>
                            <Boton onClick={()=> cambiarEstadoModal1(!estadoModal5)}>Cerrar</Boton>
                        </Contenido>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default FRDCaracteristicaMorfologicas;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;