import styled from "styled-components";

export const Header = styled.header`
  padding-top: 20px;
`;

export const NavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 4px;
    background-color: ${(p) => p.theme.colors.gold};
    border-radius: 2px;
  }
`;
