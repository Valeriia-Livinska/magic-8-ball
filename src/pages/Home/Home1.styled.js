import { Form } from "react-router-dom";

import styled, { keyframes } from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const FormStyled = styled(Form)`
  transform: translateY(-1.6rem);
`;

const textFloat = keyframes`
    0% {
      transform: translateX(-55%);
    }
    50% {
      transform: translateX(-45%);
    }
    100% {
      transform: translateX(-55%);
    }
`;

export const FloatQuestionContainer = styled.div`
  position: absolute;
  width: 18rem;

  top: 0px;
  left: 50%;
  transform: translateX(-50%);

  animation: ${textFloat} 12s infinite linear;
`;

const textRotate = keyframes`
   0% {
      transform: rotate(2deg);
    }
    50% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(2deg);
    }
`;

export const RotateQuestionContainer = styled.div`
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
  animation: text 8s infinite linear;

  animation: ${textRotate} 12s infinite linear;
`;

const textSize1 = keyframes`
    0% {
      font-size: 1rem;
      opacity: 1;
    }
    50% {
      font-size: 0.95rem;
      opacity: 0.6;
    }
    100% {
      font-size: 1rem;
      opacity: 1;
    }
`;

// export const TextInput = styled.input.attrs((props) => ({
//   type: props.type,
//   // name: props.name,
//   // required: props.required,
//   // autoComplete: props.autoComplete,
//   // placeholder: props.placeholder,
// }))`
export const TextInput = styled.input`

  // font-size: ${(props) => props.size};
    position: absolute;
    left: 0px;
    width: 16rem;
    height: 1.6rem;

    font-size: 1rem;
    text-align: center;

    color: ${(p) => p.theme.colors.goldLite};
    background-color: transparent;
    caret-color: ${(p) => p.theme.colors.gold};

    border: none;
    outline: none;

    animation: ${textSize1} 5s infinite linear;

    &::placeholder {
      color: ${(p) => p.theme.colors.turquoise};
    }

    &:focus::placeholder {
      opacity: 0;
      transition: opacity 0.8s linear;
    }

    &:focus {
      opacity: 1;
    }
  }
`;

const blink = keyframes`
    0% {
      background-position: 100% center;
    }
    100% {
      background-position: 0% center;
    }
`;

// export const SubmitButton = styled.button.attrs((props) => ({
//   type: "submit",
// }))`
export const SubmitButton = styled.button`
      position: absolute;
      right: 0px;
    height: 1.6rem;
    width: 1.6rem;

    transform-origin: 50% 50%;
    transform: rotate(-30deg);
    padding: 0px;

    font-size: 0.4rem;

    color: transparent;

    cursor: pointer;

      background: linear-gradient(
        -80deg,
        ${(p) => p.theme.colors.turquoise} 0%,
        ${(p) => p.theme.colors.turquoise} 48%,
        white 49%,
        white 50%,
        ${(p) => p.theme.colors.turquoise} 51%,
        ${(p) => p.theme.colors.turquoise} 100%
      );

       background-repeat: no-repeat;
      background-size: 500% auto;
      background-position: -100% center;
      -webkit-background-clip: text;

      animation: ${blink} 4s linear infinite;

    border-radius: 50%;
    border: 1px dashed ${(p) => p.theme.colors.gold};
    opacity: 0.5;
    box-shadow:   0 0 5px rgba(255, 255, 255),
       0 0 25px rgba(255, 255, 255, 0.8);

    &:hover {
      color: ${(p) => p.theme.colors.gold};
      opacity: 1;
      transition-duration: 0.5s;
    }

    transition-duration: 0.5s;

  }`;

export const ImgWrapper = styled.div`
  position: relative;
  margin: 0 auto;

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
