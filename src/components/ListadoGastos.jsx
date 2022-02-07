import React from 'react';
import { Gasto } from './Gasto';

export const ListadoGastos = ({gastosFiltrados, filtro, gastos, setGastoEditar, setGastos}) => {
  return (
    
  <div className='listado-gastos contenedor'>
      

      {
          
          filtro ? (<>
          {
              gastosFiltrados.length ?<h2>Gastos</h2>: <h2>No hay gastos</h2>
          }
          {
              gastosFiltrados.map(el => <Gasto gastos={gastos} setGastos={setGastos} key={el.id} nombreGasto={el.nombreGasto} cantidad={el.cantidad} categoria={el.categoria} id={el.id} fecha={el.fecha} setGastoEditar={setGastoEditar}/>)
            }    
              </>
          )
          :
          (
        <>
        {
            
                gastos.length ?<h2>Gastos</h2>:<h2>No hay gastos</h2>
        }
        {
            gastos.map(el => <Gasto gastos={gastos} setGastos={setGastos} key={el.id} nombreGasto={el.nombreGasto} cantidad={el.cantidad} categoria={el.categoria} id={el.id} fecha={el.fecha} setGastoEditar={setGastoEditar}/>)
        }
        </>
          )
          
      }

  </div>

  )
};
