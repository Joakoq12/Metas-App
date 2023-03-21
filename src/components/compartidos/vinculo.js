

function Vinculo({children, text, href}) {
    return ( 
        <a href={href} className='vinculo'>
             
             {children}
             <span>{text}</span>
        </a>


    );
}

export default Vinculo;