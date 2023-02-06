import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useParams}  from 'react-router-dom'

function Singlebook() {
    let {id}=useParams()
    let[single,setsingle]=useState('')
    
{
    useEffect(()=>{
        
        async function mydata(){
            
            let singledata=await axios.get( 'https://openlibrary.org/books/'+id+'.json')
            console.log(singledata)
            setsingle(singledata.data)
            console.log(single)
        }
        
        mydata()
    },[])
}


    
return (
    <>
    {/* <h2>{single.l}</h2> */}
    <div className="single-item">

    <div >
    <img src={`https://covers.openlibrary.org/b/id/${single.covers}-L.jpg`} alt="" />  
    <h1>{single.title}</h1>
    <h4>{`Publisher:${single.publishers}`}</h4>
    </div>

    </div>
     {/* <p>{single.author[0].name}</p>  */}
    
    
    
    </>
  )
}

export default Singlebook