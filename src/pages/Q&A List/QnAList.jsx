import Container from "../../components/Container/Container";
import transition from "../../services/transition/transition";

const QnAList = () => {
  return (
    <section>
      <Container>
        <h1>QnA List page</h1>
      </Container>
    </section>
  );
};

export default transition(QnAList);
