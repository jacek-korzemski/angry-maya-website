import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    align-items: center;
    .skill {
        width: 100%;
        p {
            text-align: center;
            font-size: 24px;
            padding-bottom: 5px;
            color: white;
            text-shadow: 1px 2px 3px black;
        }
    }
    .level {
        width: 100%;
        height: 32px;
        border-radius: 99px;
        background: white;
        position: relative;
        overflow: hidden;
        border: 1px solid black;
        .fill-1,
        .fill-2,
        .fill-3,
        .fill-4,
        .fill-5 {
            position: absolute;
            top: 0;
            left: 0;
            height: 34px;
            background: rgb(0, 255, 0);
            background: linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(39, 252, 0, 1) 100%);
        }
        .fill-1 {
            width: 20%;
        }
        .fill-2 {
            width: 40%;
        }
        .fill-3 {
            width: 60%;
        }
        .fill-4 {
            width: 80%;
        }
        .fill-5 {
            width: 100%;
        }
    }
`;

export default Wrapper;
