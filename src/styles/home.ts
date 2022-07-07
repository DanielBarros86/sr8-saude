import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > section {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const Banner = styled.div`
  background: url('/images/banner-home.png') no-repeat;
  background-size: cover;
  height: 40rem;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  gap: 2.5rem;

  strong {
    display: block;
    color: inherit;
    font-size: 3.1rem;
    font-weight: 500;
    text-align: center;
    line-height: 3rem;
  }

  span {
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
  }
`;

export const Opportunities = styled.section`
  padding: 2.5rem 2.5rem 7.6rem;

  h2 {
    margin-bottom: 3.1rem;
    font-size: 2.5rem;
    line-height: 2.3rem;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  div {
    margin-top: 1.1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
  }
`;

export const Location = styled.section`
  display: flex;
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  div {
    max-width: 36rem;
    margin: 0 5.6rem;

    h2 {
      font-size: 2.5rem;
      text-align: center;
      margin-top: 5.9rem;
    }

    p {
      margin-top: 2.5rem;
      font-size: 1.2rem;
      font-weight: 500;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  @media (max-width: 1040px) {
    align-items: center;
    flex-direction: column-reverse;
    padding: 2.5rem 1.5rem;

    img {
      margin-top: 1.9rem;
      width: 20rem;
    }

    margin: 0;

    div {
      max-width: initial;
      margin: 0;

      h2 {
        margin-top: 0;
      }
    }
  }
`;

export const Highlighted = styled.section`
  background: ${({ theme }) => theme.colors.brandBlue};
  padding: 5.2rem 0;

  strong {
    display: block;
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 1000px) {
    padding: 2.5rem 2rem;

    strong {
      font-size: 3.1rem;
    }
  }
`;

export const PartnerCompanies = styled.section`
  padding: 2.5rem;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1.5rem 1.6rem 3.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    display: block;
    font-size: 2.5rem;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 3rem;
    column-gap: 6rem;
    row-gap: 2rem;
    padding: 0 4.5rem;
    max-width: 85rem;

    img {
      width: 14rem;
      height: 7rem;
      object-fit: contain;
    }

    @media (max-width: 760px) {
      column-gap: 4.5rem;
    }

    @media (max-width: 700px) {
      max-width: initial;
      padding: 0;
    }

    @media (max-width: 540px) {
      column-gap: 3rem;

      img {
        width: 12rem;
        height: 6rem;
      }
    }

    @media (max-width: 480px) {
      column-gap: 2.5rem;

      padding: 0;

      img {
        width: 10rem;
        height: 5rem;
      }
    }
  }
`;
