import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "././components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";
import { useParams } from "react-router";
import "./app.css";

function App() {
  const [user, setUser] = useState(null);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [tag, setTag] = useState(null);

  const eliminarPaciente = (id) => {
    console.log("eliminando paciwnte:", id);
    const pacientesACtualizados = pacientes.filter((e) => e.id !== id);
    setPacientes(pacientesACtualizados);
  };

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS);
      console.log("pacientes obtenidos en LS", pacientesLS);
    };
    obtenerLS();

 
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);
  
 console.log("tag desde app", tag)
 

  return (
    <div className="app align-middle backgro  bg-slate-800 text-slate-400" >
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path="/:id" element={<Login setTag={setTag} tag={tag} />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard/" element={<Dashboard  props={tag}  />} />
          <Route exact path="/" element={<Login setTag={setTag} tag={tag}  props={tag} />} />
          <Route path="*" element={<div> La ruta no existe 404</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
