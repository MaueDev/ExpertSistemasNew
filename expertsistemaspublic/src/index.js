import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./component/css/bootstrap.min.css"

//Favicon//
import Favicon from "./imagem/svgicone.svg";
document.querySelector("#FaviconPage").href = Favicon
//Favicon//

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

