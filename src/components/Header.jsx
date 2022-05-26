import React from "react";
import "./Login.css";

export default function Header() {
  const logo = "images/icon-id.png";

  return (
    <div
   
    style={{
      borderRadius: 8,
      textAlign: "center",
      width: "80%",
      marginLeft: "10%",
      marginTop: "1%",
      backgroundColor: "#C8D5E0",
      borderColor: "red",
      position: 'relative',
    
    }}
    
    
  >
      <br></br>
      <h1 className="text-3xl text-center ">
      <span className="text-blue-400">  <img src={logo} className="logo" ></img> PetsID</span>{" "}
      </h1>

    </div>
  );
}
