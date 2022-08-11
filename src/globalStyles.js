import {createGlobalStyle} from "styled-components";



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
    background: #ffeddb;
}
::-webkit-scrollbar-thumb {
  background: #7D0633; 
}

`
export default GlobalStyle;