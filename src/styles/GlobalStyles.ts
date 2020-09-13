import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, input, button {
    font-family: Roboto, sans-serif;
    border: 0;
    background: none;
    color: var(--black);
  }

  html {
    min-height: 100%;
    background: var(--gray-light);
  }

  ul {
    list-style: none;
  }

  :root {
    --primary: salmon;
    --secondary: #fff;
    --black: #1b1f23;
    --gray: #777;
    --gray-light: #ccc;
    --gray-dark: #333;
  }
`;