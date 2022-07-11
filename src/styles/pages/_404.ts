import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;
  height: 50vh;
  background: ${({ theme }) => theme.colors.backgroundPrimary};

  strong {
    display: block;
    text-align: center;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.brandBlue};

    &:nth-child(2) {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 720px) {
    strong {
      font-size: 2.4rem;

      &:nth-child(2) {
        font-size: 2rem;
      }
    }
  }
`;
