import styled from "styled-components";
import starsImg from "../../assets/images/stars.png";
import twinklingDBlueImg from "../../assets/images/twinkling.png";

export const StyledBgroundContainer = styled("div")`
  // margin: 0 auto;
  position: relative;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  // background-color: ${(p) => p.theme.colors.darkBlue};
  // background-color: ${(p) => p.theme.colors.turquoise};
  // ${(p) => console.log(p)};

  background: ${(p) => p.theme.colors.turquoise} url(${starsImg}) repeat;
  z-index: 0;

  ::after {
    content: "shhhh";
    position: absolute;
    color: black;
    top: 0;
    left: 0;
    // width: 10000px;
    // height: 100%;
    // right: 0;
    z-index: 1;
    // background-size: 1000px 1000px;
    // background: transparent url(${twinklingDBlueImg}) repeat;

    // animation: move-background 30s linear infinite;
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
