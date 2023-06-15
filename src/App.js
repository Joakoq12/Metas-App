
import './App.css';
import Layout from './components/compartidos/Layout'
import Lista from './components/lista/Lista';
import Modal from './components/compartidos/modal';
import Detalles from './components/nueva/Detalles'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (



    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Lista />} />
        <Route path='/lista' element={<Lista />} >
          <Route path='/lista/:id' element={<Modal>
            <Detalles>
            </Detalles>
          </Modal>} />
        </Route>
        <Route path='/nueva' element={<Detalles />} />
      </Route>

    </Routes>
  );
}



export default App;

