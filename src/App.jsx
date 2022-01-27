import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState , useEffect} from "react";
function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    console.log("eliminando paciwnte:", id);
    const pacientesACtualizados = pacientes.filter((e) => e.id !== id);
    setPacientes(pacientesACtualizados);
  };

  useEffect(() => {
   const obtenerLS =()=>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
      console.log("pacientes obtenidos en LS", pacientesLS)
   }
   obtenerLS();

  }, [])
  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  return (
    <div className=" container mx-0 align-middle  bg-slate-800 text-slate-400">
      <Header></Header>
      <div className="mt-12 flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        ></Formulario>
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        ></ListadoPacientes>
      </div>
    </div>
  );
}

export default App;
