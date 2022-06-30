import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import "./Dashboard.css";
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
  faKey,
  faCamera,
  faPencil,
  faFloppyDisk,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

import { auth, db, logout, storage } from "../service/firebase";

import {
  query,
  collection,
  getDocs,
  where,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import {
  ref,
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
  uploadBytes,
} from "firebase/storage";

import { async } from "@firebase/util";
import { Card } from "antd";
import { data } from "autoprefixer";

function Dashboard(props) {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [propietario, setPropietario] = useState(true);
  const [editing, setEditing] = useState(false);
  const [Imagen, setImagen] = useState();
  const [msgUploadImage ,setmsgUploadImage ] = useState("");
  const storage = getStorage();

  const [mascotas, setMascotas] = useState([]);
  const [mascotas2, setMasctoas2] = useState([]);
  const [mascota, setMascota] = useState({
    propietario: "",
    celular: "",
    correo: "",
    pin: "",
    nombremascota: "",
    fechanacimiento: "",
    raza: "",
    alergias: "",
    mensaje: "",
    uid: "",
    id: props.props ? props.props : "",
  });
  const avatar =
    "https://github.com/castrorestrepo/citas_react/blob/main/src/images/fondo.jpeg?raw=true";

  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      console.log("entro a fetchuser");
      //consultar los datos del usuarios
      console.log("user primer vez:", user);
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      //setName(data.name);

      console.log("usser", user);
      console.log("termino fethc user:", data);
    } catch (err) {
      console.log("error al consultar usuario fetchuser:", err);
      // alert("An error occured while fetching user data", err);
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
    listar();
    listar2();
  };

  const actualizar = async () => {
    try {
      console.log("user useAuthState", useAuthState);
      console.log("user auth.currentUser.uid", auth.currentUser.uid);

      mascota.uid = auth.currentUser.uid;
      const docRef = await updateDoc(
        doc(db, "tags", mascota.id ? mascota.id : props.props),
        {
          ...mascota,
        }
      );
      console.log("Document actualizado: ", docRef);
      console.log("proceso de guardado...");
      alert("Información de la mascota guardad con exito");
    } catch (error) {
      console.log(
        "Error al guardar información, comuniquese a la linea 3167482109",
        error
      );
    }
    listar();
    listar2();
    setEditing(false);
  };
  const mostrar = () => {
    console.log(props.props);
    return <h1>hola</h1>;
  };

  const listar = async () => {
    const mastocastmp = [];
    try {
      console.log("entro a listar l el vlor user id es: ", user);
      //const q = query(collection(db, "tags"), where("uid", "==", "Q6eSbl96Mdc5IPOn9wB7gL2OFBE3" ));
      const q = query(
        collection(db, "tags"),
        where("uid", "==", user ? user.uid : null)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const id = doc.id;
        mastocastmp.push({ id, ...doc.data() });
      });
      setMascotas(mastocastmp);
    } catch (error) {
      console.log("error al listar", error);
    }
  };

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
        mastocastmp.push({ id, ...mascotas[i], imagenUrl });

        // mastocastmp.push({ ...mascotas[i], imagenUrl });
      }
      setMasctoas2(mastocastmp);
    } catch (error) {
      console.log("error al listar", error);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
    listar();
    listar2();
    consultarTag();
    setName(user.displayName);
  }, [user, loading]);

  useEffect(() => {
    listar2();
  }, [mascotas]);

  useEffect(() => {
    if (user != null) {
      if (mascota.uid == user.uid || mascota.uid == null) {
        setPropietario(true);
        console.log("propietario", mascota);
      } else {
        setPropietario(false);
        console.log("No propietario", mascota);
      }
    }

    if (props.props) {
      setEditing(true);
    }
  }, [mascota]);

  // const { id } = useParams();
  console.log("props en dashboars:", props);
  console.log("mascota", mascota);
  console.log("mascotas", mascotas);
  console.log("mascotas2", mascotas2);

  let result = mascotas.filter((m) => m.id == props.props);
  console.log(result.length ? "existe" : "no existe", result);

  const consultarTag = async () => {
    try {
      const q = query(
        collection(db, "tags"),
        where("__name__", "==", props.props)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      // props.setTag(data.id);
      if (data.pin) {
        setMascota(data);
      } else {
        setMascota("");
      }
    } catch (err) {
      console.error(err);
      //  props.setTag(["No valido"]);
      // alert("Tag no valido error al consultar el Tag en la Base de datos");
    }
  };

  //cargar imagen
  //OBTENIENDO LA IMAGEN
  const changeImagen = (e) => {
    if (e.target.files[0].size > 10000000) {
      alert("Imagen no permitida , mayor de 10 MB")
      console.log("error imagen mayor de 1 MB" + e.target.files[0].size);
    } else {
      //setImagen(e.target.files[0]);
      try {
        console.log("dato", mascota);
        const foto = mascota.id + ".jpg";
        const storageRef = ref(storage, foto);
        uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
          console.log("Archivo cargado a firebase!");
          setmsgUploadImage("Imagen Actualizada")
          listar2();
        });
      } catch (error) {
        alert(error);
      }
      console.log(Imagen);
    }

  };

  //metodo para usar carga a firebase pero con boton de accion 
  //se genera nueva verion que carga inmediatamente despues de seleccionar el file sin requerrir nueva accion de usuario 

  const uploadImage = async () => {
    try {
      console.log("dato", mascota);
      const foto = mascota.id + ".jpg";
      const storageRef = ref(storage, foto);
      uploadBytes(storageRef, Imagen).then((snapshot) => {
        console.log("Archivo cargado a firebase!");
        listar2();
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <br></br>
        Hola  {name ? name  : "no name"}
        <div> <FontAwesomeIcon icon={faUser} /> {" "}{user?.email}</div>
        <br></br>
        Tus mascotas actuales son:
        <div>
          {mascotas2.length ? (
            <div>
              <tbody>
                {mascotas2.map((dato, id) => (
                  <Card
                    style={{
                      background: "#C8D5E0",
                      borderRadius: 8,
                      padding: 10,
                      margin: 5,
                      width: "280px",
                    }}
                  >
                    {dato.imagenUrl ? (
                      <img src={dato.imagenUrl} className="avatar2"></img>
                    ) : (
                      <img src={avatar} className="avatar2"></img>
                    )}

                    <tr
                      style={{
                        borderRadius: 8,

                        width: "100%",
                      }}
                      key={dato.id}
                    >
                      <td
                        style={{
                          background: "#113E68",
                          borderRadius: 5,
                          width: 260,
                          padding: 0,
                        }}
                      >
                        <span
                          className="text-white font-extrabold "
                          style={{
                            fontSize: 25,
                            width: 260,
                          }}
                        >
                          {dato.nombremascota}{" "}
                        </span>
                      </td>
                    </tr>
                    <tr
                      style={{
                        borderRadius: 8,
                        textAlign: "start",
                        width: "100%",
                      }}
                    >
                      <td>
                        <br></br>{" "}
                        <h1 className="text-red-500 text-1xl ">
                          {" "}
                          <FontAwesomeIcon icon={faQrcode} />
                          Tag:{dato.id}{" "}
                        </h1>
                      </td>
                    </tr>
                    <tr
                      style={{
                        borderRadius: 8,
                        textAlign: "start",
                        width: "100%",
                      }}
                    >
                      <td>
                      <FontAwesomeIcon icon={faUser} />{" "}
                        Propietario:{dato.propietario}</td>
                    </tr>
                    <tr
                      style={{
                        borderRadius: 8,
                        textAlign: "start",
                        width: "100%",
                      }}
                    >
                      <td>
                        
                      <FontAwesomeIcon icon={faPhone} />{" "}
                        Celular:{dato.celular}</td>
                    </tr>
                    <tr
                      style={{
                        borderRadius: 8,
                        textAlign: "start",
                        width: "100%",
                      }}
                    >
                      <td>
                    
                      <FontAwesomeIcon icon={faPaperPlane} />{" "}
                       Mail:{dato.correo}</td>
                    </tr>
                    <tr
                      style={{
                        borderRadius: 8,
                        textAlign: "start",
                        width: "100%",
                      }}
                    >
                      <td>
                      <FontAwesomeIcon icon={faCalendar} />{" "}
                        Fecha de nacimiento:{dato.fechanacimiento}</td>
                    </tr>
                    <tr
                      style={{
                        borderRadius: 8,
                        textAlign: "start",
                        width: "100%",
                      }}
                    >
                      <td>
                      <FontAwesomeIcon icon={faDog} />{" "}
                        Raza:{dato.raza}</td>
                    </tr>
                    <tr
                      style={{
                        borderRadius: 8,
                        textAlign: "start",
                        width: "100%",
                      }}
                    >
                      <td>
                      <FontAwesomeIcon icon={faSyringe} />{" "}
                        Alergias:{dato.alergias}</td>
                    </tr>
                    <tr
                      style={{
                        borderRadius: 8,
                        textAlign: "start",
                        width: "100%",
                      }}
                    >
                      <td>
                      <FontAwesomeIcon icon={faCommentDots} />{" "}
                        Mensaje:{dato.mensaje}</td>
                    </tr>

                    <br></br>
                    <button
                      className="edit__btn"
                      onClick={() =>
                        setMascota(
                          ...mascotas2.filter((m) => m.id == dato.id),
                          setEditing(true)
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faPencil} /> Modificar
                    </button>
                  </Card>
                ))}
              </tbody>
            </div>
          ) : (
            <p>No se encontraron tags registrados en esta cuenta </p>
          )}
          <br></br>
        </div>
        {editing ? (
          <div
            style={{
              background: "#C8D5E0",
              borderRadius: 8,
              padding: 10,
              margin: 5,
              width: "280px",
              color: "#00337B",
            }}
          >
            <div
              className="form__div"
              style={{
                background: "#113E68",
                borderRadius: 5,
                width: 260,
                padding: 0,
              }}
            >
              Ingrese o modifique los datos de su mascota.
            </div>  <FontAwesomeIcon icon={faQrcode} />{" "}
            TAG Número:
            <span className="text-red-500 text-center text-1xl ">
              {" "}
              <div>{mascota.id ? mascota.id : props.props}</div>
              <div></div>
            </span>
            <br></br>
            <FontAwesomeIcon icon={faUser} /> {" "}
          
            Propietario: <br></br>
            <input
              id="propietario"
              value={mascota.propietario}
              //onChange={(e) => onChange(e.target.value)}
              onChange={(e) => onChange(e)}
              className="normal__txt"
            ></input>
            <br></br>
           
            <p> <FontAwesomeIcon icon={faDog} /> {" "}
           Nombre de la mascota:</p>
            <input
              id="nombremascota"
              value={mascota.nombremascota}
              //onChange={(e) => onChange(e.target.value)}
              onChange={(e) => onChange(e)}
              className="normal__txt"
            ></input>
            <p>   <FontAwesomeIcon icon={faPhone} /> {" "}
            Celular de contacto: </p>
            <input
              id="celular"
              value={mascota.celular}
              //onChange={(e) => onChange(e.target.value)}
              onChange={(e) => onChange(e)}
              className="normal__txt"
            ></input>

          <p>   <FontAwesomeIcon icon={faPhone} /> {" "}
            Correo de notificación: </p>
            <input
              id="correo"
              value={mascota.correo}
              //onChange={(e) => onChange(e.target.value)}
              onChange={(e) => onChange(e)}
              className="normal__txt"
            ></input>

            <p>  <FontAwesomeIcon icon={faKey} />{" "}
            Asigne un pin de seguridad:</p>
            <input
              id="pin"
              value={mascota.pin}
              //onChange={(e) => onChange(e.target.value)}
              onChange={(e) => onChange(e)}
              className="normal__txt"
            ></input>
            <p>   <FontAwesomeIcon icon={faCalendar} /> {" "}
            Fecha nacimiento :</p>
            <input
              id="fechanacimiento"
              value={mascota.fechanacimiento}
              //onChange={(e) => onChange(e.target.value)}
              onChange={(e) => onChange(e)}
              className="normal__txt"
            ></input>
            <p>   <FontAwesomeIcon icon={faDog} /> {" "}
            Raza :</p>
            <input
              id="raza"
              value={mascota.raza}
              //onChange={(e) => onChange(e.target.value)}
              onChange={(e) => onChange(e)}
              className="normal__txt"
            ></input>
            <p>   <FontAwesomeIcon icon={faSyringe} />Alergias :</p>
            <input
              id="alergias"
              value={mascota.alergias}
              //onChange={(e) => onChange(e.target.value)}
              onChange={(e) => onChange(e)}
              className="normal__txt"
            ></input>
            <p>   <FontAwesomeIcon icon={faCommentDots} />{" "}
            Mensaje personalizado para mostrar a quien escanea el codigo:</p>
            <input
              id="mensaje"
              value={mascota.mensaje}
              //onChange={(e) => onChange(e.target.value)}
              onChange={(e) => onChange(e)}
              className="normal__txt"
            ></input>
            <aside id="modal">
              <div>
                <header>
                  <br></br>
                  <h1>  <FontAwesomeIcon icon={faCamera} /> {" "}Cambiar Imagen</h1>
                  {msgUploadImage}
                  <input
                    id="file"
                    type="file"
                    name="imagen"
                    onChange={changeImagen}
                  />

                </header>
              </div>
            </aside>
            <p>
              <br></br>
              {propietario ? (
                <button className="normal__btn" onClick={actualizar}>
                   <FontAwesomeIcon icon={faFloppyDisk} /> {" "}Gardar
                </button>
              ) : (
                <div>
                  <p> "No eres el propietario"</p>
                </div>
              )}
            </p>
          </div>
        ) : (
          <div
            style={{
              width: "280px",
            }}
          >
            Si desea registrar un nuevo tag, de clic en "Salir de la cuenta",
            luego escanee el QR e inicie sesion luego de escanear para
            activarlo.
          </div>
        )}
        <br></br>
        <button className="dashboard__btn" onClick={logout}>
          Salir de la cuenta
        </button>
        <br></br>
      </div>
    </div>
  );
}

const ListaEventos = (mascotas) => {
  return <ul>hola</ul>;
};
export default Dashboard;
