// Predefined packages
import React from 'react';

// Custom packages

const FRDCaracteristicasFisicas = ({
    piel,
    cpiel,
    pigm,
    peso,
    cabello,
    ccabello,
    cojos,
    clabios,
    estatura,
    cdientes,
    handleInputChange,
    className
}) => {

    return (
        <div id="cf" className={`tabcontent ${className}`}>
            <h2 className="titulo__index titulo__index--fs3 centrar-texto">Características Físicas</h2>


            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="piel">Tipo de piel</label>
                    <select
                        type="text"
                        name="piel"
                        id="piel"
                        value={piel}
                        className="input-style"
                        data-cy="piel-select"
                        onChange={handleInputChange}
                        
                    >
                        <option>--Seleccione la piel--</option>
                        <option value="Muy clara" >Muy clara</option>
                        <option value="Clara" >Clara</option>
                        <option value="Intermedia" >Intermedia</option>
                        <option value="Oscura" >Oscura</option>
                        <option value="Muy oscura" >Muy oscura</option>
                    </select>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="cpiel">Color de piel</label>
                    <select
                        type="text"
                        name="cpiel"
                        id="cpiel"
                        value={cpiel}
                        className="input-style"
                        data-cy="cpiel-select"
                        onChange={handleInputChange}
                        
                    >
                        <option>--Seleccione el color de piel--</option>
                        <option value="Blanca" >Blanca</option>
                        <option value="Palida" >Palida</option>
                        <option value="Carne" >Carne</option>
                        <option value="Vainilla" >Vainilla</option>
                        <option value="Beige" >Beige</option>
                        <option value="Crema" >Crema</option>
                        <option value="Durazno" >Durazno</option>
                        <option value="Bronce" >Bronce</option>
                        <option value="Trigueña" >Trigueña</option>
                        <option value="Cobriza" >Cobriza</option>
                        <option value="Marrón" >Marrón</option>
                        <option value="Café" >Café</option>
                        <option value="Canela" >Canela</option>
                        <option value="Morena" >Morena</option>
                        <option value="Negra" >Negra</option>
                        <option value="Ébano" >Ébano</option>
                    </select>
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="pigm">Pigmentacion</label>
                    <select
                        type="text"
                        name="pigm"
                        id="pigm"
                        value={pigm}
                        className="input-style"
                        data-cy="pig-select"
                        onChange={handleInputChange}
                        
                    >
                        <option>--Seleccione la pigmentacion--</option>
                        <option value="Pecas" >Pecas</option>
                        <option value="Manchas" >Manchas</option>
                        <option value="Arrugas" >Arrugas</option>
                        <option value="Lunares" >Lunares</option>
                        <option value="Verrugas" >Verrugas</option>
                    </select>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="peso">Peso</label>
                    <input
                        type="number"
                        name="peso"
                        id="peso"
                        value={peso}
                        className="input-style"
                        data-cy="peso-input"
                        onChange={handleInputChange}
                        
                    />
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="cabello">Cabello</label>
                    <select
                        type="text"
                        name="cabello"
                        id="cabello"
                        value={cabello}
                        className="input-style"
                        data-cy="cabello-select"
                        onChange={handleInputChange}
                        
                    >
                        <option>--Seleccione el cabello--</option>
                        <option value="Lacio" >Lacio</option>
                        <option value="Ondulado" >Ondulado</option>
                        <option value="Rizado" >Rizado</option>
                        <option value="Crespo" >Crespo</option>
                    </select>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="ccabello">Color Cabello</label>
                    <select
                        type="text"
                        name="ccabello"
                        id="ccabello"
                        value={ccabello}
                        className="input-style"
                        data-cy="ccabello-input"
                        onChange={handleInputChange}
                        
                    >
                        <option>--Seleccione el color del cabello--</option>
                        <option value="Negro" >Negro</option>
                        <option value="Castaño oscuro" >Castaño oscuro</option>
                        <option value="Castaño claro" >Castaño claro</option>
                        <option value="Rubio claro" >Rubio claro</option>
                        <option value="Rubio intermedio" >Rubio intermedio</option>
                        <option value="Rubio oscuro" >Rubio oscuro</option>
                    </select>
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="cojos">Color de ojos</label>
                    <select
                        type="text"
                        name="cojos"
                        id="cojos"
                        value={cojos}
                        className="input-style"
                        data-cy="cojos-select"
                        onChange={handleInputChange}
                        
                    >
                        <option>--Seleccione el color de ojos--</option>
                        <option value="Cafés muy oscuros" >Cafés muy oscuros</option>
                        <option value="Cafés oscuros" >Cafés oscuros</option>
                        <option value="Miel" >Miel</option>
                        <option value="Azules claros" >Azules claros</option>
                        <option value="Azules oscuros" >Azules oscuros</option>
                        <option value="Verdes" >Verdes</option>
                        <option value="Grises" >Grises</option>
                        <option value="Azules" >Azules</option>
                    </select>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="clabios">Color de labios</label>
                    <select
                        type="text"
                        name="clabios"
                        id="clabios"
                        value={clabios}
                        className="input-style"
                        data-cy="clabios-select"
                        onChange={handleInputChange}
                        
                    >
                        <option>--Seleccione el color de labios--</option>
                        <option value="Rojo intenso" >Rojo</option>
                        <option value="Rosados claros" >Rosados claros</option>
                        <option value="Rosados intermedio" >Rosados intermedio</option>
                        <option value="Rosados oscuros" >Rosados oscuros</option>
                        <option value="Cafés claros" >Cafés claros</option>
                        <option value="Cafés oscuros" >Cafés oscuros</option>
                        <option value="Cafés muy oscuros" >Cafés muy oscuros</option>
                    </select>
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="estatura">Estatura</label>
                    <input
                        type="number"
                        name="estatura"
                        id="estatura"
                        value={estatura}
                        className="input-style"
                        data-cy="estatura-input"
                        onChange={handleInputChange}
                        
                    />
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="cdientes">Color de dientes</label>
                    <select
                        type="text"
                        name="cdientes"
                        id="cdientes"
                        value={cdientes}
                        className="input-style"
                        data-cy="cdientes-select"
                        onChange={handleInputChange}
                        
                    >
                        <option>--Seleccione el color de dientes--</option>
                        <option value="Blancos">Blancos</option>
                        <option value="Amarillos blancosos">Amarillos blancosos</option>
                        <option value="Amarillos">Amarillos</option>
                        <option value="Negros">Negros</option>
                        <option value="Sin dientes">Sin dientes</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FRDCaracteristicasFisicas;