import { Form } from "react-router-dom";

import styled, { keyframes } from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;
const blink = keyframes`
    0% {
      background-position: 20% center;
    }
    100% {
      background-position: 80% center;
    }
`;

export const FormStyled = styled(Form)`
  transform: translateY(-1.6rem);

  #question-float {
    position: absolute;
    width: 18rem;

    top: 0px;
    left: 50%;
    transform: translateX(-50%);

    animation: textFloat 12s infinite linear;
  }
  @keyframes textFloat1 {
    0% {
      transform: translateX(-60%);
    }
    50% {
      transform: translateX(-40%);
    }
    100% {
      transform: translateX(-60%);
    }
  }

  #question-rotate {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1.6rem;

      border-bottom-left-radius: 0.8rem;
      border-bottom-right-radius: 0.8rem;

      border-bottom: 1px dashed ${(p) => p.theme.colors.gold};
      opacity: 0.7;
      z-index: -1;
    }
    animation: textRotate 8s infinite linear;
  }
  @keyframes textRotate1 {
    0% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(5deg);
    }
  }

  #question-text {
    position: absolute;
    left: 0px;
    width: 16rem;
    height: 1.6rem;

    font-size: 1rem;

    color: ${(p) => p.theme.colors.goldLite};
    text-align: center;

    caret-color: ${(p) => p.theme.colors.gold};
    background: transparent;

    border: none;
    outline: none;
    // background-size: 10% auto;

    // animation: textSize 5s infinite linear;
    // animation-play-state: running;

    &::-webkit-input-placeholder {
      text-align: center;
      background-image: linear-gradient(
        -225deg,
        #231557 0%,
        #44107a 15%,
        #ff1361 35%,
        #fff800 55%,
        #ff1361 70%,
        #44107a 85%,
        #231557 100%
      );

      // background-color: red;
      background-repeat: no-repeat;
      background-size: 10% auto;
      background-position: 90% center;
      // transform: translateX(10%);

      // color: ${(p) => p.theme.colors.turquoise};
      // opacity: 0.5;
      color: rgba(0, 0, 0, 0.2);

      // -webkit-background-clip: text;
      // color: transparent;

      // animation: flick 1.5s infinite linear;
      animation: ${blink} 2s linear infinite alternate;
    }

    &:focus::placeholder {
      opacity: 0;
      transition: opacity 0.8s linear;
    }

    &:focus {
      opacity: 1;
      // animation-play-state: paused;
    }
  }

  // @keyframes flick {
  //   0% {
  //     background-position: 20% center;
  //   }
  //   100% {
  //     background-position: 80% center;
  //   }
  // }

  @keyframes textSize1 {
    0% {
      font-size: 1rem;
      opacity: 1;
    }
    50% {
      font-size: 0.9rem;
      opacity: 0.3;
    }
    100% {
      font-size: 1rem;
      opacity: 1;
    }
  }

  [type="submit"] {
    position: absolute;
    right: 0px;
    height: 1.6rem;
    width: 1.6rem;

    transform-origin: 50% 50%;
    transform: rotate(-30deg);
    padding: 0px;

    font-size: 0.4rem;
    color: ${(p) => p.theme.colors.turquoiseLite};

    background: transparent;
    cursor: pointer;

    border-radius: 50%;
    border: 1px dashed ${(p) => p.theme.colors.gold};
    opacity: 0.4;
    &:hover {
      color: ${(p) => p.theme.colors.gold};
      opacity: 1;
      transition-duration: 0.5s;
    }
    transition-duration: 0.5s;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  margin: 0 auto;

  width: 45%;
  max-width: 35vh;
`;

const effectRotate1 = keyframes`
     0% {
      transform: rotate(0deg);
    }
  100% {
      transform: rotate(360deg);
    }
`;
const effectPuls1 = keyframes`
 
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

  animation: ${effectRotate1} 25s infinite linear;

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

    animation: ${effectPuls1} 3s infinite linear;
  }
`;
