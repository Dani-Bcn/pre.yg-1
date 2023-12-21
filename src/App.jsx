import './App.css'
import Tienda from './Tienda'
import Navbar from './Navbar'
import MenuResponsive from './MenuResponsive'
import { useState } from 'react'

function App() {

const [stateMenuResp, setStateMenuResp] = useState(false)

  const openMenuResp =(()=>{
    console.log(stateMenuResp)
  })

  return (
    <main className='w-full h-full flex '>
     <Tienda/>
     <Navbar 
     openMenuResp={openMenuResp}
     stateMenuResp={stateMenuResp}
     setStateMenuResp={setStateMenuResp}
     />
     <MenuResponsive 
      stateMenuResp={stateMenuResp}
      setStateMenuResp={setStateMenuResp}
     />
    
    </main>
  )
}

export default App
