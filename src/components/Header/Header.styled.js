import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding-top: 0.7rem;
`;

export const NavContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 0.7rem;

  padding-bottom: 0.7rem;

  // line under header
  &::before {
    content: "";
    position: absolute;
    z-index: 1;

    display: block;

    left: 0;
    bottom: 0px;

    width: 100%;
    height: 2px;
    background-color: ${(p) => p.theme.colors.gold};
  }

  // выпадающая подложка для меню при нажатии бургерменю
  &::after {
    content: "";
    position: absolute;
    z-index: 1;

    display: block;
    left: 0;
    bottom: 0px;
    width: 100%;

    @media (max-width: 600px) {
      opacity: 0.8;
      bottom: calc(3rem - 100vh);

      height: calc(100vh - 3rem);

      background-color: ${(p) => p.theme.colors.darkBlueLite};
      border: 1px solid ${(p) => p.theme.colors.gold};

      transform-origin: 95% 0%;
      transform: scale(${(p) => (p.$isopen === "open" ? 1 : 0)});
      transition-duration: 0.8s;
    }
  }
`;
