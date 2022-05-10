import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import "./Dashboard.css";

<<<<<<< HEAD
import { auth, db, logout, storage } from "../service/firebase";
=======
import { auth, db, logout } from "../service/firebase";
>>>>>>> 398e9ace61d2a34ffddd08fbb5217c443c965b55

import {
  query,
  collection,
  getDocs,
  where,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
<<<<<<< HEAD
import { ref, getDownloadURL } from "firebase/storage";
=======
>>>>>>> 398e9ace61d2a34ffddd08fbb5217c443c965b55

import { async } from "@firebase/util";
import { Card } from "antd";
import { data } from "autoprefixer";
function Dashboard(props, tag) {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
<<<<<<< HEAD

  const [mascotas, setMascotas] = useState([]);
  const [mascotas2, setMasctoas2] = useState([]);
=======
  const [mascotas, setMascotas] = useState([]);
>>>>>>> 398e9ace61d2a34ffddd08fbb5217c443c965b55
  const [mascota, setMascota] = useState({
    propietario: "",
    celular: "",
    pin: "",
    nombremascota: "",
    fechanacimiento: "",
    raza: "",
    alergias: "",
    mensaje: "",
    //uid: auth.currentUser.uid? auth.currentUser.uid : null
  });

  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      console.log("entro a fetchuser");
      //consultar los datos del usuarios

      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      console.log("termino fethc user:", data);
    } catch (err) {
      console.log("error al consultar usuario fetchuser:", err);
      // alert("An error occured while fetching user data", err);
<<<<<<< HEAD
    }
  };

  function onChange(e) {
    console.log("e", e);
    setMascota({ ...mascota, [e.target.id]: e.target.value });
  }
  //guardar

  const guardar = async () => {
    try {
      const docRef = await addDoc(collection(db, "tags"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("proceso de guardado...");
    } catch (error) {
      console.log("error al guardar", error);
    }
  };

  const actualizar = async () => {
    try {
      const docRef = await updateDoc(doc(db, "tags", props.props), {
        ...mascota,
      });
      console.log("Document actualizado: ", docRef);
      console.log("proceso de guardado...");
      alert("Información de la mascota guardad con exito");
    } catch (error) {
      console.log(
        "Error al guardar información, comuniquese a la linea 3167482109",
        error
      );
    }
  };
=======
    }
  };

  function onChange(e) {
    console.log("e", e);
    setMascota({ ...mascota, [e.target.id]: e.target.value });
  }
  //guardar

  const guardar = async () => {
    try {
      const docRef = await addDoc(collection(db, "tags"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("proceso de guardado...");
    } catch (error) {
      console.log("error al guardar", error);
    }
  };

  const actualizar = async () => {
    try {
      const docRef = await updateDoc(doc(db, "tags", props.props), {
        ...mascota,
      });
      console.log("Document actualizado: ", docRef);
      console.log("proceso de guardado...");
      alert("Información de la mascota guardad con exito");
    } catch (error) {
      console.log(
        "Error al guardar información, comuniquese a la linea 3167482109",
        error
      );
    }
  };
>>>>>>> 398e9ace61d2a34ffddd08fbb5217c443c965b55
  const mostrar = () => {
    console.log(props.props);
    return <h1>hola</h1>;
  };

  const listar = async () => {
<<<<<<< HEAD
    const mastocastmp = [];
=======
>>>>>>> 398e9ace61d2a34ffddd08fbb5217c443c965b55
    try {
      console.log("entro a listar l el vlor user id es: ", user);
      //const q = query(collection(db, "tags"), where("uid", "==", "Q6eSbl96Mdc5IPOn9wB7gL2OFBE3" ));
      const q = query(
        collection(db, "tags"),
        where("uid", "==", user ? user.uid : null)
      );
      const querySnapshot = await getDocs(q);
<<<<<<< HEAD
      querySnapshot.forEach((doc) => {
        const id = doc.id;
        mastocastmp.push({ id, ...doc.data() });
      });
      setMascotas(mastocastmp);
=======
      const mascotastmp = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const id = doc.id;
        mascotastmp.push({ id, ...doc.data() });
        //...doc.data(), id: doc.id
        console.log(doc.id, " => ", doc.data());
      });
      console.log("masctoas tmp en el listar ", mascotastmp);
      console.log("masctoas en el listar ", mascotas);
      setMascotas(mascotastmp);
   
>>>>>>> 398e9ace61d2a34ffddd08fbb5217c443c965b55
    } catch (error) {
      console.log("error al listar", error);
    }
  };

