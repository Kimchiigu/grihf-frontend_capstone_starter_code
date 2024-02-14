import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_up from './Components/Sign_up/Sign_up';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
                <Route path="/" element={<Landing_Page/>}/>
                <Route path="/sign-up" element={<Sign_up/>}/>
                <Route path="/login" element={<Login/>}/>
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;
