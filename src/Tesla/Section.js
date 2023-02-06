import React from 'react'


function Section(props) {
   

  return (
  <>
    <section className='slide-1' style={{backgroundImage:`url("tesla_images/${props.backgroundImage}")`}}>

<div className='heading-parent'>
     <div className='heading'>
        <h1>{props.modelName}</h1>
        <a href="#">{props.demo}</a>
     </div>
     
     {/* btns */}
     <div className= "btns flex ">
        <a href="#" >{props.btn1}</a>
        {/* <a href="#" >{props.btn2}</a> */}
        {props.btn2 && <a href="">{props.btn2}</a>}
     


     </div>
     {/* drop-down-btn */}
     
      <div className='dropbtn' >
    {props.arrow && <img src="tesla_images/down-arrow.svg"/>}

        {/* <a href=""><img src={"tesla_images/"+ props.img }/> </a> */}
          </div>
   
     </div>




    </section>
    
    
    
    </>


  )
}

export default Section