import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../service/firebase";
import "./Register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate().history;
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user){
      console.log("user",user);
      console.log("history", history)
    }
   // if (user) history.replace("/dashboard");
  }, [user, loading]);
  return (
    <div className="register">
      <div className="register__container" style={{ borderRadius: 8 }}>
        <input
          type="text"
          style={{ borderRadius: 8 }}
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombres"
        />
        <input
          type="text"
          style={{ borderRadius: 8 }}
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          style={{ borderRadius: 8 }}
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="register__btn"
          style={{ borderRadius: 8 }}
          onClick={register}
        >
          Registrarme
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
          style={{ borderRadius: 8 }}
        >
          Registrarme con Google
        </button>
        <div>
          Ya tienes una cuenta? <Link to="/">Ingresar</Link> ahora.
        </div>
      </div>
    </div>
  );
}
export default Register;
