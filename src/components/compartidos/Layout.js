import Encabezado from './encabezado'
import Principal from './principal'
import Footer from './pie';
import { Outlet } from 'react-router-dom';
/*import Meta from './components/lista/Meta';
/*import Lista from './components/lista/Lista';
import Detalles from './components/nueva/Detalles'*/


function Layout() {
    return (
          
        <>
          
        <Encabezado></Encabezado>
      <Principal>
          <Outlet></Outlet>
        </Principal>
      <Footer></Footer>
      </>
    )
 }

export default Layout ;