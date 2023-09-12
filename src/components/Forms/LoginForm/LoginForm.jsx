import SubmitButton from "../../SubmitButton/SubmitButton";
import { LoginFormStyled } from "./LoginFormStyled.styled";

const LoginForm = () => {
  return (
    <LoginFormStyled>
      <label>
        Your E-mail :
        <input
          type="email"
          name="email"
          placeholder="******@ukr.net"
          autoComplete="username"
          required
        />
      </label>

      <label htmlFor="current-password">
        Your Password:
        <input
          id="current-password"
          name="current-password"
          type="password"
          autoComplete="current-password"
          // pattern="[a-z0-5]{3,}"
          // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"

          // title="Пароль не може бути меншим за вісім символів і має містити хоча б одну цифру, одну маленьку та одну велику латинську літеру."
          required
        />
      </label>
      {/* <SubmitButton id="submit-button">Login</SubmitButton> */}

      <SubmitButton id="submit-button" disabled={false}>
        Login
      </SubmitButton>
    </LoginFormStyled>
  );
};

export default LoginForm;
