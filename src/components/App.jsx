import React from "react";
import Home from "./Home";
import Technology from "./Technology";
import Crew from "./Crew";
import Destination from "./Destination";

import Navbar from "./Navbar"

import { Routes, Route } from "react-router-dom"

function App() {
   return (
      <>
      
      <Navbar />

         <Routes>
            <Route  path="/" element={<Home />} />

            <Route path="/Destination" element={<Destination />} />

            <Route path="/Crew" element={<Crew />} />

            <Route path="/Technology" element={<Technology />} />

         </Routes>
      </>

   )
}

export default App;