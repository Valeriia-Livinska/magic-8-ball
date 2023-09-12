import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";

const NotFound = () => {
  const navigate = useNavigate();
  // if use react router 6.4
  // const myError = useRouteError();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section>
      <Container>
        <h1>Not Found</h1>
        {/* // if use react router 6.4 */}
        {/* <p>{myError.statusText ?? myError.message}</p> */}
      </Container>
    </section>
  );
};

export default NotFound;
