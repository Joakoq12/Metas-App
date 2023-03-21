
import '../compartidos/header.css';
import {ReactComponent as Logo} from '../img/logo.svg';
import {ReactComponent as Perfil} from '../img/icono.svg';


   
function Encabezamiento() {
  return (

  <header className='header  '>
    <div className="contenedor" > 
       <Logo className='icono'/>
       <a href='/' className='titulo'>Metas App</a>
    </div>
  
  <nav >
    <a href='/perfil' className='vinculo'> 
         <Perfil className='icono'></Perfil>
</a>
  </nav>
  </header>
  
  );
}

export default Encabezamiento;