import React from "react";
import {NavLink} from "react-router-dom"

function Home(){
    return (
        <div className="main">
        
        <main className="container center">
        <div className="heading">
        <h2 className="first-line">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="second-line">
          SPACE
        </h1>
        <p className="para">
    
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
        
        </p>
      </div>
      <NavLink to="/Destination" className="explore-div">
      <div className="explore center">
        EXPLORE
      </div>
      </NavLink>
      </main>
        </div>
    )
}

export default Home;