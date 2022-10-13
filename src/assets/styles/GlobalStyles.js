import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kanit&family=Roboto&display=swap');
  
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: #fafafe;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
