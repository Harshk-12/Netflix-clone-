import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './RandomData.css'
// import axios from 'axios'
// import axios from '../axios/axios'

function RandomData() {

const [products,setproduct]=useState([])

  useEffect(()=>{

    axios.get('https://dummyjson.com/products')
    .then((response)=>{
      setproduct(response.data.products)
      console.log(products)
     
    })
    .catch(error=>console.log(error))

  },[])
 
   
    
  



  return (
    <>
    
    <h1 style={{marginLeft:"650px", marginBlock:"20px"}}>RandomData</h1>
    <img src={products.thumbnail}></img>
      
    <div className='products-parent'>
     {
       products.map((item)=>{
             return (
             
              <div className='products-child'>
              <h1>{item.brand}</h1>
              <img src= {item.thumbnail} ></img>
              <h3>{item.title}</h3>
              
              </div>
             
        


             )
       })


    }
    </div>
   
    </>


  )
}

export default RandomData