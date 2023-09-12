import SubmitButton from "../../SubmitButton/SubmitButton";
import { QnAListFormStyled } from "./QnAListFormStyled.styled";

const QnAListForm = () => {
  return (
    <QnAListFormStyled>
      <label>
        Your E-mail :
        <input
          type="email"
          name="email"
          placeholder="******@ukr.net"
          autoComplete="username"
          required
        />
      </label>
      {/* <SubmitButton id="submit-button">List</SubmitButton> */}

      <SubmitButton id="submit-button" disabled={false}>
        List
      </SubmitButton>
    </QnAListFormStyled>
  );
};

export default QnAListForm;
