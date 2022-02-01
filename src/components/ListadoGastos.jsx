import React from 'react';
import { Gasto } from './Gasto';

export const ListadoGastos = ({gastos, setGastoEditar, setGastos}) => {
  return (
    
  <div className='listado-gastos contenedor'>
      {
          gastos.length ?
          <h2>Gastos</h2>
          :
          <h2>No hay gastos</h2>
      }
      {
          gastos.map(el => <Gasto gastos={gastos} setGastos={setGastos} key={el.id} nombreGasto={el.nombreGasto} cantidad={el.cantidad} categoria={el.categoria} id={el.id} fecha={el.fecha} setGastoEditar={setGastoEditar}/>)
      }

  </div>

  )
};
