import React from 'react';
import './button.css';

function Boton({ texto, esBotonDeClic, manejarClic }) {
    return(
        <button onClick={manejarClic} className={esBotonDeClic ? "boton-clic" : "boton-reiniciar" }>{ texto }</button>
    )
}

export default Boton;