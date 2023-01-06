import React from "react";
import PropsType from "prop-types";

const Player = (props) => {
    return (
        <div className="row" style={{ backgroundImage: 'url("img/background.jpg")'}}>
        <div className="col-md-12">

        <div id="video" className="text-center">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${props.video}?autoplay=1`}
                title={props.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
                allowFullScreen
            />
      </div></div></div>
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