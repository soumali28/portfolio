import React from "react";
import styled from "styled-components";

const Text = styled.h1`
    position: fixed;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    color: #570530;
    font-size: calc(4rem + 5vw);
    z-index: 0;
`

const BigTitle = (props) =>{
    return(
        <Text top={props.top} left={props.left} right={props.right}>
            {props.text}
        </Text>

    );
}

export default BigTitle;