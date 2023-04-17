import "./listaOpciones.css"
//Podemos solucionar esta parte de varias formas, una es con un div > section > option y dentro de cada option va una opción o comovamos a poner abajo

    //en react, cuando recoremos un arreglo no usamos foreach.. 
    //sino Método Map:
    // arreglo.map ( (equipos, index)=> {
        //
        //
   // })
   //recibimos el dato del "equipo " (en este caso), primero representa el primer elemento del arreglo y, cuando termine de hacer lo que le pedimos, representaría el segundo dato del arreglo y asi
   //Como segundo atributo, recibimos el index, o sea, la posición.. 
   //Nosotros podemos retornar cierta información.. en este caso podemos retornar un <option> y nos va a retornar la info . toma el arreglo y a partir de eso, lo transforma y nos devuelve un nuevo arreglo con un dato reformado, por eso es importante el return



const ListaOpciones = (props) => {

    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }
    return <div className="lista-opciones"> 
                <label>Equipos</label>
                <select value= {props.valor} onChange={manejarCambio}>
                    <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
                    {props.equipos.map((equipo, index)=> <option key={index}value={equipo}>{equipo}</option>)}
                </select>
            </div>
}

export default ListaOpciones