

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Titulo from './components/Titulo/Titulo'
import './App.css'

function App() {
  
  

  return (
    <>
      <NavBar/>
      <Titulo nombre={'Alan'} apellido={'Vilche'} ></Titulo>
      <ItemListContainer greeting = {"Artículos Disponibles"} />


    </>
  )
}

export default App
