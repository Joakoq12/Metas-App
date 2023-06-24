export async function pedirMetas() {
    const response = await fetch('../servicios/metas.json');
    const metas = await response.json();
    return metas; 
}

