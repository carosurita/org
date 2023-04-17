import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/formulario/formulario.js';
import MiOrg from './componentes/miOrg';
import Equipo from './componentes/equipo/equipo';
import Footer from './componentes/footer/footer';



function App() {
  const [mostrarFormulario, actualizarMostrar ] = useState (false);
  const [colaboradores, actulizarColaboradores] =useState([
    {
      id:uuid(),
      equipo: "Front-End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland",
      puesto: "Tutor",
      fav:true,
  },
  {
    id:uuid(),
    equipo: "Data Science",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:false,
  },

])
const [equipos, actualizarEquipos] = useState ([
  {
    titulo:"Programación",
    colorPrimario:"#57c278",
    colorSecundario:"#D9F7E9"
  },
  {
    id:uuid(),
    titulo:"Front-End",
    colorPrimario:"#82CFFA",
    colorSecundario:"#E8F8FF"
  },
  {
    id:uuid(),
    titulo:"Data Science",
    colorPrimario:"#A6D157",
    colorSecundario:"#F0F8E2"
  },
  {
    id:uuid(),
    titulo:"Devops",
    colorPrimario:"#E06B69",
    colorSecundario:"#FDE7E8"
  },
  {
    id:uuid(),
    titulo:"Ux y Diseño",
    colorPrimario:"#DB6EBF",
    colorSecundario:"#FAE9F5"
  },
  {
    id:uuid(),
    titulo:"Móvil",
    colorPrimario:"#FFBA05",
    colorSecundario:"#FFF5D9"
  },
  {
    id:uuid(),
    titulo:"Innovación y Gestión",
    colorPrimario:"#FF8A29",
    colorSecundario:"#FFEEDF"
  }
])

  //Ternarip --> condicion ? (si la condición es verdadera) seMuestra :(y si no) noSeMuestra 

  //  cortocircuito: podemos convertir el concepto de ternario en cortocircuito y achicar el codigo. Esto es 
    // condicion && seMuestra .. no necesito tener algo que sea como else.. quedaria {mostrarFormulario && <Formulario/>}
  const cambiarMostrar = ()=> {
    actualizarMostrar(!mostrarFormulario);
  }
  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
      console.log("nuevo colaborador ", colaborador)
      //Spread operator, copia de los valores actuales a los que se les agrega uno nuevo
      actulizarColaboradores([
        ...colaboradores, colaborador
      ])
  }

  //eliminar colaborador
   //Eliminar colaborador
   const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actulizarColaboradores(nuevosColaboradores)
  }

  //actualizar color de equipo
  const actualizarColor = (color, id)=>{
    console.log("actualizar color: " , color, id)
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id === id){
        equipo.colorPrimario=color
      }
      return equipo
    })

    actualizarEquipos (equiposActualizados)
  }

  //CREAR EQUIPO

  const crearEquipo = (nuevoEquipo)=> {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()} ])
  }

  const like = (id) =>{
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actulizarColaboradores(colaboradoresActualizados)
  }
    return (
      <div >
        <Header />
        {/* mostrarFormulario ? <Formulario/> : <></> */}
        {mostrarFormulario && <Formulario 
          equipos= {equipos.map((equipos)=>equipos.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />}
        <MiOrg cambiarMostrar={cambiarMostrar}/>
        {
          //metodo map: recibe datos y, a partir de esos datos, nos regresa un nuevo arreglo. Por ej, x cada objeto que te encuentres, haces un nuevo objeto
          equipos.map ((equipo)=> 
          <Equipo 
              datos={equipo} 
              key={equipo.titulo}
              //con filter va a filtrar el parametro que le pasemos, en este caso, nos mostrara solo el colaborador cuyo equipo sea igual al titulo del equipo
              colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
              eliminarColaborador={eliminarColaborador}
              actualizarColor={actualizarColor}
              like={like}
          />)
        }
        <Footer/>
      </div>
    );
}

export default App;


