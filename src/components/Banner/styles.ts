import styled, { css } from 'styled-components';

type ContainerProps = {
  height: string;
  imageUrl: string;
  imageUrlMobile?: string;
  imagePosition:
    | 'initial'
    | 'revert'
    | 'unset'
    | 'top'
    | 'center'
    | 'bottom'
    | 'left'
    | 'right';
};

export const Container = styled.div<ContainerProps>`
  background: url(${({ imageUrl }) => imageUrl}) no-repeat;
  background-size: cover;
  background-position: ${({ imagePosition }) => imagePosition};
  height: ${({ height }) => height};

  padding: 0 1.6rem;
  gap: 2.5rem;
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    text-align: center;
    font-size: 3.1rem;
    font-weight: 500;
    line-height: 2.6rem;
    text-align: center;
    color: inherit;
  }

  span {
    font-size: 1.5rem;
    font-weight: 500;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 1540px) {
    height: ${({ height }) => `calc(${height} - 5rem)`};
  }

  @media (max-width: 720px) {
    height: ${({ height }) => `calc(${height} - 2rem)`};
  }

  @media (max-width: 500px) {
    ${({ imageUrlMobile }) =>
      imageUrlMobile &&
      css`
        background-image: url(${imageUrlMobile});
      `}
  }
`;
