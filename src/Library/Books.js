import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Outlet}  from 'react-router-dom'
function Books(props) {
  let [bookdata, setdata] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      let datavalue = await axios.get(
        `https://openlibrary.org/subjects/${props.type}.json?limit=20`
      );
      console.log(datavalue.data.works);
      setdata(datavalue.data.works);
    }
    fetchdata();
  },[]);

  return (
    <div>
      <Outlet/>
      {
        <div className="item">  
          {bookdata.map((item) => {
            
            return (
               
                <div>

                  <img
                    src={`https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`}
                    alt=""
                    />

                    <h2>{item.title}</h2>
                  <p><Link to={`/Books/${item.cover_edition_key}`}>{`Author:${item.authors[0].name}`}</Link></p>

                 
                </div>
              
            );
              
          })}
        </div>
      }
    <Outlet/>
    </div>
  );
}

export default Books;
