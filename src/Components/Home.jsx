import React from "react";
import FrontPage from "../Components/Frontpage.jsx";
import web from '../images/img17.jpg';

const Home = ()=>{
    return(
        <>
            <FrontPage name="Home" title="Ahmad Abdullah" imgsrc={web}/>
        </>
    );
}

export default Home;