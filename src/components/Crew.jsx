import React, { useState } from "react";
import data from "../data.json";
const { crew } = data;

function Crew() {
    const [members] = useState(crew)
    const [value, setValue] = useState(0)


    const { name, images, role, bio } = members[value]

    return (
        <div className="main">
            <div className="main-header crew-header">
                <h1 className="left-header"><span className="header-span">02</span> MEET YOUR CREW</h1></div>

            <div className="main-container col-reverse">

                <div className="right-container crew-container flex pad-0">
                    <div>
                        <h1 className="crew-role uppercase" >{role}</h1>
                        <h1 className="crew-name uppercase">{name}</h1>
                        <p className="right-para border-none">{bio}</p>
                    </div>
                    <div className="flex crew-btn-div">
                        {members.map((item, index) => {
                            return <div className="crew-btn" key={index}
                                onClick={() => { setValue(index) }}
                                style={{ backgroundColor: index === value && "white" }}>

                            </div>
                        })}</div>
                </div>
                <div className="left-container center pad-0">
                    <img className="crew-img" src={images.png} alt={name} />


                </div>
            </div>
        </div>
    )
}

export default Crew;