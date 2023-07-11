import Container from "../../components/Container/Container";
import transition from "../../services/transition/transition";

const Login = () => {
  return (
    <section>
      <Container>
        <h1>Login page</h1>
      </Container>
    </section>
  );
};

export default transition(Login);
