import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;

  width: 100%;
  height: 100%;

  padding-right: 1rem;
  padding-left: 1rem;

  ${(p) => p.theme.mq.mobileOnly} {
    max-width: 320px;
  }

  ${(p) => p.theme.mq.tablet} {
    width: 768px;
    // padding-right: 1rem;
    // padding-left: 1rem;
  }

  ${(p) => p.theme.mq.desktop} {
    width: 1280px;
    // padding-right: 1.5rem;
    // padding-left: 1.5rem;
  }
`;
