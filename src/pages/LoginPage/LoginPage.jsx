import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import transition from "../../components/Helpers/transition/transition";
import { LoginPageStyled } from "./LoginPage.styled";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <h1>Login page</h1>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default transition(LoginPage);
