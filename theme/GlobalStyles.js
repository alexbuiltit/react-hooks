import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    padding:0;
    margin: 0;
    /* font-family: 'Open Sans', sans-serif; */
    transition: all ease 300ms;
  }

  h1,h2,h3,h4,h5,h6{
    font-family: 'Alata', sans-serif;
    font-weight: 900;
    margin: 0;
  }
`;

export default GlobalStyles;
