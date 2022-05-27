import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  sendPasswordReset,
  db,
  storage,
} from "../service/firebase";
import {
  query,
  collection,
  getDocs,
  where,
  documentId,
  doc,
} from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

import { useAuthState } from "react-firebase-hooks/auth";

import "./Login.css";
import { Avatar, Tag } from "antd";
import { QuerySnapshot } from "firebase/firestore";
import { async } from "@firebase/util";



const backgroundImageURL =
  "images/fondo.jpeg";
const containerStyle = {
  backgroundImage: `url(${backgroundImageURL})`,
  width: "100%",
  height: "100%",
};


function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [perfil, setPerfil] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const [imagen, setImagen] = useState("");

  const fetchTags = async () => {
    try {
      const q = query(
        collection(db, "tags"),
        where("__name__", "==", id.toString())
      );

      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      // props.setTag(data.id);
      console.log(data);
      console.log("id ok", doc);
      if (data.pin) {
        setPerfil(data);
      } else {
        setPerfil([]);
      }
    } catch (err) {
      console.error(err);
      props.setTag(["No valido"]);
      // alert("Tag no valido error al consultar el Tag en la Base de datos");
    }
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      
      navigate("/dashboard");
    }
    fetchTags();

    perfil ? props.setTag(id) : props.setTag("no Valido");
  
    console.log("props en login:");
    console.log(props);

    //obtener avatar
    perfil
      ? getDownloadURL(ref(storage, id + ".jpg"))
          .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            setImagen(url);
            console.log("porfin", url);
            // Or inserted into an <img> element
            //const img = document.getElementById('myimg');
            //img.setAttribute('src', url);
          })
          .catch((error) => {
            // Handle any errors
          })
      : null;

    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        console.log(position);
      });
    } else {
      console.log("Not Available");
    }
  }, [user, loading]);

  const backgroundImageURL0 = "images/fondo1.jpeg";
  const logo = "images/icon-id.png";
  
  

  return (
    <div className="login"  >
           
       <div className="header" style={containerStyle}>
        
      </div>

      <div className="login__container">
        <br></br>
      <h1 className="text-gray-400 text-center text-1xl">Codigo:</h1>
      <h1 className="text-red-500 text-center text-1xl ">
        {props.tag ? props.tag : "Codigo no escaneado"}{" "}
      <br></br>  ¿Quieres comprar un tag ahora?
      </h1>
      
    
        {perfil.propietario ? (
          <div
          style={{
           
            width: "100%",
          alignContent:"center"
          }}
          >
            
            <span className="text-4xl  text-blue-500">
              Hola soy:
              {perfil.nombremascota}{" "}
          
        
            </span>
            <img src={imagen} className="avatar"></img>
           
            <span className="text-1xl text-center "></span>{" "}
            
             <div
              style={{
                borderRadius: 8,
                textAlign: "start",
                width: "80%",
                marginLeft: "10%",
                marginRight: "10%",
                backgroundColor: "#c7c7d7",
                borderColor: "red",
            
              }}
              className="text-left text-gray-500"
            >
              <h1> Mi propietario es : {perfil.propietario}</h1> Su número es:
              <span className="text-red-500 text-center text-1xl ">
                {" "}
                {perfil.celular}{" "}
              </span>
              <br></br>
              <span className="text-left  text-blue-500">
                Fecha de nacimiento:{" "}
              </span>{" "}
              {perfil.fechanacimiento}
              <br></br>
              <span className="text-left  text-blue-500">Raza: </span>{" "}
              {perfil.raza}
              <br></br>
              <span className="text-left  text-blue-500">Alergias: </span>{" "}
              {perfil.alergias}
              <br></br>
              <span className="text-left  text-blue-500">Mensaje: </span>{" "}
              {perfil.mensaje}
            </div>
        
            <div
              style={{
                borderRadius: 8,
                textAlign: "start",
                width: "90%",
                margin: "5%",
                backgroundColor: "#c7c7d7",
                borderColor: "red",
              }}
              className="text-left text-gray-500"
            ></div>
        
            <h1
            style={{
             alignContent:'center',
             textAlign:'center',
             alignItems:'center',
              width: '90%',
              marginLeft:'4%',
              marginRight:'4%'
              }}
            >
               
Si eres propietario de un tag de PetsID, puedes iniciar sesión a continuación para registrar o actualizar datos de tu mascota
         
            </h1>
          </div>
        ) : props.tag == "No valido" ? (
          <div>
            Tag no valido, no podras registrar este tag, si adquiriste este tag
            debes comunicarte a la linea 3167482109 para validaciones ya que no
            se encontró en la base de datos.
          </div>
        ) : (
          <div> Bienvenido a PetsID
          <div
            style={{
              padding: 0,
              textAlign: "justify",
              marginLeft: '10%',
              width: '80%'
            }}
          >
          No hemos detectado un QR escaneado o aun no ha sido activado,
            Crea una cuenta, registrate con Google, escanea tu QR y activalo ahora. 
          </div>
        
            </div>
         
        )}

        <div className="login">
          <input
            type="text"
            style={{borderRadius:8}}
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <br></br>
          <input
            type="password"
            style={{borderRadius:8}}
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <br></br>
          <button
          style={{borderRadius:8}}
            className="login__btn"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <br></br>
          <button
            className="login__btn login__google"
            onClick={signInWithGoogle}
            style={{borderRadius:8}}
          >
            Login with Google
          </button>
          <div>
            <Link to="/reset">Recordar Password</Link>
          </div>
          <div>
            No tienes una cuenta? <Link to="/register">Registrate</Link> ahora
          </div>
          <br></br>
          <span className="text-red-400 text-center ">
            Todos los derechos reservados Petsid.com.co.{" "}
          </span>
          <br></br>
          <span className="text-blue-400 text-center ">
            Requieres ayuda? llama a la linea 3167482109{" "}
          </span>
        </div>
      </div>
      <div
        style={{
          borderRadius: 8,
          textAlign: "justify",
          width: "100%",
          fontSize: 8,
        }}
      >
        <span className="text-gray-400 text-center ">
          Petsid.com.co es un sistema de identificación de mascotas, la
          información depositada por sus propietarios, será tratada conforma la
          ley 1581 de 2022 y decretos reglamentario; no entregamos su
          información a otras compañias, no obstante si su mascota se extravia y
          alguien escanea el QR, podra conocer su nombre y datos de contacto,
          para lo cual al usar y registrar un tag, autoriza que susdatos sean
          expuestos ante la lectura del QR.
        </span>
      </div>
    </div>
  );
}
export default Login;
