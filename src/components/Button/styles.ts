import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { Theme } from '../../styles/themes/theme';

type ThemeColors = {
  [key: string]: keyof Theme['colors'];
};

type ContainerProps = {
  buttonType: 'primary' | 'secondary' | 'tertiary';
};

const backgroundVariations: ThemeColors = {
  primary: 'brandBlue',
  secondary: 'white',
  tertiary: 'brandBlueDark',
};

export const Container = styled.button<ContainerProps>`
  height: 3.25rem;
  padding: 0 2rem;
  background: ${({ theme, buttonType }) =>
    theme.colors[backgroundVariations[buttonType]]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 2.5rem;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  font: 700 0.875rem 'DM Sans', sans-serif;
  transition: 0.2s ease-in;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ buttonType, theme }) =>
    buttonType === 'secondary' &&
    css`
      border: 1px solid ${theme.colors.brandBlue};
      color: ${theme.colors.brandBlue};
    `}

  &:hover {
    ${({ theme, buttonType }) =>
      buttonType === 'tertiary'
        ? css`
            background: ${shade(
              0.5,
              theme.colors[backgroundVariations[buttonType]],
            )};
          `
        : css`
            background: ${theme.colors.brandBlueDark};
            color: ${theme.colors.white};
          `}
  }

  img {
    margin-right: 1rem;
  }
`;
