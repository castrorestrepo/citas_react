import React from 'react'

export default function Paciente({paciente,setPaciente,eliminarPaciente}) {

    const handleEliminar = () =>{
        const respuesta = confirm("Seguroq ue deseas elimianr la cita?");
        if (respuesta){
         eliminarPaciente(paciente.id)
        }
    }

    return (
        <div className="bg-slate-700 rounded-lg shadow-md ">
            <p className="font-bold m-4 text-gray-400 uppercase">Mascota:
            <span className="font-normal normal-case"> {paciente.nombre}</span>
        </p>
        <p className="font-bold m-4 text-gray-400 uppercase">Propietario:
            <span className="font-normal normal-case"> {paciente.propietario}</span>
        </p>
        <p className="font-bold m-4 text-gray-400 uppercase">Email:
            <span className="font-normal normal-case"> {paciente.email}</span>
        </p>
        <p className="font-bold m-4 text-gray-400 uppercase">Fecha Consulta:
            <span className="font-normal normal-case"> {paciente.fecha}</span>
        </p>
        <p className="font-bold m-4 text-gray-400 uppercase">Sintomas:
            <span className="font-normal normal-case"> {paciente.sintomas}</span>
        </p>
        <div className="flex justify-between mt-1">
            <button
            type='button'
            className=" py-1 px-5 bg-indigo-500 text-white hover:bg-indigo-800 cursor-pointer transition-colors rounded-md mt-2"
            onClick={()=> setPaciente(paciente)}
            >
                Editar
            </button>
            <button
             onClick= {handleEliminar}
            type='button'
            className="py-1 px-5  bg-red-500 text-white   hover:bg-indigo-800 cursor-pointer transition-colors rounded-md mt-2"
            >
                Eliminar
            </button>
        </div>
        </div>
    )
}
