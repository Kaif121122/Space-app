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
            <Route  path="/Space-app" element={<Home />} />

            <Route path="/Space-app/Destination" element={<Destination />} />

            <Route path="/Space-app/Crew" element={<Crew />} />

            <Route path="/Space-app/Technology" element={<Technology />} />

         </Routes>
      </>

   )
}

export default App;