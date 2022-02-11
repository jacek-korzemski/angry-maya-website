import styled from "styled-components";

export default styled.nav`
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
                border-bottom: 1px solid var(--main-color-5);
            }
        }
    }
`;
