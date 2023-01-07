import React from "react";
import Logo from "./common/Logo";
import Network from "./common/Network";

const Footer = () => {
    return (
        <div className="row footersochi text-center">
            <div className="col-md-4 col-4">
              <p style={{ color: "#ffffff", fontSize: "10px",}}>
                Aviso de Privacidad / Contacto
              </p>
            </div>
            <Logo key="LogoFooterSochi" class="col-md-4 col-4" alt="Logo Header sochi" image="https://cdn.jsdelivr.net/gh/oscarmendezortegaseo/react-8bmvws@main/public/img/logo-sochi.png"/>
            <div className="col-md-4 col-4">
              <Network key="Networkfacebook-f" color="#3b5998" network="facebook-f" link="#!" />
              <Network key="Networktwitter" color="#55acee" network="twitter" link="#!" />
              <Network key="Networkgoogle" color="#dd4b39" network="google" link="#!" />
              <Network key="Networkinstagram" color="#ac2bac" network="instagram" link="#!" />
            </div>
        </div>
    )
};

export default Footer;