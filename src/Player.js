import React from "react";
import PropsType from "prop-types";

const Player = (props) => {
    return (
       <div className="container">
        <div className="row">
        <div className="col-md-6" style={{margin: "auto"}}>

        <div className="text-center video-responsive">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${props.video}?autoplay=1`}
                title={props.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
                allowFullScreen
            />
      </div></div></div></div>
    );
};

Player.PropsType = {
    video: PropsType.string,
    title: PropsType.string,
};

Player.defaultProps = {
    video: "peuVFBTt47o",
    title: "video"
};

export default Player;