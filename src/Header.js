import React from "react";
import Logo from "./common/Logo"


const Header = () => {
    return (
        <div className="row text-center headersochi">
           

            <Logo key="LogoHeaderSochi" class="col-md-6 col-6" alt="Logo Header sochi" image="https://cdn.jsdelivr.net/gh/oscarmendezortegaseo/react-8bmvws@main/public/img/logo-sochi.png"/>
            <Logo key="LogoHeaderClaro" class="col-md-6 col-6" alt="Logo Header claro sports" image="https://cdn.jsdelivr.net/gh/oscarmendezortegaseo/react-8bmvws@main/public/img/logo-claro-sports.png"/>
        </div>
    );
};

export default Header;