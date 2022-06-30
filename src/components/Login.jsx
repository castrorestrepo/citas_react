import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faQrcode,
  faCircleInfo,
  faPhone,
  faRegistered,
  faCartPlus,
  faUser,
  faCalendar,
  faDog,
  faSyringe,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

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
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

import { useAuthState } from "react-firebase-hooks/auth";

import "./Login.css";
import { Avatar, Tag } from "antd";
import { QuerySnapshot } from "firebase/firestore";
import { async } from "@firebase/util";

const tag1 = "images/tag1.jpg";
const buy1 = "images/buy1.webp";
const backgroundImageURL = "images/fondo.jpeg";
const containerStyle = {
  backgroundImage: `url(${backgroundImageURL})`,

};

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [perfil, setPerfil] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const [imagen, setImagen] = useState("");


  
  const enviarlocalizacion = async (position) => {
    console.log("iniciando envio gps", position);
    if (perfil.correo) {
      try {
        const docRef = await addDoc(collection(db, "PetsIdmail"), {
          to: perfil.correo,
          message: {
            subject: "Tu mascota ha sido ubicada",
            // text: "hemos detectado que el perfil de tu mascota fue escaneado, la ubicacion actual es:",
            // html: " <code><h1>Hemos detectado que de tu mascota ha sido escaneado Ubicacion de tu mascota:</h1> <a href=`http://maps.google.com/?q=6.1754948,-75.6298538`> Ver ubicación</a>"
            html:
              `
           <p><img alt="" src="https://www.petsid.com.co/images/icono2.png" style="height:56px; width:50px" /><span style="font-size:28px"><strong><span style="color:#2980b9">PetsID</span></strong></span></p>

           <p><span style="font-size:18px"><span style="color:#2980b9"><strong>Hemos detectado que la placa de tu mascota ha sido escaneada!</strong></span></span></p>
           
           <p><span style="font-size:14px"><strong><span style="color:#2980b9">Para ver la ubicacion presiona en el siguiente link:</span></strong></span></p>
           
           <p><span style="font-size:14px"><strong><a href="http://maps.google.com/?q=` +
              position.coords.latitude +
              "," +
              position.coords.longitude +
              `
           
           " ><span style="color:#ffffff"><span style="background-color:#3498db">Ver ubicacion&nbsp;</span></span></a></strong></span></p>
           
           <p><span style="font-size:14px"><span style="color:#2980b9">Si deseas conocer mas de nuestros servicios</span></span></p>
           
           <p><span style="font-size:14px"><span style="color:#2980b9">visita <a href="https://www.petsid.com.co">www.petsid.com.co</a></span></span></p>
           
           <p><span style="font-size:14px"><span style="color:#2980b9">Visita nuestro instagram: <a href="https://www.instagram.com/petsid.com.co/">@petsid.com.co</a></span></span></p>
           
           <hr />
           <p style="text-align:center"><span style="color:#999999"><span style="font-size:10px">Tienda Fisica : crr 66 39 a 21 Itagui Antioquia Colombia.&nbsp;</span></span></p>
           
           <p style="text-align:center"><span style="color:#999999"><span style="font-size:10px">Comunicate a la linea: 3167482109</span></span></p>
           
           <p style="text-align:center"><span style="color:#999999"><span style="font-size:10px">By Juli&aacute;n Andr&eacute;s Restrepo Castro</span></span></p>
           
           `,
          },
        });
        console.log("Document mail location written with ID: ", docRef.id);
      } catch (error) {
        console.log("error al guardar", error);
      }
    }
    else{
      console.log("no se puedo enviar correo de ubicacion, mascota registrada sin Correo", perfil.correo)
    }
  };

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

 //perfil.correo ? console.log("hay perfil", perfil.correo) : console.log("no hay peerfil", perfil.correo)
     
     
    //obtener localizacion

    if (perfil.correo != ""){
      if ("geolocation" in navigator) {
        console.log("Localizacion valida");
        navigator.geolocation.getCurrentPosition(function (position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          console.log(position.Link);
          const ubicacion = position;
          enviarlocalizacion(ubicacion);
        });
      } else {
        console.log("No hya correo para envio de localizacion");
      }
    }
   
  }, [user, loading, perfil.correo]);

  const backgroundImageURL0 = "images/fondo1.jpeg";
  const logo = "images/icon-id.png";

  return (
    <div className="login">
      <div className="header" style={containerStyle}></div>

      <div className="login__container">
        <br></br>
        <div className="horizontal">
          <div className="vertical">
            <h1 className="text-blue-500 text-justify text-2xl">
              Placas <FontAwesomeIcon icon={faQrcode} /> QR Geniales!{" "}
            </h1>
            <h1 className="text-gray-600 text-justify text-1xl">
              Permiten identificar tu mascota y su ubicacion, en el momento de
              lectura de su placa con cualquier dispotivio movil.{" "}
            </h1>
          </div>
          <div className="vertical">
            <img src={tag1} className="tag1"></img>
          </div>
        </div>
        <br></br>
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <div
            style={{
              margin: "auto",
              alignContent: "center",
            }}
          >
            <h1 className="text-blue-500  text-2xl"></h1>
            <a
              style={{ borderRadius: 20 }}
              className="buy__btn"
              target="_blank"
              href="https://wa.me/573153988090?text=Hola%20me%20interesa%20adquirir%20una%20placa%20%20pets%20ID%20o%20requiero%20ayuda"
            >
              !!!Comprar ahora <FontAwesomeIcon icon={faCartPlus} />{" "}
            </a>
          </div>
        </div>

        <br></br>
        <h1
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
          }}
          className="text-gray-600 text-center text-1xl"
        >
          A continuación podras gestionar los datos de tu mascota:
        </h1>

        <div
          style={{
            alignContent: "center",
            display: "flex",
            width: "100%",
            margin: "auto",
          }}
        >
          <div
            style={{
              margin: "auto",
            }}
          >
            <h1 className="text-red-500 text-center text-1xl ">
              {props.tag ? (
                <div>Codigo: {props.tag}</div>
              ) : (
                "Codigo no escaneado"
              )}{" "}
            </h1>
          </div>
        </div>

        {perfil.propietario ? (
          <div
            style={{
              width: "100%",
              alignContent: "center",
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
                backgroundColor: "#BDC3C7",
                borderColor: "red",
              }}
              className="text-left text-gray-500"
            >
              <h1>
                {" "}
                <span className="text-blue-500 text-center text-1xl ">
                  <FontAwesomeIcon icon={faUser} /> Mi propietario es :{" "}
                </span>{" "}
                {perfil.propietario}
              </h1>
              <span className="text-blue-500 text-center text-1xl ">
                <FontAwesomeIcon icon={faPhone} /> Su número es:{" "}
              </span>{" "}
              {perfil.celular} <br></br>
              <span className="text-blue-500 text-center text-1xl ">
                <FontAwesomeIcon icon={faPhone} /> Email:{" "}
              </span>{" "}
              {perfil.correo} <br></br>
              <span className="text-left  text-blue-500">
                <FontAwesomeIcon icon={faCalendar} /> Fecha de nacimiento:{" "}
              </span>{" "}
              {perfil.fechanacimiento}
              <br></br>
              <span className="text-left  text-blue-500">
                {" "}
                <FontAwesomeIcon icon={faDog} />
                Raza:{" "}
              </span>{" "}
              {perfil.raza}
              <br></br>
              <span className="text-left  text-blue-500">
                <FontAwesomeIcon icon={faSyringe} />
                Alergias:{" "}
              </span>{" "}
              {perfil.alergias}
              <br></br>
              <span className="text-left  text-blue-500">
                <FontAwesomeIcon icon={faCommentDots} />
                Mensaje:{" "}
              </span>{" "}
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
                alignContent: "center",
                textAlign: "center",
                alignItems: "center",
                width: "90%",
                marginLeft: "4%",
                marginRight: "4%",
              }}
            >
              Si eres propietario de un tag de PetsID, puedes iniciar sesión a
              continuación para registrar o actualizar datos de tu mascota
            </h1>
          </div>
        ) : props.tag == "No valido" ? (
          <div>
            Tag no valido, no podras registrar este tag, si adquiriste este tag
            debes comunicarte a la linea 3167482109 para validaciones ya que no
            se encontró en la base de datos.
          </div>
        ) : (
          <div>
            <div
              style={{
                padding: 0,
                textAlign: "justify",
                marginLeft: "10%",
                width: "80%",
              }}
              className="text-left text-gray-600"
            >
              No hemos detectado un QR escaneado o aún no ha sido activado, crea
              una cuenta, regístrate con Google, escanea tu QR y actívalo ahora.
            </div>
          </div>
        )}

        <div className="login">
          <input
            type="text"
            style={{ borderRadius: 8 }}
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <br></br>
          <input
            type="password"
            style={{ borderRadius: 8 }}
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <br></br>
          <button
            style={{ borderRadius: 8 }}
            className="login__btn"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <br></br>
          <button
            className="login__btn login__google"
            onClick={signInWithGoogle}
            style={{ borderRadius: 8 }}
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
            <FontAwesomeIcon icon={faRegistered} /> Todos los derechos
            reservados Petsid.com.co.{" "}
          </span>
          <br></br>
          <span className="text-blue-400 text-center ">
            <FontAwesomeIcon icon={faCircleInfo} /> Requieres ayuda? <br></br>
            <FontAwesomeIcon icon={faPhone} /> llama a la linea 3167482109{" "}
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
      ></div>
    </div>
  );
}
export default Login;
