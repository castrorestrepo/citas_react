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
import Footer from "./components/Footer";

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

 // useEffect(() => {
   // const obtenerLS = () => {
    //  const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
    //  setPacientes(pacientesLS);
    //  console.log("pacientes obtenidos en LS", pacientesLS);
   // }
  //  obtenerLS();
  //}, []);

  //useEffect(() => {
  //  localStorage.setItem("pacientes", JSON.stringify(pacientes));
  //}, [pacientes]);

  console.log("tag desde app", tag);

  const backgroundImageURL0 =   "/images/fondo27.jpg";


  const containerStyle0 = {
    backgroundImage: `url(${backgroundImageURL0})`,
    width: "100%",
    height: "100%",
    backgroundPosition: 'center',

    backgroundRepeat: "repeat",
    backgroundSize: 'cover',
    overflow: 'hidden',
    zIndex: -1 ,
    
  };


  return (
    <div style={containerStyle0}>
      <div >
        <Header></Header>

        <Router>
          <Routes>
            <Route
              path="/:id"
              element={<Login setTag={setTag} tag={tag} />}
            ></Route>
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route
              path="/dashboard/"
              element={<Dashboard props={tag} setTag={setTag} />}
            />
            <Route
              path="/"
              element={<Login setTag={setTag} tag={tag} props={tag} />}
            />
            <Route path="*" element={<Login />} />
          </Routes>
        </Router>
        <Footer></Footer>
      </div>
    
      <div></div>
    </div>
  );
}

export default App;
