import styled from 'styled-components';

export const Container = styled.div`
  main {
    max-width: 1540px;
    margin: 0 auto;
  }
`;

export const Description = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.9rem;
  padding: 0 2rem;

  img {
    margin-top: 0.8rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.9rem;
    max-width: 26rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1.9rem;
    padding: 2.5rem 0;

    img {
      margin: 0;
      width: 17rem;
    }

    p {
      max-width: 100%;
      padding: 0 1.6rem;
    }
  }
`;

export const Values = styled.div`
  background: ${({ theme }) => theme.colors.brandBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: 2.5rem 12rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    display: block;
    font-size: 2.5rem;
    color: inherit;
    text-align: center;
  }

  ul {
    list-style: none;
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4.1rem;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        background: ${({ theme }) => theme.colors.white};
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
      }

      span {
        flex: 1;
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.9rem;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }

  @media (max-width: 1280px) {
    padding: 2.5rem 6rem;
  }

  @media (max-width: 1100px) {
    padding: 2.5rem 2.5rem;
  }

  @media (max-width: 980px) {
    padding: 2.5rem 2rem;

    ul {
      flex-direction: column;
      gap: 1.9rem;
    }
  }
`;

export const Contact = styled.section`
  display: flex;

  img {
    width: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    strong {
      display: block;
      margin-bottom: 1.9rem;
      font-size: 2.5rem;
      font-weight: 500;
      text-align: center;
    }

    div {
      span {
        display: block;
        font-size: 1.9rem;
        font-weight: 500;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        text-align: center;

        & + span {
          margin-top: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 1090px) {
    > div {
      strong {
        font-size: 1.9rem;
      }

      div {
        span {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 890px) {
    padding: 2.5rem 0;
    display: grid;
    grid-template-rows: repeat(5, max-content);
    grid-template-areas:
      'title'
      'image'
      'infos'
      'infos'
      'infos';
    row-gap: 1.25rem;

    img {
      grid-area: image;
      width: 100%;
    }

    > div {
      display: contents;

      strong {
        grid-area: title;
        padding: 0 1.25rem;
        margin-bottom: 0;
      }

      div {
        display: contents;
        grid-area: infos;
        padding: 0 2rem;

        span {
          padding: 0 2rem;
          text-align: center;

          & + span {
            margin-top: 0;
          }
        }
      }
    }
  }
`;
