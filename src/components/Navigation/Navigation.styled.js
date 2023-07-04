import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderNav = styled.nav`
  flex-grow: 1;
`;

export const HeaderNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNavLink = styled(NavLink)`
  position: relative;
  
  font-family: ${(p) => p.theme.fonts.heading};
  font-size: ${(p) => p.theme.fontSizes.ml};
  color: ${(p) => p.theme.colors.turquoise};

  &:hover::after {
    content: "";
    position: absolute;

    width: 100%;
    left: 0%;
    bottom: -5px;

    border: 1px solid ${(p) => p.theme.colors.turquoiseLite};
    border-bottom: 1px;

    animation: underline 0.5s ease 1;
  }

  @keyframes underline {
    from {
      left: 48%;
      width: 4%;
    }
    to {
      left: 0%;
      width: 100%;
    }
  }

  &.active {
    color: ${(p) => p.theme.colors.turquoiseLite};
    &::after {
      content: "";
      position: absolute;

      width: 100%;
      left: 0%;
      bottom: -5px;

      border: 1px solid ${(p) => p.theme.colors.goldLite};
      border-bottom: 1px;

      transition-duration: 0.5s;
    }
    transition-duration: 0.5s;
  }
`;
