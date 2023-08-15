import styled from "styled-components";
// import propTypes from "prop-types";

export const Header = styled.header`
  padding-top: 0.7rem;
`;

export const NavContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 0.7rem;

  padding-bottom: 0.7rem;

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

  &::after {
    content: "";
    position: absolute;
    z-index: 1;

    display: block;
    left: 0;
    bottom: 0px;
    width: 100%;

    @media (max-width: 600px) {
      scale: ${(p) => (p.$isopen === "open" ? 1 : 0)};

      opacity: 0.6;
      bottom: calc(3rem - 100vh);

      height: calc(100vh - 3rem);

      background-color: ${(p) => p.theme.colors.darkBlueLite};
      border: 1px solid ${(p) => p.theme.colors.gold};
    }
  }
`;
