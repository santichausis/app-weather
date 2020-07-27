import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'
import Error from './components/Error'

function App() {

  //  State del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad:'',
    pais:''
  })

  const [consultar, guardarConsultar ] = useState(false)
  const [resultado, guardarResultado ] = useState({})
  const [error, guardarError] = useState(false)
  const  { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {

      if(consultar) {
        const appID = 'fd44f30810a50022a520784702c1ec9b'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${appID}`
  
        const respuesta = await fetch(url)
        const resultado = await respuesta.json();
  
        guardarResultado(resultado)
        guardarConsultar(false)

        // Detecta si hubo resultados correctos en la consulta

        if(resultado.cod === "404") {
          guardarError(true)
        } else {
          guardarError(false)
        }
      }
    }
    consultarAPI()
  // eslint-disable-next-line
  }, [consultar]);

  let componente;
  if(error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima
    resultado={resultado}
    />
  }


  return (
    <Fragment>
      <Header title='Clima React App'></Header>
      <div className="contenedor-form">
        <div className="row">
          <div className="col m6 s12">
            <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
            ></Formulario>
          </div>
          <div className="col m6 s12">
            {componente}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
