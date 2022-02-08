import React from 'react';
import { ControlPresupuesto } from './ControlPresupuesto';
import { NuevoPresupuesto } from './NuevoPresupuesto';


export const Header = ({presupuesto, setGastos, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos}) => {
  return (
  <header>
      <h1>Planificador de Gastos</h1>
      {isValidPresupuesto ? <ControlPresupuesto setPresupuesto={setPresupuesto} setGastos={setGastos} gastos={gastos} presupuesto={presupuesto} setIsValidPresupuesto={setIsValidPresupuesto}/> : 
      <NuevoPresupuesto
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
      />
}
  </header>
  )
};
