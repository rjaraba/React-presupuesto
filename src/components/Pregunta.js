import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = () => {

    //Definios el state
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    //Aunque el input se defina como "number" lo que viene en el evento es un string y hay que convertirlo a number
    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value));

    }

    //Submit
    const agregarPresupuesto = (e) => {
        e.preventDefault();

        //Validar
        if (cantidad <= 0 || isNaN( cantidad )) {

            guardarError(true);
            return;
        }

        //Si pasa la validación
        guardarError(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error mensaje="El presupuesto es incorrecto"/> : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />

            </form>
        </Fragment>
    )
}

export default Pregunta;