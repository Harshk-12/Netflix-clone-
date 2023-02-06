import React from 'react'
import { BrowserRouter ,Routes,Route, Outlet} from 'react-router-dom'
import Books from './Books.js'
import Singlebook from './Singlebook'
import Blankpage from './Blankpage.js'
import Bookshome from './Bookshome.js'
import Contact from '../Router/Contact.js'
import About from '../Router/About.js'
import Services from '../Router/Services.js'
// import Bookshome from './Bookshome'

import  './Library.css'


function Library() {
  return (
    <div>
<BrowserRouter>
<Routes>

<Route path='/' element={<Bookshome/>}>  
   <Route path='Contact' element={<Contact/>}></Route>
   <Route path='Services' element={<Services/>}></Route>
   <Route path='About' element={<About/>}></Route>

   <Route path='/Books' element={<Blankpage/>}>
          <Route   element={<Books type='action'/>}>  
            <Route    element={<Books type='love'/>}/> 
            <Route  element={<Books type='fiction'/>}/> 
            <Route   index element={<Books type='drama'/>}/> 
            </Route>
          
         
          <Route  path=':id' element={<Singlebook/>}> </Route>
   </Route>
   
</Route>

</Routes>
</BrowserRouter>      

<Outlet/>


    </div>
  )
}

export default Library