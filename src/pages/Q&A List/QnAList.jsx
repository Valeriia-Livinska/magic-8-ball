import Container from "../../components/Container/Container";
import transition from "../../components/Helpers/transition/transition";
import { QnAListSection } from "./QnAList.styled";

const QnAList = () => {
  return (
    <QnAListSection>
      <Container>
        <h1>QnA List page</h1>
      </Container>
    </QnAListSection>
  );
};

export default transition(QnAList);
