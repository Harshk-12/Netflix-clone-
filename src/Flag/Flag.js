import React, { useEffect } from 'react'
import axios from 'axios'
import {useState}  from 'react'
import './Flag.css'

function Flag() {
  let[name,setname]=useState('')
  let [flag, setflag]=useState([]) 
  


  
  async function Search(event){
      event.preventDefault()
   let flagdata=await axios.get("https://flagcdn.com/en/codes.json")
   setflag(Object.entries(flagdata.data))
   console.log(Object.entries(flagdata.data)) 

  }
  
 

  function handlechange(e){
   setname(e.target.value.toLowerCase())
   console.log(name)
   
 }
  
 





  return (  
    <>
    <div className='container'>
     
{
          flag.map((item)=>{ 
           return(
            <>
            
            <div className="header">

          
            
          { 
         
         ((name===item[1].toLowerCase())?<img src={`https://flagcdn.com/256x192/${item[0]}.png`} className='flag-img' />:'')
         
        }
            {
              ((name===item[1].toLowerCase())? <h1 className='flag-name'>{item[1]}</h1> :'')
            }
         
         </div>
           
          </>
           )})
           
           
} 
       

    
          
        <form onSubmit={(e)=>{Search(e)}}>

        <input type="text" placeholder={`Enter a Country's Name`} onChange={handlechange}  className='input'/>
        <input type='submit' value='Search Flag' className='btn'/>
        </form>
       
        



    </div>
    </>
  )
}

export default Flag