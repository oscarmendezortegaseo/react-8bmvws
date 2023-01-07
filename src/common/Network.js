import React from "react";
import PropsType from "prop-types";

const Network = (props) => {
    return (
        <a
            className="btn btn-primary social"
            style={{
                backgroundColor: props.color
            }}
            href={props.link}
            role="button"
        >
            <i className={`fab fa-${props.network}`}></i>
        </a>
    );
};

Network.PropsTypes = {
    color: PropsType.string,
    link: PropsType.string,
    network: PropsType.string,
};

Network.defaultProps = {
    color: "#FFF",
    link: "#",
    network: ""
};


export default Network;