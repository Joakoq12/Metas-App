
import './App.css';
import Layout from './components/compartidos/Layout'
import Lista from './components/lista/Lista';
import Detalles from './components/nueva/Detalles'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
        

        <Routes>
                <Route path='/' element={<Layout />} >
                 <Route index element={<Lista />} />
                 <Route path='/lista' element={<Lista />} />
                 <Route path='/nueva' element={<Detalles />} />
                </Route>
         { /* <1div className="App">
          
          /*<Encabezado></Encabezado>
        <Principal>
            <Lista></Lista>
            <Detalles></Detalles>
          </Principal>
        <Footer></Footer>
  </div>*/}
   
    </Routes>
  );
}



export default App;

