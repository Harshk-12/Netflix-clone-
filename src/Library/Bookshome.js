import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Bookshome() {
  return (
    <>
    <div className='container'>
      <ul className='navbar'>
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/Books'> Books</Link></li>
        <li> <Link to='/About'> About us </Link></li>
        <li> <Link to='/Contact'> Contact us</Link></li>
        <li> <Link to='/Services'> Services </Link></li>
        
      </ul>
   

    </div>
      <Outlet/>
    </>
  )
}

export default Bookshome