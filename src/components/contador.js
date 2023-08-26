import React from "react";
import './contador.css';


function Contador({ numClics }) {
    return(
        <div className="contandor">
                {numClics}
        </div>

    );
}

export default Contador;