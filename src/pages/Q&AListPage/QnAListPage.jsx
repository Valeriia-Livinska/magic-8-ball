import QnAListForm from "../../components/Forms/Q&AListForm/QnAListForm";
import transition from "../../components/Helpers/transition/transition";
import { QnAListPage } from "./QnAListPage.styled";

const QnAList = () => {
  return (
    <QnAListPage>
      <h1>QnA List page</h1>
      <QnAListForm />
    </QnAListPage>
  );
};

export default transition(QnAList);
