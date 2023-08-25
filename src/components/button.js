import React from 'react';

function Boton({ texto, esBotonDeClic, manejarClic }) {
    return(
        <button onClick={manejarClic} className={esBotonDeClic ? "boton-clic" : "boton-reiniciar" }>{ texto }</button>
    )
}

export default Boton;