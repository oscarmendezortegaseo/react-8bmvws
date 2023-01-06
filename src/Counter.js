import React from "react";
import PropsType from "prop-types";

const Counter = (props) => {
    return (
      <div className="row" style={{ backgroundImage: 'url("img/background.jpg")'}}>
        <div className="col-md-12">
          <h2 className="text-center" style={{color: "#000"}}><b>FALTAN</b></h2>
          <h3 className="text-center" style={{color: "#000"}}>
           {`${props.days}  ${props.hours} ${props.minutes} ${props.seconds}`}
          </h3>
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