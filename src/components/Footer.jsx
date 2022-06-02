import React from "react";
import "./Login.css";

export default function Footer() {
  const logo = "images/icon-id.png";


  return (
    <div
   
    style={{
      borderRadius: 8,
      textAlign: "center",
      width: "80%",
      marginLeft: "10%",
      marginTop: "1%",
    
      borderColor: "red",
      position: 'relative',
    
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
  );
}
