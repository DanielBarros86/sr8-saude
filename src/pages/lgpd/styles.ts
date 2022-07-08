import styled from 'styled-components';

export const Container = styled.div`
  main {
    max-width: 1540px;
    margin: 0 auto;
  }
`;

export const Description = styled.section`
  display: flex;

  img {
    width: 50%;
    max-height: 32rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    padding: 2.5rem 6rem;

    strong {
      display: block;
      font-size: 2.5rem;
      font-weight: 500;
      line-height: 2.5rem;
      text-align: center;
    }

    p {
      margin-top: 1.9rem;
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.9rem;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  @media (max-width: 1220px) {
    div {
      padding: 2.5rem 5rem;
    }
  }

  @media (max-width: 1160px) {
    div {
      padding: 2.5rem 4rem;
    }
  }

  @media (max-width: 1100px) {
    padding: 2.5rem 0;
    display: grid;
    grid-template-areas: repeat(3, max-content);
    grid-template-areas:
      'title'
      'image'
      'description';
    row-gap: 1.25rem;

    img {
      width: 100%;
      grid-area: image;
    }

    div {
      display: contents;

      strong {
        grid-area: title;
        padding: 0 1.5rem;
        line-height: 3rem;
      }

      p {
        grid-area: description;
        padding: 0 1.5rem;
        margin-top: 0;
      }
    }
  }
`;

export const MorePolicies = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2.5rem;

  ul {
    list-style: none;
    gap: 1.9rem;

    & + ul {
      margin-top: 1.25rem;
    }

    li {
      width: 25rem;
      padding: 0.5rem 2rem;
      background: ${({ theme }) => theme.colors.backgroundSecondary};

      font-size: 1.9rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.grayHeadline};
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      display: flex;
      align-items: center;

      & + li {
        margin-top: 1.25rem;
      }

      img {
        margin-right: 0.9rem;
      }
    }
  }

  @media (max-width: 980px) {
    flex-direction: column;
    justify-content: center;

    ul {
      width: 100%;
      gap: 1.25rem;

      li {
        display: flex;
        width: 100%;
      }
    }
  }
`;
