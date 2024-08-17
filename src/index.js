import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import reportWebVitals from './reportWebVitals';
//import EditorsSugg from './home/Editors-sugg/EditorsSugg';
//import Category from './home/Categories/Categorymenu';
import { BrowserRouter} from 'react-router-dom';
//import Latest from './latest/Latest.Component';
//import Categorymenu from './home/Categories/Categorymenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
