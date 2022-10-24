import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }
  
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    overflow-x: hidden;
    background-color:${({theme}) =>  theme.colors.background };
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }

`;
