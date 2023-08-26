
import './App.css';
import Logo from './img/node.png';
import Boton from './components/button';
import Contador from './components/contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

 const manejarClic = () => {
  setNumClics(numClics+1);
 }
 const reiniciarContador = () => {
  setNumClics(0)
 }

  return (
    <div className="App">
     <div className='logo-cont'>
      <img className='header-logo' src={Logo} alt='Logo of my page'/>
      
     </div>

     <div className='header'>
     <Contador numClics={numClics}/>
     <Boton texto="Click" esBotonDeClic={true} manejarClic={manejarClic}/>
     <Boton texto="Reiniciar" esBotonDeClic={false} manejarClic={reiniciarContador}/>
     
     </div>
    </div>
  );
}

export default App;
