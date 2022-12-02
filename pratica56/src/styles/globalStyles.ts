import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.font.roboto};
  }

  body {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.background};
  }
`
