import React from 'react'
import { BrowserRouter ,Routes,Route, Outlet} from 'react-router-dom'
import Books from './Books.js'
import Singlebook from './Singlebook'
import Blankpage from './Blankpage.js'
import Bookshome from './Bookshome.js'
import Contact from '../Router/Contact.js'
import About from './About.js'
import Services from './Serivces.js'
import Notfound from './Notfound.js'
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

   <Route path='books' element={<Blankpage/>}>
            <Route  path='' element={<Books type='drama'/>}> 
            <Route path='' element={<Books type='love'/>}/>
  <Route path='' element={<Books type='fiction'/>}/> 
          <Route path=''  element={<Books type='action'/>}/>   
          </Route> 
            

          <Route  path=':id' element={<Singlebook/>}> </Route>
          <Route path='*' element={<Notfound/>}></Route>
   </Route>
   
</Route>

</Routes>
</BrowserRouter>      

<Outlet/>


    </div>
  )
}

export default Library