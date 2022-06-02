import React from "react";
import "./Login.css";

export default function Header() {
  const logo = "images/icono2.png";

  return (
    <div
   
    style={{
      borderRadius: 8,
      textAlign: "center",
      
      marginTop: "1%",
      backgroundColor: "white",
      borderColor: "red",
      position: 'relative',
    
    }}
    
    
  >
      <br></br>
      <h1 className="text-3xl text-center ">
      <span className="text-blue-400">  <img src={logo} className="logo" ></img> PetsID</span>{" "}
      </h1>
      <h1 className="text-blue-400 text-center text-1xl">Identificación y localización de mascotas</h1>
     
   

    </div>
  );
}
