import React from 'react'
import { useState } from 'react'
import'./Game.css'
function Page1() {
  let [active, setactive]=useState(false)

 function hide1(e){ 
  setactive( true)
  
 }  


  

  return (
  <>
    <div className={active===true?'hide':'page1-container '}>
        
        
        <div className='page1-content'>  
        
        <p> Cath the Cheems  </p>
        <button  type='submit' onClick={hide1}  className='btn1'> Play Game</button>
        </div>
        
        
      </div>

       
      
        </>
  )
}

export default Page1