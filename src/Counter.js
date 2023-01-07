import React from "react";
import PropsType from "prop-types";

const Counter = (props) => {
    return (
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center" style={{color: "#FFF"}}><b>FALTAN</b></h2>
         <div className="text-center">
            <div className="countdown">
              {props.days}
              <p>Días</p>
            </div>
            <div className="countdown">
              {props.hours}
              <p>Hrs</p>
            </div>
            <div className="countdown">
              {props.minutes}
              <p>Min</p>
            </div>
            <div className="countdown">
             {props.seconds}
             <p>Seg</p>
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