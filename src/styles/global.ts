import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 720px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 600px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    color: ${({ theme }) => theme.colors.grayParagraph};
  }

  body, input, textarea, select {
    font: 400 1rem 'DM Sans', sans-serif;
    color: ${({ theme }) => theme.colors.grayParagraph};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.grayHeadline};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  button {
    font: 700 1rem 'DM Sans', sans-serif;
    cursor: pointer;
  }
`;
