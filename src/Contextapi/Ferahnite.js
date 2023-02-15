import React, { useState } from 'react'
import TempContext from './TempContext.js'

function Ferahnite() {
    let [input,setinput]=useState()
    let [fvalue,setfvalue]=useState()


let fervalue=(e)=>{
e.preventDefault()
setfvalue(input*9/5+32)
console.log(fvalue)
 

}
let handlechange=(e)=>{
    setinput(e.target.value)
}

  return (
    <div>
        
<TempContext.Provider value={fvalue}>
<form action="/" onSubmit={fervalue}>
    <input type='text' placeholder='Enter temp in c' value={input} onChange={handlechange}/> 
    <button type='submit'> click here</button>
</form>
</TempContext.Provider>




    </div>
  )
}

export default Ferahnite