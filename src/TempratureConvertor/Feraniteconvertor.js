import React from 'react'

function Feraniteconvertor() {
    let [fvalue,setfvalue]=useState()
    function setcvalue(){
    setfvalue(c*9/5 +32)
     
    }
 
   return (
     <div>
 
 <form action="/" >
     <input type='text' placeholder='Enter temp in F' value={fvalue} onChange={fhandlechange} /> 
     <button type='submit' onClick={setcvalue} > click here</button>
 </form>
 
     </div>
   )
 }

export default Feraniteconvertor