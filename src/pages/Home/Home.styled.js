import styled, { keyframes } from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  bottom: -0.2rem;

  font-size: 0.8rem;

  color: ${(p) => p.theme.colors.gold};
`;

export const ImgWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 45%;
  max-width: 35vh;
`;

const effectRotate = keyframes`
  0% {
      transform: rotate(0deg);
    }
  100% {
      transform: rotate(360deg);
    }
`;

const effectPuls = keyframes`
 
  0% {
    transform: scale(1.03, 0.98);
  }
  50% {
    transform: scale(0.98, 1.02);
  }
  100% {
    transform: scale(1.03, 0.98);
  }
`;

export const MoonEffects = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  padding-top: 100%;

  animation: ${effectRotate} 25s infinite linear;

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

    animation: ${effectPuls} 3s infinite linear;
  }
`;
