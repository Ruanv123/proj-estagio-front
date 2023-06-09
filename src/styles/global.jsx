import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &::before,
    &::after {
      border-width: 0;
      border-style: solid;
      box-sizing: inherit;
    }
} 
  a { text-decoration: none }

  body{
    font-family: 'Poppins', sans-serif;
  }

`;
