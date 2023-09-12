import styled from "styled-components";

export const PageStyled = styled.div`
 
  text-align: center;

  font-size: ${(p) => p.theme.fontSizes.ml};
  color: ${(p) => p.theme.colors.gold};

  background-color: #08162399;

  border: 1px dashed ${(p) => p.theme.colors.gold};
  border-radius: 0.5rem;

  overflow-y: auto;
`;
