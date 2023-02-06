import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Blog() {
    const[array,setarray]=useState([])
useEffect(()=>{

async function Fetchdata(){
    let response=await axios.get('https://jsonplaceholder.typicode.com/posts')
    setarray(response.data)
    console.log(array)

    
}
Fetchdata()

},[])




  return (
    <div>
      <h1>Blog</h1>
      {  array.map((item,index)=>{
return(
    <>
    <div key={index} >
<h2>{item.id} </h2>
<h2><Link to={`/Blog/${item.id}`}>{item.title}</Link></h2>
<p>{item.body}</p>
</div>
        </>
)
        
      })}
    </div>
  )
}
//https://jsonplaceholder.typicode.com/post
export default Blog
