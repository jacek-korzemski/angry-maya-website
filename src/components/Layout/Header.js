import React from "react";
import { Link } from "gatsby";
import TopBar from "components/_StyledComponents/Header/TopBar";
import MainMenu from "components/_StyledComponents/Header/MainMenu";
import LogoText from "components/_StyledComponents/Header/LogoText";

const Header = () => {
    return (
        <TopBar>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-5 col-lg-4">
                        <LogoText>Angry Maya</LogoText>
                    </div>
                    <div className="col-12 col-sm-6 col-md-7 col-lg-8">
                        <MainMenu>
                            <ul>
                                <li>
                                    <Link to="#home">Home</Link>
                                </li>
                                <li>
                                    <Link to="#skills">Umiejętności</Link>
                                </li>
                                <li>
                                    <Link to="#exp">Doświadczenie</Link>
                                </li>
                                <li>
                                    <Link to="#about">O mnie</Link>
                                </li>
                                <li>
                                    <Link to="#contact">Kontakt</Link>
                                </li>
                            </ul>
                        </MainMenu>
                    </div>
                </div>
            </div>
        </TopBar>
    );
};

export default Header;
