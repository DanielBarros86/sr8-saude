import styled from 'styled-components';

export const Container = styled.div`
  > div {
    background: url('/images/banner-services.png') no-repeat;
    background-size: cover;
    height: 25rem;

    padding: 0 4.3rem;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      text-align: center;
      font-size: 3.1rem;
      font-weight: 500;
      color: inherit;
    }

    span {
      display: block;
      margin-top: 2.5rem;
      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  > section {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const Section = styled.section`
  display: flex;
  background: ${({ theme }) => theme.colors.backgroundPrimary};

  div {
    width: 50%;
    padding: 3.7rem 3.1rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    strong {
      display: block;
      font-size: 2.5rem;
      text-align: center;
    }

    p {
      margin-top: 2.5rem;
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.7rem;
    }
  }

  img {
    width: 50%;
    height: auto;
  }

  &:nth-of-type(even) {
    flex-direction: row-reverse;

    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }

  @media (max-width: 1060px) {
    padding: 2.5em 0;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, max-content);
    grid-template-areas:
      'title'
      'image'
      'description';

    div {
      display: contents;
      max-width: 1440px;
      margin: 0 auto;

      strong {
        display: block;
        margin-bottom: 1.25rem;
        grid-area: title;
      }

      p {
        margin-top: 1.5rem;
        padding: 0 3.125rem;
        grid-area: description;
      }
    }

    img {
      grid-area: image;
      width: 100%;
    }
  }
`;
