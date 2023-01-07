import React from "react";
import PropsType from "prop-types";

const Counter = (props) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <h2 className="text-center" style={{color: "#FFF"}}><b>FALTAN</b></h2>
          </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-3">
              <div className="countdown">
                <p>{props.days}</p>
                <span>Días</span>
              </div>
            </div>

            <div className="col-md-3 col-3">
              <div className="countdown">
                <p>{props.hours}</p>
                <span>hrs</span>
               
              </div>
            </div>

            <div className="col-md-3 col-3">
              <div className="countdown">
                <p>{props.minutes}</p>
                <span>min</span>
              </div>
            </div>

            <div className="col-md-3 col-3">
              <div className="countdown">
                <p>{props.seconds}</p>
                <span>seg</span>
              </div>
            </div>


           
            </div>
      </div>
      
    );
};

Counter.propsTypes = {
  days: PropsType.string,
  hours: PropsType.string,
  minutes: PropsType.string,
  seconds: PropsType.string,
};

Counter.defaultProps = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

export default Counter;