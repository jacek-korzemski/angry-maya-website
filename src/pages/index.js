import React from "react";
import Layout from "components/Layout/Layout";
import Seo from "components/Seo/Seo";
import Section from "components/Section/Section";
import logo from "assets/logo.png";
import Skills from "components/Skills/Skills";
import VideoBg from "reactjs-videobg";
import poster from "assets/poster.png";
import video from "assets/video.mp4";

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <Section id="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 center">
                        <img src={logo} alt="logo" />
                        <h1>Jacek Korzemski</h1>
                        <div className="line"></div>
                        <h2>Frontend developer</h2>
                        <p>...z aspiracjami na fullstack developera...</p>
                    </div>
                </div>
            </div>
        </Section>
        <Section id="skills">
            <div className="video-container">
                <video autoPlay muted loop id="video">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className="video-overlay"></div>
            <div className="container" style={{ zIndex: "10" }}>
                <div className="row">
                    <div className="col-sm-12">
                        <Skills />
                    </div>
                </div>
            </div>
        </Section>
    </Layout>
);

export default IndexPage;
