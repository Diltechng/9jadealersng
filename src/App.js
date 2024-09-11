//import { Route, Router, Routes } from 'react-router';
import './App.css';
//pimport Sidebar from './hearders/images/Sidebar';
//import Footer from './footer/Footer.component';
import Navbar from './hearders/Navbar.component';
import Home from './home/Home.';
import SignIn from './components/SignIn';
//import Categories from './home/Categories/Categories';
import {Routes, Route} from 'react-router-dom';
import Single from './home/Single';
//import { BrowserRouter } from 'react-router-dom';
//import Categorymenu from './home/Categories/Categorymenu';
const App = () => {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='Single' element={<Single/>}/>
        <Route path='SignIn' element={<SignIn/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
