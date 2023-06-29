import styled from "styled-components";

export const StyledHeader = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;

  & nav{
   flex-grow: 1;
  }

  & nav ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
   
    & li a {
      font-family: ${(p) => p.theme.fonts.heading};
      font-size: ${(p) => p.theme.fontSizes.ml};

      color: ${(p) => p.theme.colors.turquoise};
 
`;
