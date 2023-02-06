import React from 'react'
import { useNavigate } from 'react-router-dom'

function Notfound() {
  let navigate=useNavigate()
setTimeout(()=>{
navigate('/Blog/2')
},2000)
  return (
    <div> ERROR 404 NOT FOUND</div>
  )
}

export default Notfound