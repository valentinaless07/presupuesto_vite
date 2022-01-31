import React from 'react';

export const ControlPresupuesto = ({presupuesto}) => {

  const formatearCantidad = (value) => {
    
  var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  });

  return formatter.format(value); 
  }

  return (
  <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Grafica aquí</p>
      </div>

      <div className='contenido-presupuesto'>

        <p>
          <span>Presupuesto:</span> {formatearCantidad(presupuesto)} 
        </p>

        <p>
          <span>Disponible:</span> {formatearCantidad(0)} 
        </p>

        <p>
          <span>Gastado:</span> {formatearCantidad(0)} 
        </p>

      </div>
  </div>
  )
};
