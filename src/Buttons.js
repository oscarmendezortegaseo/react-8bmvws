import React from "react";
import PropsType from "prop-types";

import Button from "./common/Button";

const Buttons = (props) => {
    return (
        <div className="row control" >
            <div className="container-lx " style={{margin: "auto"}}>
                <h3 className="text-center subtitulo">
                    CLARO SPORTS EN SOCHI 2014
                </h3>
              
                    <Button class="col-md-3 col-6" alt="TEAM LATAM" image="https://cdn.jsdelivr.net/gh/oscarmendezortegaseo/react-8bmvws@main/public/img/team-latam.png" actionButton={props.changeVideo} video= {{title: "sofia", video: "peuVFBTt47o"}} />
                   
                    <Button class="col-md-3 col-6" alt="TRAVEL MEETS FASHION" image="https://cdn.jsdelivr.net/gh/oscarmendezortegaseo/react-8bmvws@main/public/img/travel-meets-fashion.png" actionButton={props.changeVideo} video= {{title: "Leiva", video: "DMSTr9JOhBE"}} />
                    <Button class="col-md-3 col-6" alt="VELOCIDAD Y RIESGO" image="https://cdn.jsdelivr.net/gh/oscarmendezortegaseo/react-8bmvws@main/public/img/velocidad-riesgo.png" actionButton={props.changeVideo} video= {{title: "Sidecars", video: "6Yd_jtz94DA"}} />
                    <Button class="col-md-3 col-6" alt="EXPERIENCIA MULTIMEDIA" image="https://cdn.jsdelivr.net/gh/oscarmendezortegaseo/react-8bmvws@main/public/img/experiencia.png" actionButton={props.changeVideo} video= {{title: "Los Rumberos", video: "bWstdDuh1ic"}} />
                
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