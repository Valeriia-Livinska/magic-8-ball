import { useNavigation } from "react-router-dom";
import Container from "../../components/Container/Container";

const Register = () => {
  const { state } = useNavigation();
 
  return (
    <main>
      <section>
        <Container>
          <h1>Register page</h1>
          {state === "loading" ? (
            <div className="loader">Загружаюсь, ЖДИТЕ! </div>
          ) : null}
        </Container>
      </section>
    </main>
  );
};

export default Register;
