import React from "react";

const FrontPage = (props)=>{
    return(
        <>
            <div className="container" style={{paddingTop:"100px"}}>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h1>Welcome to {props.name} </h1>
                        <br />
                        <h2>{props.title}</h2>
                        <h3>We are  a team of talented web developers </h3>
                        <button className="btn btn-outline-primary">Contact </button>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <img src={props.imgsrc} className="dummyimage" alt="dummyimage" width="300px" height="300px"/>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default FrontPage;