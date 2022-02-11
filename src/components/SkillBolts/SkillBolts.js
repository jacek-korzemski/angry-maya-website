import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    p {
        font-size: 20px;
        text-align: center;
    }
    .bolts {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
    }
    .bolt {
        width: 8px;
        height: 24px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        background: rgba(0, 0, 0, 0.2);
        &.on {
            border: 1px solid green;
            background: lime;
        }
    }
`;

const SkillBolts = (props) => {
    return (
        <Wrapper>
            <p>{props.name}</p>
            <div className="bolts">
                {[...Array(5)].map((elem, index) => (
                    <div className={props.level > index ? "bolt on" : "bolt"}></div>
                ))}
            </div>
        </Wrapper>
    );
};

export default SkillBolts;
