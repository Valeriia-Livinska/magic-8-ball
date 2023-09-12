import styled from "styled-components";
export const PagesFormStyled = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
  transform: translateY(0.4rem);

  text-align: right;

  [id="submit-button"] {
    position: absolute;
    left: 63%;
  }

  input,
  textarea,
  select {
    right: 0;
    width: 62%;

    margin: 0.3rem 0.8rem 0 0.5rem;

    border-radius: 0.2rem;
    border: 1px dotted ${(p) => p.theme.colors.gold};

    color: ${(p) => p.theme.colors.turquoiseLite};
    caret-color: ${(p) => p.theme.colors.gold};
    background-color: transparent;

    &::placeholder {
      color: ${(p) => p.theme.colors.turquoiseDark};
    }

    &:focus::placeholder {
      opacity: 0;
      transition: opacity 0.8s linear;
      border: 1px solid ${(p) => p.theme.colors.goldLite};
    }

    &:focus {
      outline: none; /* выключается рамка по умолчанию для :focus */
      border: 1px solid ${(p) => p.theme.colors.goldLite};
    }

    &:-webkit-autofill {
      -webkit-box-shadow: inset 0 0 0 50px ${(p) => p.theme.colors.darkBlueLite}; /* цвет вашего фона */
      -webkit-text-fill-color: ${(p) =>
        p.theme.colors.turquoiseLite}; /* цвет текста */
    }
  }
`;
