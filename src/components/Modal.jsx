import React from 'react';
import cerrarBtn from "../img/cerrar.svg"
import {Mensaje} from "../components/Mensaje"
import { useState, useEffect } from 'react';

export const Modal = ({setModal, setGastoEditar, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastos, gastos}) => {

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setNombreGasto(gastoEditar.nombreGasto)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  }, [])


    const ocultarModal = () => {
        setAnimarModal(false)
        
        setTimeout(() => {
            setModal(false)
            setGastoEditar({})
          }, 300)
    }

    const [nombreGasto, setNombreGasto] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [categoria, setCategoria] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [id, setId] = useState("")
    const [fecha, setFecha] = useState("")


    const editarGasto = () => {
      let gastosFiltered = gastos.filter(el => el.id !== gastoEditar.id)
      gastosFiltered.push({id: gastoEditar.id, fecha: gastoEditar.fecha, nombreGasto, cantidad, categoria})
      setGastos(gastosFiltered)
    }
    

    const handleSubmit = (e) => {
      e.preventDefault()
      if(nombreGasto.length === 0){
        setMensaje("El nombre del gasto es obligatorio")
      }
      else if(cantidad === ""){
        setMensaje("La cantidad es obligatoria")
      }
      else if (categoria === ""){
        setMensaje("La categoria es obligatoria")
      }

      else{
        guardarGasto({nombreGasto, cantidad, categoria ,id, fecha})
        setMensaje("")
        setCategoria("")
        setCantidad("")
        setNombreGasto("")
      }
      
    }



  return (
  <div className='modal'>
      <div className='cerrar-modal'>
          <img
          src={cerrarBtn}
          onClick={ocultarModal}
          alt='Cerrar modal'
          />
      </div>
      
      <form onSubmit={e => handleSubmit(e)} className={`formulario ${animarModal ? "animar" : "cerrar"} `}>
        <legend>{gastoEditar.nombreGasto ? "Editar gasto" : "Nuevo Gasto"}</legend>
        {
          mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>
        }

        <div className='campo'>
          <label htmlFor='nombre'>Nombre Gasto</label>

          <input 
          id="nombre"
          type="text"
          placeholder='Añade el nombre del gasto'
          value={nombreGasto}
          onChange={(e) => {setNombreGasto(e.target.value)}}
          />
        </div>

        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad</label>

          <input 
          id="cantidad"
          type="number"
          placeholder='Añade la cantidad'
          onChange={(e) => {setCantidad(Number(e.target.value))}}
          value={cantidad}
          />
        </div>

        <div className='campo'>
          <label htmlFor='categoria'>Categoria</label>

          <select value={categoria} id="categoria" onChange={(e) => {setCategoria(e.target.value)} }>
            <option value="">--- Seleccione ---</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
         
        </div>

        <input 
        type="submit"
        value={gastoEditar.nombreGasto ? "Guardar cambios" : "Añadir Gasto"}
        />

      </form>

  </div>
  )
};
