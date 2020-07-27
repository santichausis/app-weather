import React from 'react';

const Clima = ({resultado}) => {

    // Extraer los valores
    const { name, main } = resultado;

    if(!name) return null;

    // Grados Kelvin
    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col">
            <div className="black-text">
                 <h2>El clima de {name} es:</h2>
                 <p className="temperatura">
                     { parseFloat(main.temp - kelvin, 10).toFixed(0)}
                     <span>&#x2103;</span>
                 </p>
                 <h3>Sensación términa:</h3>
                 <p>
                     { parseFloat(main.feels_like - kelvin, 10).toFixed(0)}
                     <span>&#x2103;</span>
                 </p>
                 <h3>La temperatura mínima es:</h3>
                 <p>
                     { parseFloat(main.temp_min - kelvin, 10).toFixed(0)}
                     <span>&#x2103;</span>
                 </p>
            </div>
        </div>
     );
}
 
export default Clima;