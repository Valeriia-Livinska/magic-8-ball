import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  button {
    position: absolute;
    top: 90vh;
    left: 60%;
    z-index: 3;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  margin: 0 auto;

  width: 45%;
  max-width: 35vh;

  #moon-effects {
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
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

      box-shadow: inset 0 0 85px #f1f1ef, inset 0 0 3px rgba(255, 255, 255, 0.8),
        0 0 80px rgba(255, 255, 255, 1), 0 0 150px rgba(255, 255, 255, 0.3);
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      border-radius: 50%;

      box-shadow: inset 0 0 25px #f1f1ef, inset 0 0 75px #f1f1ef;

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
