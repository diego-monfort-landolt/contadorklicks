
import './App.css';
import Logo from './img/node.png';
import Boton from './components/button';

function App() {


 const manejarClic = () => {
  alert('Hola Diego')
 }
 const reiniciarContador = () => {
  alert('Hola Andrea')
 }

  return (
    <div className="App">
     <div className='logo-cont'>
      <img className='header-logo' src={Logo} alt='Logo of my page'/>
     </div>

     <div className='header'>
     <Boton texto="Reiniciar" esBotonDeClic={true} manejarClic={manejarClic}/>
     <Boton texto="Click" esBotonDeClic={false} manejarClic={reiniciarContador}/>
     </div>
    </div>
  );
}

export default App;
