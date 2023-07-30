import styled, { keyframes } from "styled-components";

export const Form = styled.form`
  transform: translateY(-1rem);
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

export const DecoFloatInput = styled.div`
  position: absolute;
  width: 19.5rem;

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

export const DecoRotateInput = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 1.8rem;
    height: 1.6rem;

    border-bottom-left-radius: 0.8rem;

    border-bottom: 1px dashed ${(p) => p.theme.colors.gold};
    opacity: 0.7;
    z-index: -1;
  }
  animation: text 8s infinite linear;

  animation: ${textRotate} 12s infinite linear;
`;

const textSize = keyframes`
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

export const Input = styled.input`

    position: absolute;
    left: 0.5rem;
    width: 16rem;
    height: 1.6rem;

    font-size:1rem;
    text-align:center;

    color: ${(p) => p.theme.colors.goldLite};
    background-color: transparent;
    caret-color: ${(p) => p.theme.colors.gold};

    border: none;
    outline: none;
  
    animation: ${textSize} 5s infinite linear;

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

export const SubmitButton = styled.button`
    position: absolute;
    right: 0px;
    top:-0.14rem;

    height: 1.6rem;
    width: 2.5rem;

    transform-origin: 50% 50%;
    transform: rotate(-30deg);
  
    font-size: 0.6rem;
     color: transparent;

    cursor: pointer;

    background: linear-gradient(
        -110deg,
        ${(p) => p.theme.colors.turquoise} 0%,
        ${(p) => p.theme.colors.turquoise} 48%,
        white 50%,
        white 50%,
        ${(p) => p.theme.colors.turquoise} 52%,
        ${(p) => p.theme.colors.turquoise} 100%
      );

    background-repeat: no-repeat;
    background-size: 500% 18%;
    background-position: top;
    -webkit-background-clip: text;
    
    background-color: ${(p) => p.theme.colors.turquoise};

    
    border-radius: 50%;
    border: 1px dashed ${(p) => p.theme.colors.gold};
    opacity: 0.6;
    box-shadow:   0 0 5px rgba(255, 255, 255),
       0 0 25px rgba(255, 255, 255, 0.8);
    
    animation: ${blink} 4s linear infinite;
    transition-duration: 0.5s;
    
    &:hover {
         color: ${(p) => p.theme.colors.gold};
         opacity: 1;
         transition-duration: 0.5s;
       }

    &:disabled {
      opacity: 0;
    }

  }`;
