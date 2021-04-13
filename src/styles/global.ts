import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background: ${theme.colors.background}; 
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale;
    }
    html {
      @media (max-width: 1800px) {
        font-size: 93.75%;
      }
      @media (max-width: 720px) {
        font-size: 87.5%;
      };
    }

    button {
      cursor: pointer;
    }

    [disabled]{
      opacity: 0.6;
      cursor: not-allowed;
    }
  `}
`