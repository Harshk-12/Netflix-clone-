// import React, { useState } from "react";
// import { useEffect } from "react";
// import {  useParams } from "react-router-dom";
// import axios from "axios";

// function Blogchild() {
//   const [single, setsingle] = useState("");
//   const { id } = useParams();
//   useEffect(() => {
//     async function blog() {
//       let response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts/" +id
//       );
//       setsingle(response.data);
//        console.log(single)
//     }
//     blog();
//   }, []);
//   return (
//     <div>
//       <h3>{single.title}</h3>
//       <p>{single.body}</p>
//     </div>
//   );
// }

// export default Blogchild;


import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';




function Blogchild(){
  let [single, setsingle]=useState('')
  let {id}=useParams()
  useEffect(()=>{
    async function fetch(){
      let resp=await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
      console.log(resp.data)
      setsingle(resp.data)
    }
    fetch()
  } ,[])
 
  return (
<>
{


<div>
<h2>{single.title}</h2>
<p>{single.body}</p>

</div>


  


}
</>
)
} 





  
export default Blogchild