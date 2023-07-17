import Container from "../../components/Container/Container";
import transition from "../../components/Helpers/transition/transition";
import { LoginSection } from "./Login.styled";

const Login = () => {
  return (
    <LoginSection>
      <Container>
        <h1>Login page</h1>
      </Container>
    </LoginSection>
  );
};

export default transition(Login);
