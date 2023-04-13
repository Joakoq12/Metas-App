
import estilos from '../compartidos/encabezado.module.css';
import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as Perfil } from '../img/icono.svg';
import Vinculo from './vinculo';



function Encabezamiento() {
  return (

    <header className={estilos.header}>
      <div className={estilos.contenedor} >
        <Logo className={estilos.logo} />
        <a href='/' className={estilos.titulo}>Metas App</a>
      </div>

      <nav >
        <Vinculo
          to='/perfil'
          Icono={Perfil} />


      </nav>
    </header>

  );
}

export default Encabezamiento;