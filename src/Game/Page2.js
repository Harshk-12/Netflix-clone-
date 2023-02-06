
import React from 'react'
import { useState } from 'react'


function Page2(){
  let[active1,setactive1]=useState(false)
  let[clock,setclock]=useState(0) 
  let[images, setimages]=useState([])
  // let [images1, setimages1]=useState()
  let img1='game_images/png-transparent-elon-musk-tesla-motors-chief-executive-falcon-heavy-business-business-face-people-head-thumbnail-removebg-preview.png '

  let photo=<img src='game_images/png-transparent-elon-musk-tesla-motors-chief-executive-falcon-heavy-business-business-face-people-head-thumbnail-removebg-preview.png '  alt=''></img> 

  function timer(){
    setInterval(() => {
      setclock( clock+=1)
    }, 1000);
     }
     

  function hide2(e){ 
    e.preventDefault()
    setactive1(true)
    timer()
    generateimg()
        
   }
   function generateimg(){
    setInterval(()=>{
      setimages(...images+photo)
      // images.map((eachimage)=>{
      //   setimages1(eachimage)
      // }
      // )
        
    },1000)
   }

    return(
<>
 {/* conatiner-2 */}
 <div className={active1===true?'hide':'page2-container '}>
        
        
        <div className='page2-content'>  
        
        <p> Which cheems you want to catch? </p>
        <a href='' onClick={ hide2} ><img src='game_images/png-transparent-elon-musk-tesla-motors-chief-executive-falcon-heavy-business-business-face-people-head-thumbnail-removebg-preview.png'/></a>
        <a href='' onClick={hide2} ><img src='game_images/images-removebg-preview (1).png'/> </a>
        <a href='' onClick={hide2} > <img src='game_images/images-removebg-preview.png'/></a>
        </div>
        
      </div> 
        {/* page3-container */}
        <div className='page3-container' >
          
          <p className='clock'>
            {"Time:"+clock+"sec"}
          </p>
         {/* images-section */}
         <div className='page3-child-container'>  
          
            <div > 
         {images}
            </div>



         </div>
        </div>

        </>
    )
}
export default Page2
