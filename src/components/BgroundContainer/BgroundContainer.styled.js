import styled from "styled-components";
import starsImg from "../../assets/images/stars.png";
import twinklingDarkBlueImg from "../../assets/images/twinklingDarkBlue.png";

export const StyledBgroundContainer = styled.div`
  z-index: 0;

  position: relative;
  width: 100%;
  height: 100vh;

  overflow: hidden;

  background: ${(p) => p.theme.colors.darkBlue} url(${starsImg}) repeat;

  &::after {
    content: "";
    z-index: -1;
    position: absolute;
 
    top: 0px;
    right: 0;

    width: 10000px;
    height: 100%;

    background-size: 1000px 1000px;
    background: transparent url(${twinklingDarkBlueImg}) repeat;

    animation: move-background 30s linear infinite;
  }

  @keyframes move-background {
    from {
      transform: translate3d(0px, 0px, 0px);
    }
    to {
      transform: translate3d(1000px, 0px, 0px);
    }
  }
`;
