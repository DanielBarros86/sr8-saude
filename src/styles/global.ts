import { createGlobalStyle } from 'styled-components';

import GothamLightTtf from '../assets/fonts/Gotham/GothamLight.ttf';
import GothamLightOtf from '../assets/fonts/Gotham/Gotham-Light.otf';
import GothamMediumTtf from '../assets/fonts/Gotham/GothamMedium.ttf';
import GothamMediumOtf from '../assets/fonts/Gotham/Gotham-Medium.otf';
import GothamBoldTtf from '../assets/fonts/Gotham/GothamBold.ttf';
import GothamBoldOtf from '../assets/fonts/Gotham/Gotham-Bold.otf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
     font-family: 'Gotham';
     src: url(${GothamLightTtf}) format('ttf'),
          url(${GothamLightOtf}) format('otf');
     font-weight: 400;
  }

  @font-face {
     font-family: 'Gotham';
     src: url(${GothamMediumTtf}) format('ttf'),
          url(${GothamMediumOtf}) format('otf');
     font-weight: 500;
  }

  @font-face {
     font-family: 'Gotham';
     src: url(${GothamBoldTtf}) format('ttf'),
          url(${GothamBoldOtf}) format('otf');
     font-weight: 700;
  }

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
  }

  button {
    font: 700 1rem 'DM Sans', sans-serif;
    cursor: pointer;
  }
`;
