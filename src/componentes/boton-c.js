import React from "react";
import '../hojas de estilo/boton-c.css'


const BotonClear = (props) => (
    <div 
        className='BotonClear' onClick={props.manejarClear}>
        {props.children}
    </div>
)

export default BotonClear