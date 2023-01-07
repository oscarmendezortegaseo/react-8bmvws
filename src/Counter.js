import React from "react";
import PropsType from "prop-types";

const Counter = (props) => {
    return (
      <div className="container">
        <div className="row separador">
          <div className="col-md-12">
          <h2 className="text-center" style={{color: "#FFF"}}><b>FALTAN</b></h2>
          </div>
        </div>


        <div className="row text-center separador">
    <div className="col-md-12">
  
        <div className="countdown">
            <p>
              {props.days}<br/>
              DÍAS
            </p>
           
           
            
        </div>
       


        <div className="countdown">
            <p>
              {props.hours}<br/>
            HRS
            </p>
              
        </div>


        <div className="countdown">
            <p>
              {props.minutes}<br/>
              MIN
            </p>
            
        </div>



        <div className="countdown">
            <p>{props.seconds}
            <br/>
            SEG
            </p>
           
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