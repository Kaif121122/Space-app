import React, { useState } from "react";
import data from "../data.json";

const { destinations } = data;

function Destination() {
    const [planets] = useState(destinations)
    const [value, setValue] = useState(0)


    const { name, images, description, distance, travel } = planets[value]

    return (
        <>
        
            <div className="main-container">
                <div className="left-container">
                <div className="main-header">
                <h1 className="left-header"><span className="header-span">01</span> PICK YOUR DESTINATION</h1></div>
           
                    <img className="dest-img" src={images.png} alt={name} />
                </div>
                <div className="right-container center">
                    <div className="flex">
                        {planets.map((item, index) => {
                            return <div className="dest-btn" key={index}
                                onClick={() => { setValue(index) }}
                                style={{ borderBottom: index === value && "2px solid white" }}>
                                {item.name}
                            </div>
                        })}</div>
                    <h1 className="right-header">{name}</h1>
                    <p className="right-para">{description}</p>
                    <ul className="flex dest-bottom uppercase">
                        <li className="distance"><span className="block">AVG. DISTANCE</span> {distance}</li>
                        <li className="distance"><span className="block">EST. TRAVEL TIME</span> {travel}</li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Destination;