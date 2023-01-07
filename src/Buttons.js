import React from "react";
import PropsType from "prop-types";

import Button from "./common/Button";

const Buttons = (props) => {
    return (
        <div className="row" style={{background: "#232323", padding: "2%"}}>
            <div className="col-md-12">
                <h3 className="text-center subtitulo">
                    CLARO SPORTS EN SOCHI 2014
                </h3>
                <div className="row">
                    <Button class="col-md-3 col-6" alt="logo-team-latam" image="https://cdn.jsdelivr.net/gh/oscarmendezortegaseo/react-8bmvws@main/public/img/team-latam.png" actionButton={props.changeVideo} video= {{title: "sofia", video: "qaZ0oAh4evU"}} />
                    <Button class="col-md-3 col-6" alt="logo-travel-meets-fashion" image="https://cdn.jsdelivr.net/gh/oscarmendezortegaseo/react-8bmvws@main/public/img/travel-meets-fashion.png" actionButton={props.changeVideo} video= {{title: "mike el perro", video: "MUSdiImX2M0"}} />
                    <Button class="col-md-3 col-6" alt="logo-velocidad-riesgo" image="https://cdn.jsdelivr.net/gh/oscarmendezortegaseo/react-8bmvws@main/public/img/velocidad-riesgo.png" actionButton={props.changeVideo} video= {{title: "mike fusion", video: "6Yd_jtz94DA"}} />
                    <Button class="col-md-3 col-6" alt="logo-experiencia" image="https://cdn.jsdelivr.net/gh/oscarmendezortegaseo/react-8bmvws@main/public/img/experiencia.png" actionButton={props.changeVideo} video= {{title: "osito dormilon", video: "MZef_8w7YkE"}} />
                </div>
            </div>
        </div>
    );
};

Buttons.propsTypes = {
    changeVideo: PropsType.func,
  };
  
  Buttons.defaultProps = {
      changeVideo: () => {},
  };
  



export default Buttons;