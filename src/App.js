import './App.css';
import logo1 from './imagenes/osiris.png';
import Boton from './componentes/boton.js';
import BotonClear from './componentes/boton-c.js';
import Pantalla from './componentes/pantalla.js';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
if (input){
  setInput(evaluate(input));
}
  else
    { 
      alert("ingrese valores");
      }
  };

  return (
    <div className='App'>

      <div className='cont-calc'>
      <div className='logo1-cont'>
        <img
          src={logo1}
          className='logo1'
          alt='logo1' />
      </div>

        <Pantalla input ={input}/>

        <div className='fila'>
          <Boton manejarClics={agregarInput}>7</Boton>
          <Boton manejarClics={agregarInput}>8</Boton>
          <Boton manejarClics={agregarInput}>9</Boton>
          <Boton manejarClics={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClics={agregarInput}>7</Boton>
          <Boton manejarClics={agregarInput}>8</Boton>
          <Boton manejarClics={agregarInput}>9</Boton>
          <Boton manejarClics={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClics={agregarInput}>4</Boton>
          <Boton manejarClics={agregarInput}>5</Boton>
          <Boton manejarClics={agregarInput}>6</Boton>
          <Boton manejarClics={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClics={agregarInput}>1</Boton>
          <Boton manejarClics={agregarInput}>2</Boton>
          <Boton manejarClics={agregarInput}>3</Boton>
          <Boton manejarClics={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClics={agregarInput}>0</Boton>
          <Boton manejarClics={agregarInput}>,</Boton>
          <BotonClear manejarClear={()=> setInput('')}>C</BotonClear>
          <Boton manejarClics={calcularResultado}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
