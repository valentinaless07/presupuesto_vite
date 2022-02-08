import { Header } from "./components/Header"
import { useEffect, useState } from "react"
import iconoNuevoGasto from "./img/nuevo-gasto.svg"
import { Modal } from "./components/Modal"
import { generarId } from "./helpers"
import { ListadoGastos } from "./components/ListadoGastos"
import { Filtros } from "./components/Filtros"






function App() {
  
  const [presupuesto, setPresupuesto] = useState(
    localStorage.getItem("presupuesto") ?? 0  
    )
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos") ? JSON.parse(localStorage.getItem("gastos")) : []
  )
  const [gastoEditar, setGastoEditar] = useState({})
  const [filtro, setFiltro] = useState("")
const [gastosFiltrados, setgastosFiltrados] = useState([]);

    useEffect(() => {
      if(filtro){
       let gastosFilter = gastos.filter(el => el.categoria === filtro)
       setgastosFiltrados(gastosFilter)
      }
    }, [filtro]);
    

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
      setTimeout(() => {
  
        setAnimarModal(true)
      }, 300)
    }
  }, [gastoEditar])

  useEffect(() => {
    
    Number(localStorage.setItem("presupuesto", presupuesto?? 0))
  }, [presupuesto]);


  useEffect(() => {
    
     localStorage.setItem("gastos", JSON.stringify(gastos) ?? []) 
  }, [gastos]);
  

  useEffect(() => {
    
    const presupuestoLS = Number(localStorage.getItem("presupuesto", presupuesto?? 0))
    if(presupuestoLS > 0){
      setIsValidPresupuesto(true)
    }
  }, []);
  

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
    setTimeout(() => {

      setAnimarModal(true)
    }, 300)
  }


  const guardarGasto = (gasto) => {
    if(gasto.id){
      const gastosActualizados = gastos.map(el => el.id  === gasto.id ? gasto : el)
      setGastos(gastosActualizados)
      setGastoEditar({})
    }
    else{
      gasto.id = generarId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])
    }
    

    setAnimarModal(false)
    setTimeout(() => {
        setModal(false)
      }, 300)
    
  }

  return (
    <div className={modal ? "fijar" : "" }>
      <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
      gastos={gastos}
      setGastos={setGastos}
      />
      {isValidPresupuesto && (
        <>
        <main>
          <Filtros filtro={filtro} setFiltro={setFiltro}/>
          <ListadoGastos gastosFiltrados={gastosFiltrados} filtro={filtro} setGastos={setGastos} gastos={gastos} setGastoEditar={setGastoEditar}/>
        </main>
      <div className="nuevo-gasto"> 
        <img 
        src={iconoNuevoGasto}
        onClick={handleNuevoGasto}
        />
      </div>
        </>
      )
      }

      {modal && <Modal setGastoEditar={setGastoEditar} gastos={gastos} setGastos={setGastos} setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal} guardarGasto={guardarGasto} gastoEditar={gastoEditar}/>}

    </div>
  )
}

export default App
