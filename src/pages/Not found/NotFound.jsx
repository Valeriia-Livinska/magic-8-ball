import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import Container from "../../components/Container/Container";

const NotFound = () => {
  const navigate = useNavigate();
  // добавлено
  const myError = useRouteError();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main>
      <section>
        <Container>
          <h1>Not Found</h1>
          {/* // добавлено */}
          <p>{myError.statusText ?? myError.message}</p>
        </Container>
      </section>
    </main>
  );
};

export default NotFound;
