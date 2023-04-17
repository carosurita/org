import { useState } from "react"
import "./formulario.css"

import ListaOpciones from "../../listaOpciones/listaOpciones.js"
import Boton from "../boton/boton.js"
import CampoFormulario from "../campoFormulario/index.js"

const Formulario = (props) => {
    //dentro del evento, hay un metodo preventDefalt que va a evitar el comportamiento normal, en este caso que se actualice al clickar
    //el evento se puede expresar como evento, event, e
   const [nombre, actualizarNombre] = useState("");
   const [puesto, actualizarPuesto] = useState("");
   const [foto, actualizarFoto] = useState("");
   const [equipo, actualizarEquipo] = useState("");
   const [titulo, actualizarTitulo] = useState("");
   const [color, actualizarColor] =useState("");
   const {registrarColaborador, crearEquipo} =props
    
    const manejarEnvio = (evento)=>{
        evento.preventDefault()
        console.log("manejar el envio")    
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        }
        registrarColaborador(datosAEnviar)
    }
    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
           <h2>Rellena el formulario para crear un colaborador</h2> 
           <CampoFormulario
                titulo="Nombre" 
                placeholder="Introduzca el nombre"
                required 
                valor={nombre} 
                actualizarValor= {actualizarNombre}/>
           <CampoFormulario
                titulo="Puesto" 
                placeholder="Introduzca el puesto"
                required 
                valor={puesto} 
                actualizarValor= {actualizarPuesto}/>
           <CampoFormulario
                titulo="Foto" 
                placeholder="Introduzca la url de la imagen" 
                required 
                valor={foto} 
                actualizarValor= {actualizarFoto}
                type= "foto"
                />
           <ListaOpciones 
                titulo="Equipos " 
                required
                valor={equipo}
                actualizarEquipo= {actualizarEquipo}
                equipos={props.equipos}

                />
           <Boton>
               Crear
           </Boton>
        </form>
        <form onSubmit={ manejarNuevoEquipo}>
           <h2>Rellena el formulario para crear el equipo</h2> 
           <CampoFormulario
                titulo="Titulo" 
                placeholder="Introduzca el nombre del equipo"
                required 
                valor={titulo} 
                actualizarValor= {actualizarTitulo}/>
           <CampoFormulario
                titulo="Color" 
                placeholder="Ingresar el color en Hexadecimal"
                required 
                valor={color} 
                actualizarValor= {actualizarColor}
                type= "color"
                />

            <Boton>
               Registrar equipo
            </Boton>
        </form>
    </section>
}

export default Formulario