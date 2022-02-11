import styled from "styled-components";

export default styled.div`
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "1px")};
    background: ${(props) => (props.color ? props.color : "black")};
    margin: ${(props) => (props.margin ? props.margin : "0 auto")};
`;
