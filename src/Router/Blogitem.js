import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Blogitem() {
let[single,setsingle]=useState('')
let{id}=useParams()

useEffect(()=>{

    async function item(){
        let datavalue=await axios.get("https://jsonplaceholder.typicode.com/posts/"+id)
        console.log(datavalue.data)
        
        setsingle(datavalue.data)
    }
    item()
},[])

  return (
    <div>
        <h2>{single.title}</h2>
        <p>{single.body}</p>
    </div>
  )
}

export default Blogitem