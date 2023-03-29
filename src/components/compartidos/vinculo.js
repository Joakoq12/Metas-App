import estilos from './vinculo.module.css'

function Vinculo({Icono, text, href}) {
    return ( 
        <a href={href} className={estilos.vinculo}>
             
             <Icono className={estilos.icono}></Icono>
             {text && <span className={estilos.texto}>{text}</span> }
        </a>


    );
}

export default Vinculo;