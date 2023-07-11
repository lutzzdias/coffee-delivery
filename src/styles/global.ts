import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #333;
    color: #FFF;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-family: 'Baloo 2', cursive;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }
`
