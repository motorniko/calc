import './App.css';
import logo1 from './imagenes/osiris.png';
import Boton from './componentes/boton.js';

function App() {
  return (
    <div className='App'>
      <div className='logo1-cont'>
        <img
          src={logo1}
          className='logo1'
          alt='logo1' />
      </div>

      <div className='cont-calc'>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>x</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>x</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>0</Boton>
          <Boton>,</Boton>
          <Boton>=</Boton>
          <Boton>%</Boton>
        </div>





      </div>
    </div>
  );
}

export default App;
