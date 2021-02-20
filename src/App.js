import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {

  //Definir el state
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarpregunta, actualizarPregunta ] = useState(true);
  const [gastos, guardarGastos] = useState([]);

  //Función que se ejecutará cuando agreguemos un nuevo gasto
  const agregarNuevoGasto = gasto => {
      guardarGastos([
        ...gastos,       //Coge una copia de los gastos previos y agrega un nuevo gasto
        gasto
      ])
  }

  return (
    <div className="container">
      <header>
          <h1>Gasto semanal</h1>
          <div className="contenido-principal contenido">
            { mostrarpregunta ?
              ( 
                <Pregunta 
                  guardarPresupuesto={guardarPresupuesto} 
                  guardarRestante={guardarRestante}
                  actualizarPregunta={actualizarPregunta}
                /> 
              ) :
              (
                <div className="row">
                  <div className="one-half column">
                    <Formulario 
                      agregarNuevoGasto={agregarNuevoGasto}
                    />
                  </div>
                  <div className="one-half column">
                    2
                  </div>
                </div>
              )
            }
          </div>

          
      </header>
    </div>
  );
}

export default App;
