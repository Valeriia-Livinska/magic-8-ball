import { fetchAnswers } from "../Helpers/api";
import {
  Form,
  DecoFloatInput,
  DecoRotateInput,
  Input,
  SubmitButton,
} from "./Form.styled";

const QuestionForm = ({ onSubmit, getAnswer }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const queryValue = event.currentTarget.elements["query"].value;
    const query = queryValue.trim();
    if (query === "") {
      alert("Fill in the input value");
    }
    onSubmit(query);

    const getAnswersArr = async () => {
      // setLoading(true);
      try {
        const data = await fetchAnswers();
        if (data.length > 0) {
          getAnswer(data);
          // setError(null);
        }
      } catch (error) {
        // setError(error);
        // error notification
      } finally {
        // setLoading(false);
      }
    };
    getAnswersArr();
  };

  // disable to button for several seconds while fetching
  // if the same question, than ask if you really want to ask the same question

  return (
    <Form onSubmit={handleSubmit}>
      <DecoFloatInput>
        <DecoRotateInput>
          <Input
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Please type in your question"
          />
          <SubmitButton type="submit">Ask ME</SubmitButton>
        </DecoRotateInput>
      </DecoFloatInput>
    </Form>
  );
};

export default QuestionForm;
