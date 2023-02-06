import React from 'react'
import { useNavigate } from 'react-router-dom'

function Notfound() {
    let redirect=useNavigate()
    setTimeout(()=>{
        
        redirect('/')
    },2000)

  return (
    <div className='notfound-parent'>   
    </div>
  )
}

export default Notfound