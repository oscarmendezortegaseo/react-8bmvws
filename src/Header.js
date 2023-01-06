import React from "react";
import Logo from "./common/Logo"


const Header = () => {
    return (
        <div className="row" style={{background: "#000"}}>
            <img src={`https://cdn.jsdelivr.net/gh/oscarmendezortegaseo/react-8bmvws@main/public/img/logo-sochi.png`}/>

            <Logo key="LogoHeaderSochi" class="col-md-6" alt="Logo Header sochi" image=""/>
            <Logo key="LogoHeaderClaro" class="col-md-6" alt="Logo Header claro sports" image="img/logo-claro-sports.png"/>
        </div>
    );
};

export default Header;