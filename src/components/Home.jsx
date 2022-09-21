import React from "react";
import {Link} from "react-router-dom"

function Home(){
    return (
        <>
        
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
      <Link to="/Destination" className="explore-div">
      <div className="explore center">
        EXPLORE
      </div>
      </Link>
      </main>
        </>
    )
}

export default Home;