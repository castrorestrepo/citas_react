import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import "./Dashboard.css";

import { auth, db, logout } from "../service/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
function Dashboard(props,tag) {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
 
 // const { id } = useParams();
  console.log("props en dashboars:")
  console.log(props);
  
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        {name}
        Bienvenido vamos a activar el TAG Numero: 
        <div>{props?.props}</div>
        <div>{tag?.tag}</div>
       
        <div>{user?.email}</div>
        <p>
          Cedula: </p>
          <input className="normal__txt"></input>
        <p>
          Pin:
     
        
        </p>
        <input className="normal__txt"></input>
        <p>
          Nombre de la mascota:
        
        </p>
        <input className="normal__txt"></input>
         
        <p>
          Propietario:
    
         
        </p>
        <input className="normal__txt"></input>
        <p>
            <button className="normal__btn">Validar</button>
     
        </p>
         <button className="dashboard__btn" onClick={logout}>
          Salir de la cuenta
        </button>
      </div>
    </div>
  );
}
export default Dashboard;
