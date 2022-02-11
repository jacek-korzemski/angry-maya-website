import styled from "styled-components";

export default styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, var(--main-color-1) calc(0% + 62px), white 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1,
    h2,
    h3,
    p {
        text-align: center;
        margin: 5px 0;
    }
`;
