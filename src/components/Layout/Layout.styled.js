import styled from "styled-components";

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

  &::after {
    content: "";
    position: absolute;
    display: block;

    left: 0;
    bottom: 0px;

    width: 100%;
    height: 2px;

    background-color: ${(p) => p.theme.colors.gold};
  }
`;
