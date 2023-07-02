import styled from "styled-components";
import moonOnHand from "../../assets/images/moonOnHand_2.png";

export const HomeStyled = styled.div`
  position: absolute;

  bottom: 0px;
  left: 12.5%;

  width: 75%;
  height: 90%;

  background: url(${moonOnHand}) no-repeat;
  background-position: center;
  background-size: contain;

  #sphere__rotate {
    content: "";
    display: block;
    margin: 0.5% auto;

    width: 97%;
    height: 70.1%;

    border-radius: 50%;

    box-shadow: inset 0 0 85px ${(p) => p.theme.colors.darkBlueLite},
      inset 0 0 8px 3px rgba(255, 255, 255, 1), 0 0 80px white,
      0 0 150px rgba(255, 255, 255, 0.5);

    animation: sphereRotate 35s infinite linear;
  }

  @keyframes sphereRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  #sphere__puls {
    content: "";
    display: block;

    margin: 0.5% auto;

    width: 100%;
    height: 100%;

    border-radius: 50%;

    box-shadow: inset 0 0 25px ${(p) => p.theme.colors.darkBlueLite},
      inset 0 0 85px ${(p) => p.theme.colors.darkBlueLite},
      0 0 25px ${(p) => p.theme.colors.darkBlueLite},
      0 0 60px ${(p) => p.theme.colors.darkBlueLite};

    animation: galoPuls 3s infinite linear;
  }

  @keyframes galoPuls {
    0% {
      transform: scale(1.02, 0.98);
    }
    50% {
      transform: scale(0.98, 1.02);
    }
    100% {
      transform: scale(1.02, 0.98);
    }
  }
`;

