import React from "react";
import Card from "./Card";
import web from '../images/img17.jpg'

const Service = ()=>{
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <Card imgsrc={web} title="John Doe 1"/>
                        <Card imgsrc={web} title="John Doe 2"/>
                        <Card imgsrc={web} title="John Doe 3"/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Card imgsrc={web} title="John Doe 4"/>
                        <Card imgsrc={web} title="John Doe 5"/>
                        <Card imgsrc={web} title="John Doe 6"/>
                    </div>

                </div>
            </div>
        
        </>
    );
}

export default Service;