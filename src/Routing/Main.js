import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function Main() {
  return (
   <>
   
   <div>
    <ul >
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/About'>About</NavLink></li>
        <li><NavLink to='/Blog'>Blog</NavLink></li>
        <li><NavLink to='/Services'>Services</NavLink></li>
        <li><NavLink to='/Contact'>Contact</NavLink></li>
     
    </ul>
    <Outlet/>
   </div>



   
   
   
   </>
  )
}

export default Main