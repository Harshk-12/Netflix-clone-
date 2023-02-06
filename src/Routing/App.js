import React from 'react'
import Main from './Main'
import About from './About'
import Blog from './Blog'
import Services from './Services'
import Contact from './Contact'
import Notfound from './Notfound'
import Blogchild from './Blogchild'
import Bloglayout from './Bloglayout'
import './style.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';  


function App() {
  return (<>
<BrowserRouter>
<Routes>
    <Route path='/' element={<Main/>}>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Blog' element={<Bloglayout/>}>
          <Route  index element={<Blog/>}></Route>
          {/* <Route  path=':id' element={<Blogchild/>}></Route> */}
          <Route path=':id' element={<Blogchild/>}></Route>

    </Route>
    <Route path='/Services' element={<Services/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    </Route>
    <Route path='/*' element={<Notfound/>}></Route>
</Routes>
</BrowserRouter>

   </>)
}

export default App