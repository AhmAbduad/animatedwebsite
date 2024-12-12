import React from "react";
import FrontPage from "../Components/Frontpage.jsx";
import web from '../images/img17.jpg';


const About = ()=>{
    return(
        <>
            <FrontPage name="About" title="Ali Khan" imgsrc={web}/>
        </>
    );
}

export default About;