import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  body {
    font-family: 'Garamond', serif;
  }

  body.faunaLoaded {
    font-family: 'Fauna One', serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100vh;
    min-width: 100vw;
  }

  p,
  label {
    font-family: 'Garamond', serif;
    line-height: 1.5em;
  }
  
  p,
  label.faunaLoaded {
    font-family: 'Fauna One', serif;
  }
`;
