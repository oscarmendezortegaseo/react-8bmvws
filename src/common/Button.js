import React from "react";
import PropsType from "prop-types";
const Button = (props) => {
    return (
        <button className={props.class} onClick={() => {props.actionButton(props.video)}}>
        <img alt={props.alt} src={`${props.image}`} style={{width: "168px"}}  />
        <p  className="titulovideo">{props.alt}</p>
         
        </button>
    );
};

Button.propsTypes = {
    class: PropsType.string,
    alt: PropsType.string,
    image: PropsType.string,
}

Button.defaultProps = {
    class: "col-md-6",
    alt: "Button",
    image: ""
};

export default Button;