import React,{useContext} from 'react'
import TempContext from './TempContext'

function Celsius() {
    let value=useContext(TempContext)
  return (
    <div>

<form action="/" >
    <input type='text' placeholder='Enter temp in F' value={value} /> 
    <button type='submit'> click here</button>
</form>

    </div>
  )
}

export default Celsius