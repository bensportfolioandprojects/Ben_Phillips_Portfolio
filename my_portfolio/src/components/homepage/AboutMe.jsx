import React from "react";
import CVPhoto from '../../resources/CVPhoto.JPEG';

function AboutMe() {
    return (
        <div className="AboutMeContainer">
            <div className="PicOfMe">
                <img src={CVPhoto} alt="CVPhoto" className="CVPhoto"/>
            </div>
            <div className="AboutMeBody">
                <p>
                    I am a 26 year old tech enthusiast currently hired by QA Limited as a IT Consultant; working as a Software Engineer for the Met Office. I am looking for a role that is more Web Development centric as that is where my true passion lies.
                </p>
            </div>
        </div>
    )
}

export default AboutMe;