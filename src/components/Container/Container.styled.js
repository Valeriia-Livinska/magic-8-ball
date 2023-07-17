import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;

  width: 100%;
  height: 100%;

  padding-right: 20px;
  padding-left: 20px;
  // border: 2px solid green;

  ${(p) => p.theme.mq.mobileOnly} {
    max-width: 320px;
  }

  ${(p) => p.theme.mq.tablet} {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  ${(p) => p.theme.mq.desktop} {
    width: 1280px;
    padding-right: 48px;
    padding-left: 48px;
  }
`;
