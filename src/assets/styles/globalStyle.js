import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200;300;400;500&family=Montserrat:wght@400;700&display=swap');

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, a, button{
    font-family: 'Montserrat', sans-serif;
  }
`;
