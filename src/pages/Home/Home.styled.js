import styled from "styled-components";
import moonOnHand from "../../assets/images/moonOnHand_4.png";

export const HomeStyled = styled.div`
  margin: 0 auto;
  margin-top: 10vh;
  width: 45%;
  max-width: 35vh;

  #moon-image {
    position: relative;
    // вся изюминка тут - padding задается от ширины в процентах.
    padding-top: 175.07%;

    background: url(${moonOnHand}) no-repeat;
    // background-position: center;
    background-size: cover;

    &:before {
      // display: block;
      content: "";
      width: 100%;
    }
  }

  #moon-effects {
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    // bottom: 0;
    padding-top: 100%;

    animation: effectRotate 25s infinite linear;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      border-radius: 50%;

      box-shadow: inset 0 0 85px ${(p) => p.theme.colors.darkBlueLite},
        inset 0 0 8px 3px rgba(255, 255, 255, 1), 0 0 80px white,
        0 0 150px rgba(255, 255, 255, 0.5);
      // border: 1px solid red;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      border-radius: 50%;
      box-shadow: inset 0 0 15px ${(p) => p.theme.colors.darkBlueLite},
        inset 0 0 85px ${(p) => p.theme.colors.darkBlueLite},
        0 0 45px ${(p) => p.theme.colors.darkBlueLite},
        0 0 60px ${(p) => p.theme.colors.darkBlueLite};

      animation: effectPuls 3s infinite linear;
    }
  }
 
  @keyframes effectRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes effectPuls {
    0% {
      transform: scale(1.03, 0.98);
    }
    50% {
      transform: scale(0.98, 1.02);
    }
    100% {
      transform: scale(1.03, 0.98);
    }
  }
`;
