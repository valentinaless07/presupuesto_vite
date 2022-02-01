import React from 'react';
import {LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from "react-swipeable-list"
import PropTypes from 'prop-types';
import "react-swipeable-list/dist/styles.css"
import { formatearFecha } from '../helpers';
import iconoAhorro from "../img/icono_ahorro.svg"
import iconoCasa from "../img/icono_casa.svg"
import iconoComida from "../img/icono_comida.svg"
import iconoGastos from "../img/icono_gastos.svg"
import iconoOcio from "../img/icono_ocio.svg"
import iconoSalud from "../img/icono_salud.svg"
import iconoSuscripciones from "../img/icono_suscripciones.svg"


const diccionarioIconos = {
  salud: iconoSalud,
  ahorro: iconoAhorro,
  casa: iconoCasa,
  comida: iconoComida,
  gastos: iconoGastos,
  suscripciones: iconoSuscripciones,
  ocio: iconoOcio

}



export const Gasto = ({nombreGasto, cantidad, categoria, id, fecha, setGastoEditar, gastos, setGastos}) => {

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => {setGastoEditar({nombreGasto, cantidad, categoria, id, fecha})}}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const handleDelete = () => {
    let arrayFilter = gastos.filter(el => el.id !== id)
    setGastos(arrayFilter)
  }
  
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={() => {handleDelete()}}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )


  return (
    <SwipeableList>
      <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
  <div className='gasto sombra'>
      <div className='contenido-gasto'>
          <img 
          src={diccionarioIconos[categoria]}
          alt="icono-gastos"
          />
        <div className='descripcion-gasto'>
            <p className='categoria'>{categoria}</p>
            <p className='nombre-gasto'>{nombreGasto}</p>
            <p className='fecha-gasto'>
                Agregado el: {" "}<span>{formatearFecha(fecha)}</span>
            </p>
        </div>
      </div>
        <p className='cantidad-gasto'>${cantidad}</p>
  </div>
    </SwipeableListItem>
  </SwipeableList>
  )
};
