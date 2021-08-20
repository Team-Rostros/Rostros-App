// Predefined packages
import React from 'react';

// Assets
import underconstruction from '../../img/underconstruction.png';

const Maintenance = () => {
    return (
        <div className="layout__grid--maintenance">
            <div className="grid__texto">
                <p className="texto__azul texto__azul--grande">Oops! </p>
                <p className="texto__azul">En construcción</p>

                <div className="grid__contain--text">
                    <p className="texto__negro">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsa perspiciatis aperiam dolor? Reprehenderit architecto tenetur aliquid eos officiis sapiente.</p>
                </div>


            </div>

            <div className="grid__imagen">
                <img className="imagen__mantenimiento" src={underconstruction} alt="En Mantenimiento" />
            </div>
        </div>
    );
}

export default Maintenance;