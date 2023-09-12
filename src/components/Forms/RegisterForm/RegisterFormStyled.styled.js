import styled from "styled-components";
import { PagesFormStyled } from "../PagesFormStyled";

export const RegisterFormStyled = styled(PagesFormStyled)`

  [id="submit-button"] {
    top: 105%;
  }

  .gender-buttons {
    display: inline-flex;
    justify-content: space-around;

    width: 62%;
    margin-right: 0.8rem;
  }

  [id="gender-text"] {
    padding-right: 0.5rem;
  }

  .gender input[type="radio"] {
    display: none; // отключаем видимость кнопок по умолчанию
  }

  .gender label {
    display: inline-block;
    padding: 0px 0.44rem;

    line-height: 1.2rem;
    color: ${(p) => p.theme.colors.turquoiseDark};

    border: 1px dotted ${(p) => p.theme.colors.gold};
    border-radius: 50%;

    cursor: pointer;

    user-select: none;
  }

  /* Checked */
  input[type="radio"]:checked + label {
    color: ${(p) => p.theme.colors.turquoiseLite};
    border: 1px solid ${(p) => p.theme.colors.goldLite};
  }

  /* Hover */
  .gender label:hover {
    color: ${(p) => p.theme.colors.turquoiseLite};
  }

  /* Disabled */
  .gender input[type="radio"]:disabled + label {
    background: #efefef;
    color: #666;
  }
`;
