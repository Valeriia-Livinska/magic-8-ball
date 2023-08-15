import styled from "styled-components";

export const BurgerButton = styled.button`
  display: none;

  width: 1.5rem;
  height: 1.5rem;

  padding: 0;

  background-color: transparent;

  border: 1px solid ${(p) => p.theme.colors.turquoise};
  border-radius: 0.2rem;

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.gold};
    scale: 1.2;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;
