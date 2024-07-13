 import { Viewcart } from './Viewcart'
import { Header } from './Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Home} from './Home'
import { createContext, useState } from 'react';
export const cartContext=createContext();
function App() {
  const [cart,setCart]=useState([]);

  return (
    <>
      <cartContext.Provider value={{cart,setCart}}><BrowserRouter>
      <Header cart={cart}/>
      <div className="container">  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Viewcart />}  />
        </Routes>
      </div> 
      </BrowserRouter>
      </cartContext.Provider>
    </>
  )
}

export default App
