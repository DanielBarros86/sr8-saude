export interface Theme {
  colors: {
    brandBlue: string;
    brandBlueDark: string;
    brandBlueLight: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    grayHeadline: string;
    grayParagraph: string;
    textDanger: string;
    white: string;
    inputBackground: string;
    inputBorderDanger: string;
    loader: string;
  };
}

export const theme: Theme = {
  colors: {
    brandBlue: '#1F80AD',
    brandBlueDark: '#011635',
    brandBlueLight: '#24B0B4',
    backgroundPrimary: '#FFFFFF',
    backgroundSecondary: '#F7F9F9',
    grayHeadline: '#171717',
    grayParagraph: '#495057',
    textDanger: '#DB0000',
    white: '#FFFFFF',
    inputBackground: '#D9D9D9',
    inputBorderDanger: '#EB0909',
    loader: '#F7F9F9',
  },
};
