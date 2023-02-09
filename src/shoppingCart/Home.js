import React from 'react'
import { Outlet } from 'react-router-dom'

import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>

<div >
  <div className='dark'></div>
  <ul className='Navbar'>

    <div><li ><h1>Alibaba.com</h1></li></div>
    
    <div className='navlist'><li><NavLink to='./' className='link'>Home</NavLink></li>
    <li><NavLink className='link' to='/About'>About</NavLink></li>
    <li><NavLink  className='link' to='/Contact'>Contact us</NavLink></li>
    <li><NavLink className='link' to='/Cartitem'>Cart</NavLink></li>
    </div>
  </ul>


<Outlet></Outlet>

</div>
  
<outlet/>
    </div>
  )
}

export default Home