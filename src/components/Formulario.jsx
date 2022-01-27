import React from 'react'
import { useState,useEffect } from 'react'
import Paciente from './Paciente';
import Error from './Error';

export default function Formulario( {pacientes, setPacientes, paciente ,setPaciente}) {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState();
    const [error, setError] = useState(false);

    const generarId = ()=> {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }

 useEffect(() => {
     if(Object.keys(paciente).length >0 ){
         console.log("hay pacientae a editar",paciente)
         setNombre(paciente.nombre)
         setPropietario(paciente.propietario)
         setEmail(paciente.email)
         setFecha(paciente.fecha)
         setSintomas(paciente.sintomas)
     }
   
 }, [paciente])


 useEffect(() => {
     console.log('el componente esta listo')
 }, [])

    const hanldeSubmit = (e)=>{
        e.preventDefault();

        //validar el formulario 
        if ( [nombre, propietario, email, fecha, sintomas].includes('')){
            console.log("formulario incompleto")
            setError(true);
            return
        } 
        setError(false)

        const objPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas,
           
        }

        if(paciente.id){
            //editando registro
            objPaciente.id = paciente.id
            const pacientesACtualizados = pacientes.map(p =>
                p.id === paciente.id ? objPaciente : p
            )

            setPacientes(pacientesACtualizados)
            setPaciente({})
        }else{
            //insertando registro
            objPaciente.id = generarId()
            setPacientes([...pacientes, objPaciente])

        }

   
        //reinicar forma despues de agregar 
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');

        console.log ("enviando formulario")
    }
    return (
        <div className="w-1/2">
           <h4 className="text-2xl text-center">Seguimiento a pacientes</h4> 
            <p className="text-1xl text-center"> Añade pacientes y <span  className="text-yellow-300"> administralos</span></p>
        <form
            onSubmit={hanldeSubmit} 
            className="bg-slate-700 rounded-lg shadow-md m-4 "  >
            <div  className="mx-2 my-4 p-4" >
                <label 
                    className="block" 
                    htmlFor='mascota'
                >
{error &&  
<Error mensaje="Todos los campos son obligatorios"/>
 }

                    Nombre Mascota:
                </label>
                
                <input 
                    id= "mascota"
                    type="text" 
                    className="border-2 p-0 w-full placeholder-gray-400 rounded-md  " 
                    placeholder="Nombre de la mascota"
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                    
                    >
                </input>
                
                <label 
                    className="block" 
                    htmlFor='propietario'
                     
                >
                    Nombre Propietario:
                </label>
                <input 
                    id= "propietario"
                    type="text" 
                    className="border-2 p-0 w-full placeholder-gray-400 rounded-md  " 
                    placeholder="Nombre del propietario"
                    value={propietario}
                    onChange={(e)=>setPropietario(e.target.value)}
                 
                    >
                   
                </input>

                <label 
                    className="block" 
                    htmlFor='mascota'
                >
                    email:
                </label>
                <input 
                    id= "email"
                    type="text" 
                    className="border-2 p-0 w-full placeholder-gray-400 rounded-md  " 
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  
                    >
                </input>
              <label 
                    className="block" 
                    htmlFor='alta'
                >
                    Fecha consulta:
                </label>
                <input 
                    id= "fecha"
                    type="date" 
                    className="border-2 p-0 w-full placeholder-gray-400 rounded-md  " 
                    placeholder="Fecha ingreso"
                    value={fecha}
                    onChange={(e)=>setFecha(e.target.value)}
                  
                    >
                </input>
                <label 
                    className="block" 
                    htmlFor='sintomas'
                >
                    Sintomas:
                </label>
                <textarea 
                    id= "sintomas"
                   
                    className="border-2 p-0 w-full placeholder-gray-400 rounded-md  " 
                    placeholder="Describe lso sintomas"
                    value={sintomas}
                    onChange={(e)=>setSintomas(e.target.value)}
                  
                    >
                </textarea>
                <input 
                type="submit"
                value={
                    paciente.id ? "Editar paciente" :  "Agregar paciente"
                }
                className=" bg-indigo-500 text-white w-full hover:bg-indigo-800 cursor-pointer transition-colors rounded-md mt-2"
                />
               
            </div>
        </form>
        
        
        </div>
    )
}
