import React, { useState } from 'react'

function Celciusconvertor() {
   let [fvalue,setfvalue]=useState()
   function converttoc(e){
    e.preventdefault()
   let f=(c*9/5 +32)
    
   }
   function fvalue(e){
    setfvalue(e.target.value)
   }

  return (
    <div>

<form action="/" onSubmit={converttoc}>
    <input type='text' placeholder='Enter temp in Fer' value={fvalue} onChange={fhandlechange} /> 
    <button type='submit'  > click here</button>
</form>

    </div>
  )
}

export default Celciusconvertor