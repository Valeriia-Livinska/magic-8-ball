import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main>
      <section>
        <Container>
          <h1>Not Found</h1>
        </Container>
      </section>
    </main>
  );
};

export default NotFound;
