import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  > main {
    flex: 1;
    margin-top: 6.7rem;

    @media (max-width: 700px) {
      margin-top: 5.1rem;
    }
  }
`;

export const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    font-size: 1.5rem;
    padding: 4.1rem 3rem 3rem;

    strong {
      color: ${({ theme }) => theme.colors.grayHeadline};
    }

    section:first-of-type {
      ul {
        margin-top: 1rem;
        margin-left: 1.5rem;

        li {
          color: ${({ theme }) => theme.colors.grayParagraph};
          font-weight: 700;

          & + li {
            margin-top: 0.6rem;
          }
        }
      }
    }

    section:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: flex-start;
      gap: 1.3rem;

      a {
        font-weight: 700;
        text-decoration: none;

        &:not(:last-child) {
          color: ${({ theme }) => theme.colors.grayHeadline};
        }
      }
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.85rem;

      section:first-of-type {
        strong {
          display: block;
          text-align: center;
        }
      }

      section:nth-of-type(2) {
        align-self: center;
      }
    }
  }

  > div:nth-child(2) {
    background: ${({ theme }) => theme.colors.brandBlueDark};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.8rem;

    span {
      display: block;
      text-align: center;
    }

    @media (max-width: 600px) {
      padding: 2rem 0;
    }
  }
`;