<<<<<<< HEAD
  const listar2 = async () => {
    const mastocastmp = [];
    try {
      console.log("entro a listar  el valor user id es: ", user);
      //const q = query(collection(db, "tags"), where("uid", "==", "Q6eSbl96Mdc5IPOn9wB7gL2OFBE3" ));

      for (let i = 0; i < mascotas.length; i++) {
        const id = mascotas[i].id;
        console.log("id msacota desde for ", id);
        const imagenUrl = await getDownloadURL(ref(storage, id + ".jpg"))
          .then((url) => {
            console.log("url en ciclo", url);
            return url;
          })
          .catch((error) => {
            // Handle any errors
            console.error("error al generar url en ciclo:", error);
            return "";
          });
          mastocastmp.push({ id, ...mascotas[i],imagenUrl });
 
       // mastocastmp.push({ ...mascotas[i], imagenUrl });
      }
      setMasctoas2(mastocastmp);
    } catch (error) {
      console.log("error al listar", error);
    }
  };
=======
  useEffect(() => {
    if (user) {
     // fetchUserName();
      listar();
    }
  }, []);
>>>>>>> 398e9ace61d2a34ffddd08fbb5217c443c965b55

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
<<<<<<< HEAD
    fetchUserName();
    listar();
  listar2();
  }, [user, loading]);

  useEffect(() => {
    
  listar2();
  }, [mascotas]);

  // const { id } = useParams();
  console.log("props en dashboars:", props);
  console.log("mascota", mascota);
  console.log("mascotas", mascotas); 
  console.log("mascotas2", mascotas2);
=======
  }, [user, loading]);

  // const { id } = useParams();
  console.log("props en dashboars:", props);
  console.log("mascota", mascota);
  console.log("mascotas", mascotas);
>>>>>>> 398e9ace61d2a34ffddd08fbb5217c443c965b55
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Bienvenido: {user?.name}
        Bienvenido2: {name ? name : "no name"}
        <div>{user?.email}</div>
        <br></br>
        Los siguientes son los Tags que tienes registrados y configurados a tus
        mascotas:
        <div>
