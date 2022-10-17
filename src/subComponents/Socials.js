import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, LinkedIn, Mail, Twitter } from "../components/Allsvg";
import { darkTheme } from "../components/Themes";


const Icons = styled.div`
    padding: .8rem;
    margin: 0.3rem;
    display: flex;
    align-items: center;
    position: fixed;
    top: 1rem;
    left: 6rem;
    z-index: 3;
    color: ${ props => props.theme.text};

    & div{
        float: left;
        padding: 0 5px;
        cursor: pointer;
    }
    @media (max-width: 768px){
        display: none;
    }

   
`



const Socials = (props) => {
    return(
        <Icons>
            <div>
                <NavLink target={"_blank"} style={{color: "inherit"}} to={{pathname: "https://github.com/soumali28"}}>
                    <Github width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink target={"_blank"} style={{color: "inherit"}} to={{pathname: "https://www.linkedin.com/in/soumali-gorai-566b01220/"}}>
                    <LinkedIn width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink target={"_blank"} style={{color: "inherit"}} to={{pathname: "https://twitter.com/_soumali_?t=PqRqu78kpVe-05t96hQvCg&s=09"}}>
                    <Twitter width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink target={"_blank"} style={{color: "inherit"}} to={{pathname: "mailto:goraisoumali5@gmsil.com"}}>
                    <Mail width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>
        </Icons>
    );
};
  
  export default Socials;