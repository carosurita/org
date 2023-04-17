import "./equipo.css"
import Colaborador from "../colaborador/colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo =(props) =>{

    //Destructuracion:
    /* */
    const {colorPrimario, colorSecundario,titulo,id} = props.datos  //es igual a que haga const colorPrimario = props.datos.colorPrimario
    const {colaboradores, eliminarColaborador , actualizarColor, like}=props
      //backgroundColor:props.datos.colorSecundario,
    const obj = { backgroundColor:hexToRgba(colorPrimario, 0.5)}
    

    const estituloTitulo= {borderColor:colorPrimario}
    

    return <> { colaboradores.length > 0 &&
    <section className="equipo" style={obj}>
        <input 
            className="input-color"
            type="color"
            value={colorPrimario}
            onChange={(evento)=>{
                actualizarColor(evento.target.value, id)
            }}

        
        />
        <h3 style={estituloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {//se pasa como segundo parametro a index y se cambia colaborador.nombre x index en key, porque puede pasar que varios colaboradores tengan el mismo nombre. esto hace que lo ponga por posición, por su lugar en el index
                colaboradores.map((colaborador,index)=><Colaborador 
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />)
            }
            
        </div>
    </section>
}
</>
}

export default Equipo