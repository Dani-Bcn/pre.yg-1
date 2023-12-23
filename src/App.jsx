import './App.css'
import Tienda from './Tienda'
import Navbar from './Navbar'
import MenuResponsive from './MenuResponsive'
import Carousel from './Carousel'
import Fresado from './Soluciones/Fresado'
import { useState } from 'react'

function App() {

const [stateMenuResp, setStateMenuResp] = useState(false)

  const openMenuResp =(()=>{
    console.log(stateMenuResp)
  })

  return (
    <main className='flex flex-col'>
     <Tienda/>
     <Navbar 
     openMenuResp={openMenuResp}
     stateMenuResp={stateMenuResp}
     setStateMenuResp={setStateMenuResp}
     />
     <Carousel/>
   <MenuResponsive 
      stateMenuResp={stateMenuResp}
      setStateMenuResp={setStateMenuResp}
     /> 
    
    </main>
  )
}

export default App