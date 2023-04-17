import { useState } from "react";
import "../campoFormulario/campoFormulario.css"

//input controlado, empezamos a controlar como funcionan los inputs. vinculamos los inputs con el estado/valor
const CampoFormulario = (props) =>{
    //const [valor, setValor ] = useState (" ")
    const placeholderModificado= `${props.placeholder}...`;

    //destructuracion
    const {type ="text"} = props

    const manejarCambio = (e)=>{
        props.actualizarValor(e.target.value)
    }
    
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado}
            required ={props.required} 
            value={props.valor}
            onChange = {manejarCambio} //es un evento de los inputs. cada vez que el usuario incerte un valor en el input, se va a largar ONCHANGE. pERO LO TENGO QUE VINCULAR CON UNA FUNCIÓN
            type={type}
        />
    </div>
}

export default CampoFormulario