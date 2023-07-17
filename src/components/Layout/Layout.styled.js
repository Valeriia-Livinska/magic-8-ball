import styled from "styled-components";

// export const LayoutStyled = styled.div`
//   min-height: 80vh;
//   border: 10px solid red;
// `;

export const Header = styled.header`
  padding-top: 20px;
`;

export const NavContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;

  padding-bottom: 20px;

  &::after {
    content: "";
    position: absolute;
    display: block;

    left: 0;
    bottom: 0px;

    width: 100%;
    height:2px;

    background-color: ${(p) => p.theme.colors.gold};
    // border-radius: 2px;
  }
`;
