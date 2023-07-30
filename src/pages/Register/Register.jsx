import Container from "../../components/Container/Container";
import transition from "../../components/Helpers/transition/transition";
import { RegisterSection } from "./Register.styled";

const Register = () => {
  return (
    <RegisterSection>
      <Container>
        <h1>Register page</h1>
      </Container>
    </RegisterSection>
  );
};

export default transition(Register);
