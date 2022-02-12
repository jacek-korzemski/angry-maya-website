import styled from "styled-components";

const Section = styled.div`
    position: relative;
    min-height: ${(props) => (props.height ? props.height : "100vh")};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    img {
        max-width: 100%;
        height: auto;
    }
    h1 {
        font-size: 42px;
        font-weight: 100;
    }
    h2 {
        font-size: 28px;
        font-weight: 100;
    }
    h1,
    h2,
    h3,
    p,
    ul,
    ol,
    li {
        margin: 0;
        padding: 0;
    }
    .line {
        width: 300px;
        height: 1px;
        background: black;
        margin: 0 auto;
    }
    .video-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(110, 85, 255);
        background: linear-gradient(214deg, rgba(110, 85, 255, 1) 0%, rgba(199, 178, 255, 1) 100%);
        opacity: 0.3;
    }
    .video-container {
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        z-index: -1;
        video {
            height: 100%;
            width: 177.77777778vh; /* 100 * 16 / 9 */
            min-width: 100%;
            min-height: 56.25vw; /* 100 * 9 / 16 */
        }
    }
    .center {
        text-align: center;
    }
`;

export default Section;
