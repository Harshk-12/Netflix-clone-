import React, { useState } from 'react'
import axios from 'axios'

function Axios() {

const[name, setname]=useState("")
const[img,setimg]=useState("")

function getRandomData(){
    axios.get('https://randomuser.me/api/')
    .then((response)=>{
      console.log( response.data.results) 
      setname(response.data.results.first+ " " + response.data.result.last)
      setimg(response.data.result.picture.large)

     })
}






  return (
<>

<h1>Get Random Data</h1>
<button onClick={getRandomData}>Random Data</button>
<img src={img} alt="" />
<h3>{name}</h3>





</>

  )
}

export default Axios