import React from 'react';
import TechStackListJson from "../../utility/TechStackList.js";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
const TechStack = () => {
    return (
        <>
          <div className="container techstack" id="teckstack">
              <RubberBand>
              <h2 className="col-12 mt-3 mb-1 text-center">Technologies Stack</h2>
              <hr/>
              <p className="pb-3 text-center">👉 Including programming Languages, frameworks, Databases, APIs</p>
              </RubberBand>
            <div className="row">
                {TechStackListJson.map((item, i)=>{
                    return (
                        <Fade left>
                        <div key={i} className="col-md-3">
                            <div className="card m-2">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex justify-content-center">
                                            <div className="align-self-center">
                                                <item.icon className="tech-icon"/>
                                            </div>
                                            <div className="media-body">
                                                <h5>{item.name}</h5>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                    )
                })}
            </div>
          </div>
        </>
    );
};

export default TechStack;