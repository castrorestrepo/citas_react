import React from 'react'
import Paciente from './Paciente'
import { useEffect } from 'react'

export default function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

 
    useEffect(() => {
        console.log('se a agregado un nuevo paciente')
    }, [pacientes])
    return (
        <div className="md:w-1/2">
            <h2>Listado de pacientes</h2>

            { pacientes && pacientes.length ? 
            <div>
            <p>Administra tus pacientes y citas</p>
       
       {pacientes.map((paciente)=> {
           return(
                <Paciente 
                key={paciente.id}
                paciente = {paciente}
                setPaciente = {setPaciente}
                eliminarPaciente ={eliminarPaciente}
                ></Paciente>
           )
              })}
       </div>
            : "no hay pacientes" }





</div>
    )
}
