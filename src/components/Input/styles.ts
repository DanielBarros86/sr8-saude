import styled, { css } from 'styled-components';

type ContainerProps = {
  hasError: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;

  & + div {
    margin-top: 1rem;
  }

  input {
    height: 2.5rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.inputBackground};
    padding: 0 1.9rem;
    border: none;
    outline: none;
    border-radius: 0.6rem;
    font-weight: 500;

    &::placeholder {
      color: ${({ theme }) => theme.colors.grayParagraph};
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    ${({ theme, hasError }) =>
      hasError &&
      css`
        border: 1px solid ${theme.colors.inputBorderDanger};
      `}
  }
`;
