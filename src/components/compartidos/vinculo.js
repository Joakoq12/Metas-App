import { Link } from 'react-router-dom';
import estilos from './vinculo.module.css'

function Vinculo({Icono, text, to}) {
    return ( 
       
       
       <Link  to={to} className={estilos.vinculo}>
       
       
             
             <Icono className={estilos.icono}></Icono>
             {text && <span className={estilos.texto}>{text}</span> }
        
        </Link>


    );
}

export default Vinculo;