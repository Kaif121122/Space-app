import React, { useState } from "react";
import data from "../data.json";

const { technology } = data;
function Technology() {
    const [tech] = useState(technology)
    const [value, setValue] = useState(0)


    const { name, images, description } = tech[value]

    return (
        <div className="main">

            <div className="main-header tech-pad-top">
                <h1 className="left-header"><span className="header-span">03</span> SPACE LAUNCH 101</h1></div>

            <div className="main-container pad-right col-reverse">

                <div className="left-container center flex-r tech-container">

                    <div className="tech-btn-div">
                        {tech.map((item, index) => {
                            return <div className="tech-btn center" key={index}
                                onClick={() => { setValue(index) }}
                                style={{ backgroundColor: index === value && "white", color: index === value && "black" }}>{index + 1}

                            </div>
                        })}</div>
                    <div className="tech-headings">
                        <h1 className="tech-role">THE TERMINOLOGY...</h1>
                        <h1 className="crew-name uppercase">{name}</h1>
                        <p className="right-para border-none">{description}</p>
                    </div>

                </div>
                <div className="right-container center tech-right-container">
                    <img className="tech-img" src={images.portrait} alt={name} />


                </div>
            </div>
        </div>
    )
}

export default Technology;