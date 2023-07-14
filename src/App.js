import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import './App.css';
import Layout from './components/compartidos/Layout'
import Lista from './components/lista/Lista';
import Modal from './components/compartidos/modal';
import Detalles from './components/nueva/Detalles'
import { Routes, Route } from 'react-router-dom';
import { Contexto } from '../src/components/servicios/Memoria';
import { pedirMetas } from './components/servicios/Pedidos';




function App() {

  const [, enviar] = useContext(Contexto);

  useEffect(()=> {
    async function fetchData() {
    const metas = await pedirMetas();
    enviar({tipo: 'colocar', metas});
    }
    fetchData();
    }, [enviar]);


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

