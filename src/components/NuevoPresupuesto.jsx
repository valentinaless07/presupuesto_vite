import React from 'react';
import { useState } from 'react';
import { Mensaje } from './Mensaje';


export const NuevoPresupuesto = ({presupuesto, setPresupuesto , isValidPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState("")

   const handlePresupuesto = (e) => {
       e.preventDefault()
       if(presupuesto && presupuesto > 0 ){
        setMensaje("")
        setIsValidPresupuesto(true)

       }
       else{
        setMensaje("Presupuesto no válido") 
       }
       
   }

  return (
  <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={e => handlePresupuesto(e)} className='formulario'>
        <div className='campo'>
            <label>Definir Presupuesto</label>
            <input
            className='nuevo-presupuesto'
            type="number"
            placeholder='Añade tu Presupuesto'
            value={presupuesto}
            onChange={e => setPresupuesto(Number(e.target.value)) }
            />
        </div>
        <input type="submit" value="Añadir"/>

      </form>
      {
          mensaje && <Mensaje tipo={"error"}>{mensaje}</Mensaje>
      }
  </div>
  )
};
