import React from 'react';
import cerrarBtn from "../img/cerrar.svg"

export const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
          }, 300)
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
      
      <form className={`formulario ${animarModal ? "animar" : "cerrar"} `}>
        <legend>Nuevo Gasto</legend>
      </form>

  </div>
  )
};
