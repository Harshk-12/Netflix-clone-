
import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import Blogitem from './Blogitem'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Notfound from './Notfound'
import Blankblog from './Blankblog'
import './Router.css'

function Router() {
   

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Blog' element={<Blankblog/>}>
          <Route  index element={<Blog/>}></Route>
          {/* <Route  path=':id' element={<Blogchild/>}></Route> */}
          <Route path=':id' element={<Blogitem/>}></Route>
          </Route>
{/* 
        <Route path='/Blog' element={<Blankblog/>}>
          <Route index element={<Blog/>}></Route>
          <Route path=':id' element={<Blogitem/>}></Route>
        </Route> */}
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router