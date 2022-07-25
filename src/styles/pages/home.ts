import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > section {
    max-width: 1540px;
    margin: 0 auto;
  }
`;

export const Opportunities = styled.section`
  padding: 2.5rem 2.5rem 7.6rem;

  h2 {
    margin-bottom: 3.1rem;
    font-size: 2.5rem;
    line-height: 2.3rem;
    text-align: center;
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
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  img {
    height: 25rem;
  }

  div {
    padding: 5.6rem 9rem 5.6rem 6rem;

    h2 {
      font-size: 2.5rem;
      text-align: center;
    }

    p {
      margin-top: 2.5rem;
      font-size: 1.2rem;
      font-weight: 500;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      line-height: 1.9rem;
    }
  }

  @media (max-width: 1100px) {
    align-items: center;
    flex-direction: column-reverse;

    img {
      margin: 1.9rem 0 2.5rem;
    }

    div {
      padding: 2.5rem 1.5rem 0;
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
    font-size: 2.45rem;
    text-align: center;
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
