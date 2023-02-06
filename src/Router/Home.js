import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <ul>
        <li><Link to='/'>Home</Link></li> 
       <li><Link to='/About'>About</Link></li>
        <li><Link to='/Services'>Services</Link></li>
        <li><Link to='/Blog'>Blog</Link></li>
        <li><Link to='/ Contact'>Contact</Link></li>



    </ul>
        



    </div>
  )
}


export default Home