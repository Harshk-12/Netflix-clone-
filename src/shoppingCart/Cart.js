import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Cart() {
    let [item,setitem]=useState([])
    let [bucket,setbucket]=useState([(sessionStorage.getItem('bucketvalue')===null)?[]:JSON.parse(sessionStorage.getItem('bucketvalue'))])

    useEffect( ()=>{

      async function fetchdata(){
        
        let data=await axios.get("https://fakestoreapi.com/products/")
        // let data2=await data.json()
        
        console.log(data.data)
        setitem(data.data)
        
      }
      fetchdata()
    } ,[])

    function addtocart(e,indexvalue){
      e.preventDefault()
      setbucket([...bucket,indexvalue])
      console.log(bucket )
      
    //  console.log(indexvalue) //on click index is given
    }
    useEffect(()=>{
  sessionStorage.setItem('bucketvalue', JSON.stringify(bucket))
    },[bucket])

  return (<>
  
       
    <div className='elements'>
      {
        item.map((a,index)=>{
          return(
        
            <div className='child-element'>

          <img src={a.image} alt="" />
        
         <a href='#' onClick={(e)=>{addtocart(e,index) }} className='add-link'>Add to Cart</a>
            </div>
          )
        })
        
      }

     
    </div>
    </>  )
}

export default Cart