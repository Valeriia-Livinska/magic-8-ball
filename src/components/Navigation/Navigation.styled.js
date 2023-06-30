import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderNav = styled.nav`
  flex-grow: 1;
`;

export const HeaderNavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderNavLink = styled(NavLink)`
  font-family: ${(p) => p.theme.fonts.heading};
  font-size: ${(p) => p.theme.fontSizes.ml};
  color: ${(p) => p.theme.colors.turquoise};
`;
