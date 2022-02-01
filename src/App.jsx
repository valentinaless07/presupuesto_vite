import { Header } from "./components/Header"
import { useEffect, useState } from "react"
import iconoNuevoGasto from "./img/nuevo-gasto.svg"
import { Modal } from "./components/Modal"
import { generarId } from "./helpers"
import { ListadoGastos } from "./components/ListadoGastos"





function App() {
  
  const [presupuesto, setPresupuesto] = useState("")
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])
  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
      setTimeout(() => {
  
        setAnimarModal(true)
      }, 300)
    }
  }, [gastoEditar])

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
      />
      {isValidPresupuesto && (
        <>
        <main>
          <ListadoGastos setGastos={setGastos} gastos={gastos} setGastoEditar={setGastoEditar}/>
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

      {modal && <Modal gastos={gastos} setGastos={setGastos} setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal} guardarGasto={guardarGasto} gastoEditar={gastoEditar}/>}

    </div>
  )
}

export default App
