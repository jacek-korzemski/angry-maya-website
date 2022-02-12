import React from "react";
import Wrapper from "./Wrappers";
import { skills } from "data/skills";

const Skills = (props) => {
    return (
        <Wrapper>
            {skills.map((elem, index) => (
                <div className="skill" key={index}>
                    <p>{elem.name}</p>
                    <div className="level">
                        <div className={"fill-" + elem.level}></div>
                    </div>
                </div>
            ))}
        </Wrapper>
    );
};

export default Skills;
