import styled from "styled-components";

export const LogoText = styled.div`
    font-size: 32px;
    line-height: 24px;
    color: white;
    text-shadow: 1px 2px 3px black;
    font-style: italic;
`;

export const MainMenu = styled.nav`
    ul,
    li {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    ul {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
    }
    li {
        a {
            display: block;
            padding: 5px;
            text-decoration: none;
            color: var(--main-color-5);
            border-bottom: 1px solid transparent;
            &:hover {
                border-bottom: 1px solid black;
            }
        }
    }
`;

export const TopBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px 0;
    background: rgb(195, 158, 34);
    background: linear-gradient(50deg, rgba(195, 158, 34, 1) 0%, rgba(255, 93, 0, 1) 100%);
    z-index: 10;
`;
