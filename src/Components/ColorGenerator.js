import React from "react";

const ColorGenerator = ({mystyleOne, mystyleTwo, mystyleThree,mystyleFour,mystyleFive,mystyleSix})=>{
    return (

        <div className="container">    
              <div className="row first">
                <div className="col-lg-12 m-auto">
                  <div className="row ">
                    <div className="col-lg-2" style={mystyleOne}>
                      <p className="TextStyle">{    
                          mystyleOne.backgroundColor
                         }
                      </p>
                    </div>
                    <div className="col-lg-2" style={mystyleTwo}>
                      <p className="TextStyle">{
                          mystyleTwo.backgroundColor
                        }
                      </p>
                    </div>
                    <div className="col-lg-2" style={mystyleThree}>
                      <p className="TextStyle">{
                          mystyleThree.backgroundColor
                        }
                      </p>
                    </div> 
                    <div className="col-lg-2" style={mystyleFour}>
                      <p className="TextStyle">{
                          mystyleFour.backgroundColor
                        }
                      </p>
                    </div>
                    <div className="col-lg-2" style={mystyleFive}>
                      <p className="TextStyle">{
                          mystyleFive.backgroundColor
                        }
                      </p>
                    </div>
                    <div className="col-lg-2" style={mystyleSix}>
                      <p className="TextStyle">{
                          mystyleSix.backgroundColor
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>  

    )    
};


export default ColorGenerator;