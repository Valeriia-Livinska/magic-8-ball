import styled, { keyframes } from "styled-components";

const blink = keyframes`
    0% {
      background-position: 100% center;
    }
    100% {
      background-position: 0% center;
    }
`;

export const SubmitButtonStyled = styled.button`
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
    // opacity: (${(p) => (p.disabled ? 1 : 0)});

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

  }
  }`;
