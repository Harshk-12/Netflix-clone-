import React, { useState } from 'react'
import "./style.css"

function Page1() {
let [x,setx]=useState(0)
let [y,sety]=useState(0)

function coordinates(e){
  setx(e.nativeEvent.offsetX)
  sety(e.nativeEvent.offsetY)
  console.log(e.nativeEvent.offsetX)
}

function clear(e){
setx(0)
sety(0)
}





  return (
    <div>

      <div className='parent'>

        <div className='top'>
          <div className='coordinates'>Coordinates: ({x} , {y})</div>
          <a href="#"><button  onClick={clear}>Clear</button></a>
        </div>

        <div className='bottom' onMouseMove={coordinates} ></div>

      </div>




    </div>
  )
}

export default Page1