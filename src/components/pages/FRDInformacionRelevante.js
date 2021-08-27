import React from 'react';

const FRDInformacionRelevante = ({
    descripcion,
    handleInputChange
}) => {

    return (
        <div id="ir" className="tabcontent">
            <h2 className="titulo__index titulo__index--fs3 centrar-texto">Información Relevante</h2>

            <div className="container--80rem">

                <textarea
                    name="descripcion"
                    value={descripcion}
                    className="description__ir"
                    placeholder="Puedes describir:
    
                            Señales particulares: Cicatrices, lunares, tatuajes, antecedentes quirúrgicos
                            (si lo tiene,  es deseable que aparezcan registrados en historia clínica), fracturas
                            (si se tienen,  es deseable aportar radiografías), deformidades, entre otras.
                            Es importante describir sin son visibles o no, si las tiene y si no las tiene.
                            
                            Prendas de vestir y pertenencias que portaba al momento de la 
                            desaparición: Talla, marca, estado de las prendas, descripción general de las prendas
                            y pertenencias."
                    onChange={handleInputChange}
                ></textarea>

                <input
                    type="submit"
                    className="subir__btn centrar-texto bold"
                />

            </div>
        </div>
    );
}

export default FRDInformacionRelevante;