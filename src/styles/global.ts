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
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    body, input, button, textarea {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
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

    .react-modal-overlay {
      background:rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8px);

      display: flex;
      align-items: center;
      justify-content: center;

      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

    }

    .react-modal-content {
      width: 100%;
      max-width: 576px;
      background: ${theme.colors.background};
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;
    }
  `}
`