
import './App.css';
import Encabezado from './components/compartidos/encabezado'
import Principal from './components/compartidos/principal'
import Footer from './components/compartidos/pie';
import Meta from './components/lista/Meta';
import Lista from './components/lista/Lista';
import Detalles from './components/nueva/Detalles'

function App() {
  return (
    <div className="App">
        
        <Encabezado></Encabezado>
        <Principal>
            {/*<Lista></Lista>*/}
            <Detalles></Detalles>
          </Principal>
        <Footer></Footer>
       
    </div>
  );
}



export default App;

