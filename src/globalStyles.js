import {createGlobalStyle} from "styled-components";
import { darkTheme } from "./components/Themes";


const GlobalStyle = createGlobalStyle`

*,*::before,::after,h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
}

h1,h2,h3,h4,h5,h6{
    display:inline-block;
}

body{
    margin:0;
    padding:0;
    overflow-x:hidden;
    font-family: "Source Sans Pro",sans-serif;
}
${'' /* custom scrollbar */}
::-webkit-scrollbar{
    width: 8px;
}
::-webkit-scrollbar-track{
    background: ${(props) => props.theme === "dark" ? darkTheme.body : darkTheme.text };
}
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme === "dark" ? darkTheme.text : darkTheme.body }; 
}

`
export default GlobalStyle;