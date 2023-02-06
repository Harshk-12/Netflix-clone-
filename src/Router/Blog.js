import axios from 'axios'
import React, { useEffect } from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'


function Blog() {
let [blogpage,setblogpage]=useState([])
useEffect(()=>{

  async function getdata (){
    let datavalue=await axios.get("https://jsonplaceholder.typicode.com/posts/")
    console.log(datavalue)
    setblogpage(datavalue.data)
  }
  getdata()
  
},[])

  return (
    <div >
      {
        blogpage.map((item)=>{
          return(  

<div className='blog'>

           {/* <Link to={`/Blog/${item.id}`}> <h1>{item.title}</h1></Link> */}
<h2><Link to={`/Blog/${item.id}`}>{item.title}</Link></h2>

            <p>{item.body}</p>
</div>

            )
        })
      }
    </div>
  )
}

export default Blog