import React from "react";
import PropsType from "prop-types";
const Logo = (props) => {
    return (
        <div className={props.class}>
            <img alt={props.alt} src={`${props.image}`} />
        </div>
    );
};

Logo.propsTypes = {
    class: PropsType.string,
    alt: PropsType.string,
    image: PropsType.string,
}

Logo.defaultProps = {
    class: "col-md-6",
    alt: "Logo",
    image: ""
};

export default Logo;