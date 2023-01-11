import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, label, textarea {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${({ theme }) => theme.palette.gray[600]};
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`
