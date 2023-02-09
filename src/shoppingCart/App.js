import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Cart.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Cart from './Cart'
import Cartitem from './Cartitem'


function App() {
  return (<>
   <BrowserRouter>
   <Routes> 
    
  <Route path='/' element={<Home/>}>
  <Route index element={<Cart/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Cartitem' element={<Cartitem/>}/>
  </Route>

   </Routes>
   </BrowserRouter>

 
  </>

  )
}

export default App