<<<<<<< HEAD
          {mascotas2 ? (
            <div>
              <tbody> 
                {mascotas2.map((dato, index) => (
                  <Card
                    style={{
                      background: "#C8D5E0",
                      borderRadius: 8,
                      textAlign: "start",
                      margin: 5,
                      width: 240,
                    }}
                  >
                    <img src={dato.imagenUrl} className="avatar"></img>

                    <tr
                      style={{
                        borderRadius: 8,
                        textAlign: "start",
                        width: "100%",
                      }}
                      key={dato.id}
                    >
                      <td
                        style={{
                          background: "#113E68",
                          borderRadius: 8,
                          textAlign: "start",
                        }}
                      >
                        <span className="text-white  ">
                          Mascota: {dato.nombremascota}{" "}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Tag:{dato.id}</td>
                    </tr>

                    <tr>
                      <td>Celular de Contacto:{dato.pin}</td>
                    </tr>
                    <tr>
                      <td>Fecha de nacimiento:{dato.fechanacimiento}</td>
                    </tr>
                    <tr>
                      <td>Raza:{dato.raza}</td>
                    </tr>
                    <tr>
                      <td>Alergias:{dato.alergias}</td>
                    </tr>
                    <tr>
                      <td>Mensaje:{dato.mensaje}</td>
                    </tr>
                  </Card>
                ))}
              </tbody>
            </div>
          ) : (
            <div>
              <p>No se encontraron tags registrados en esta cuenta </p>
=======
          {mascotas ? (
            <div>
            <tbody>
              {mascotas.map((dato, index) => (
                <Card
                  style={{
                    background: "#C8D5E0",
                    borderRadius: 8,
                    textAlign: "start",
                    margin: 5,
                    width: 240,
                  }}
                >
                  <tr
                    style={{
                      borderRadius: 8,
                      textAlign: "start",
                      width: "100%",
                    }}
                    key={dato.id}
                  >
                    <td
                      style={{
                        background: "#113E68",
                        borderRadius: 8,
                        textAlign: "start",
                      }}
                    >
                      <span className="text-white  ">
                        Mascota: {dato.nombremascota}{" "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Tag:{dato.id}</td>
                  </tr>

                  <tr>
                    <td>Celular de Contacto:{dato.pin}</td>
                  </tr>
                  <tr>
                    <td>Fecha de nacimiento:{dato.fechanacimiento}</td>
                  </tr>
                  <tr>
                    <td>Raza:{dato.raza}</td>
                  </tr>
                  <tr>
                    <td>Alergias:{dato.alergias}</td>
                  </tr>
                  <tr>
                    <td>Mensaje:{dato.mensaje}</td>
                  </tr>
                </Card>
              ))}
            </tbody>
            </div>
          ) : (
            <div>
            <p>No se encontraron tags registrados en esta cuenta </p>
>>>>>>> 398e9ace61d2a34ffddd08fbb5217c443c965b55
            </div>
          )}
          <br></br>
        </div>
        <div>
          A continuacion se solicitan los datos de propietario y la mascota,
          recuerde que estos serán los datos que obserbaran las personas que
          escanean el tag cuando una mascota esta perdida y requiere ayuda, por
          lo tanto asegurese de ingresar correctamente la información.
          <br></br>
          vamos a activar el TAG Numero:
          <span className="text-red-500 text-center text-1xl ">
            {" "}
            <div>{props?.props}</div>
          </span>
          <br></br>
          Nombres del propietario de la mascota:{" "}
          <input
            id="propietario"
            value={mascota.propietario}
            //onChange={(e) => onChange(e.target.value)}
            onChange={(e) => onChange(e)}
            className="normal__txt"
          ></input>
          <br></br>
          <p> Celular de contacto: </p>
          <input
            id="celular"
            value={mascota.celular}
            //onChange={(e) => onChange(e.target.value)}
            onChange={(e) => onChange(e)}
            className="normal__txt"
          ></input>
          <p>Ingrese un pin de seguridad 4 digitos - no podra olvidarlo:</p>
          <input
            id="pin"
            value={mascota.pin}
            //onChange={(e) => onChange(e.target.value)}
            onChange={(e) => onChange(e)}
            className="normal__txt"
          ></input>
          <p>Nombre de la mascota:</p>
          <input
            id="nombremascota"
            value={mascota.nombremascota}
            //onChange={(e) => onChange(e.target.value)}
            onChange={(e) => onChange(e)}
            className="normal__txt"
          ></input>
          <p>Fecha nacimiento :</p>
          <input
            id="fechanacimiento"
            value={mascota.fechanacimiento}
            //onChange={(e) => onChange(e.target.value)}
            onChange={(e) => onChange(e)}
            className="normal__txt"
          ></input>
          <p>Raza :</p>
          <input
            id="raza"
            value={mascota.raza}
            //onChange={(e) => onChange(e.target.value)}
            onChange={(e) => onChange(e)}
            className="normal__txt"
          ></input>
          <p>Alergias :</p>
          <input
            id="alergias"
            value={mascota.alergias}
            //onChange={(e) => onChange(e.target.value)}
            onChange={(e) => onChange(e)}
            className="normal__txt"
          ></input>
          <p>Mensaje personalizado para mostrar a quien escanea el codigo:</p>
          <input
            id="mensaje"
            value={mascota.mensaje}
            //onChange={(e) => onChange(e.target.value)}
            onChange={(e) => onChange(e)}
            className="normal__txt"
          ></input>
          <p>
            <br></br>

            <button className="normal__btn" onClick={actualizar}>
              Gardar
            </button>
            <button className="normal__btn" onClick={listar}>
              Mis Tags y mascotas
            </button>
          </p>
          <button className="dashboard__btn" onClick={logout}>
            Salir de la cuenta
          </button>
        </div>
      </div>
    </div>
  );
}

const ListaEventos = (mascotas) => {
  return <ul>hola</ul>;
};
export default Dashboard;
