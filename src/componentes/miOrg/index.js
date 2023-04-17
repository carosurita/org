import { useState } from "react"
import "./miorg.css"

const MiOrg = (props) =>{
    //Estado - Hooks : funcionalidades q ayudas a trabajar con el comportamiento de react. 
    //useState(), tiene dos arrays.. cada uno con un valor y una funcion. El primero, el valor inicial y  una funcion que va a ayudar a cambiar el valor del segundo array, y viceversa
        // const [nombreVariable, funciónActualizaEstado] = useState (valorInicial) 
console.log(props)
    const [mostrar,actualizarMostrar] =useState(true);
    /*const manejarClick = ()=>{
        console.log("mostrar/Ocultar elemento");
        actualizarMostrar(!mostrar);
    }*/
    return <section className ="orgSection">
        <h3 className="title">Mi organización </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}


export default MiOrg