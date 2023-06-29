import styled from "styled-components";

export const StyledContainer = styled("div")`
  margin: 0 auto;

  // width: 100%;
  height: 100%;

  padding-right: 20px;
  padding-left: 20px;
  padding-top: 20px;

  color: ${(p) => p.theme.colors.goldLite};
  // border: 1px solid ${(p) => p.theme.colors.gold};

  ${(p) => p.theme.mq.mobileOnly} {
    max-width: 320px;
  }

  ${(p) => p.theme.mq.tablet} {
    width: 768px;
    // padding-right: 32px;
    // padding-left: 32px;
  }

  ${(p) => p.theme.mq.desktop} {
    width: 1280px;
    // padding-right: 16px;
    // padding-left: 16px;
  }
  & hr {
    margin-top: 20px;
    border: 1px solid ${(p) => p.theme.colors.gold};
  }
`;
