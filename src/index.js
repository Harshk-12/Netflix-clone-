import React from 'react';
import ReactDOM from 'react-dom/client';

// import Fetchdata from './Fetchdata/Fetchdata.js'
// import RandomData from './RandomData/RandomData.js';
// import  Tesla from './Tesla/Tesla.js';
// import Axios from './axios/axios.js'
// import Movie from './MovieDb/Movie.js';
// import Todo from './Todo/Todo.js';
import Netflix from './Netflix/Netflix.js'
// import Game from './Game/Game.js'
// import Router from './Router/Router.js'
// import App from './Routing/App.js'
// import Library from './Library/Library.js'
// import Page1 from './CoordinateChecker/page1';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
  <React.StrictMode>
  
{/* <Tesla/> */}
{/* <RandomData/> */}
{/* <Axios/> */}
{/* <Fetchdata/> */}
 {/* <Movie/> */}
 {/* <Todo/> */}
 <Netflix/>
 {/* <Game/> */}
 {/* <Page1/> */}
{/* <App/> */}
{/* <Router/> */}
{/* // <Library/> */}
  </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

