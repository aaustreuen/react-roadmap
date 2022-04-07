import React from 'react';
import './App.css'
import './Components/Navbar.css'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';
import Content from './Components/Content';



const App = () => {
    return ( 
    <BrowserRouter>
        <div className = 'app-page'>
        <div className ='header'>
        <Header/>
        </div> 
        <div className ="navbar">
        <Navbar/>
        </div>
        <div className ='content'>
        <Content/>
        </div> 
        <div className ='footer'>
        <Footer/>
       </div> 
       </div> 
       </BrowserRouter>
    )
}

export default App;