import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./Components/Login/Login"
import SignUp from "./Components/Sign_Up/Sign_Up"
import Navbar from "./Components/Navbar/Navbar"
import Layout from "./Components/Landing_Page/Landing_Page"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BrowserRouter>
            <Navbar/>
                <Routes>
                <Route path="/" element={<Layout/>}/>
                {/* <Route path="/Home" element={<Home/>} /> */}
                <Route path="/Login" element={<Login/>}/>
                <Route path="/SignUp" element={<SignUp/>}/>
                {/* <Route path="/InstantConsultation" element={<InstantConsultation/>} />
                <Route path="/BookingConsultation" element={<BookingConsultation/>} />
                <Route path="/Healthblog" element={<Healthblog/>} />
                <Route path="/SelfCheckup" element={<SelfCheckup/>} />
                <Route path="/ReviewForm" element={<ReviewForm/>}/>
                <Route path="/ProfileCard" element={<ProfileCard/>}/>
                <Route path="/ReportsLayout" element={<ReportsLayout/>}/> */}
                </Routes>
           {/* <Notification/> */}
          </BrowserRouter>
    </div>
  )
}

export default App
