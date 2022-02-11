import React from "react";
import Layout from "components/Layout/Layout";
import Seo from "components/Seo/Seo";
import Hero from "components/_StyledComponents/Home/Hero";
import Line from "components/_StyledComponents/SingleElements/Line";
import Section from "components/_StyledComponents/SingleElements/Section";
import SkillBolts from "../components/SkillBolts/SkillBolts";
import { skills } from "data/skills";

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <Hero id="home">
            <div className="container">
                <h1>Jacek Korzemski</h1>
                <Line width="50%" />
                <h2>Frontend Developer</h2>
                <p>...z aspiracjami na fullstack developera...</p>
            </div>
        </Hero>
        <Section id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Umiejętności</h2>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row">
                            {skills.map((elem, index) => (
                                <div className="col-md-3" key={index}>
                                    <SkillBolts name={elem.name} level={elem.level} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </Section>
        <Section id="exp">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Doświadczenie</h2>
                    </div>
                </div>
            </div>
        </Section>
    </Layout>
);

export default IndexPage;
