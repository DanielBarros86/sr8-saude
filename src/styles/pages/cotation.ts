import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 5rem 2.5rem 0;
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    color: ${({ theme }) => theme.colors.grayHeadline};

    h1 {
      font-size: 3.1rem;
      font-weight: 500;
      text-align: center;
    }

    span {
      display: block;
      text-align: center;
      margin-top: 1.9rem;
      font-size: 1.5rem;
      font-weight: 500;
      max-width: 44rem;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  form {
    margin-top: 7rem;
    max-width: 26.4rem;
    width: 100%;

    button {
      margin: 2.5rem auto 0;
    }
  }
`;
