import styled, { css } from 'styled-components';
import { Button } from '../Button';

type ContainerProps = {
  isSidebarOpen: boolean;
};

type ItemsProps = {
  isSidebarOpen: boolean;
};

type BurgerProps = {
  isSidebarOpen: boolean;
};

export const Container = styled.header<ContainerProps>`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};

  nav {
    max-width: 1540px;
    margin: 0 auto;
    padding: 1rem 2.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    > img {
      position: fixed;
      top: 2.8rem;
      right: 19.2rem;
      z-index: 2;
      display: ${({ isSidebarOpen }) => (isSidebarOpen ? 'block' : 'none')};
    }

    @media (max-width: 720px) {
      > img {
        right: 18rem;
      }
    }

    @media (max-width: 700px) {
      > a {
        img {
          width: 9.4rem;
        }
      }

      > img {
        top: 2rem;
      }
    }

    @media (max-width: 437px) {
      padding: 1rem 1.5rem;

      > img {
        right: 0;
        left: 2rem;
      }
    }
  }
`;

export const Items = styled.div<ItemsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  ul {
    flex: 1;
    list-style: none;
    gap: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.brandBlue};
        font-weight: 700;
        font-size: 1.4rem;
        transition: 0.2s;

        &:hover {
          color: ${({ theme }) => theme.colors.brandBlueDark};
        }
      }
    }
  }

  @media (max-width: 1220px) {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;

    height: 100vh;
    width: 30rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: ${({ theme }) => theme.colors.brandBlue};

    > span {
      color: ${({ theme }) => theme.colors.white};

      strong {
        color: inherit;
      }
    }

    ul {
      width: 100%;
      flex-direction: column;
      flex: 0;
      text-align: center;
      margin: 7rem 0 2.5rem;
      gap: 3rem;

      li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          display: block;
          font-size: 1.5rem;
          color: ${({ theme }) => theme.colors.white};
          padding: 1rem 0;
          width: 12.69rem;
          transition: 0.2s;
          border-radius: 2.5rem;

          &:hover {
            background: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.brandBlue};
          }
        }
      }
    }

    transition: right 0.4s;

    ${({ isSidebarOpen }) =>
      !isSidebarOpen &&
      css`
        right: -500px;
      `}
  }

  @media (max-width: 437px) {
    width: 100%;
  }
`;

export const Burger = styled.button<BurgerProps>`
  position: fixed;
  top: 2.5rem;
  right: 2.5rem;
  z-index: 10;

  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 0;

  display: none;

  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2.125rem;
    height: 4px;
    background: ${({ theme }) => theme.colors.brandBlue};
    border-radius: 2px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background: ${({ theme }) => theme.colors.brandBlue};

    ${({ isSidebarOpen }) =>
      isSidebarOpen &&
      css`
        background: ${({ theme }) => theme.colors.white};
        height: 2px;
        border-radius: 1px;
      `}

    :first-child {
      transform: ${({ isSidebarOpen }) =>
        isSidebarOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ isSidebarOpen }) => (isSidebarOpen ? '0' : '1')};
      transform: ${({ isSidebarOpen }) =>
        isSidebarOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ isSidebarOpen }) =>
        isSidebarOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (max-width: 1220px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  @media (max-width: 700px) {
    top: 1.6rem;
  }

  @media (max-width: 437px) {
    right: 1.5rem;
  }
`;

export const ContactUs = styled(Button).attrs(() => ({
  forwardedAs: 'a',
}))`
  text-decoration: none;

  @media (max-width: 1200px) {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.white};
    padding: 2rem 0;
    width: 14rem;
    border-radius: 2.5rem;

    &:hover {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.brandBlue};
    }
  }
`;
