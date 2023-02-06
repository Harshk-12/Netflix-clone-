import axios from 'axios'
import React, {useState, useEffect } from 'react'
import './Fetchdata.css'


function Fetchdata() {
 const[item,setitem]=useState([])

 useEffect(()=>{
     
     axios.get( "https://jsonplaceholder.typicode.com/photos")
     .then((response)=>{
        // setitem(response.data.)
        setitem(response.data)
        // console.log(item[1])
        console.log(response)
        
      
     })
     .catch((error)=>{
      console.log(console.error)
     })

     
 },[])

  return (
    
<div>

 
  <div >
    <h1>Ecommerce</h1>
    <div className='itemparent' >
    {item.map(itemchild => (
     
        <div className='itemchild'>
          <img className='image' src={itemchild.url}></img>
        <h3>{itemchild.title}</h3>
        </div>
      ))} 
      </div>
  </div>


</div>
   
  )
}

export default Fetchdata