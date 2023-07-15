import { fetchAnswers } from "../Helpers/api";
import {
  Form,
  DecoFloatInput,
  DecoRotateInput,
  Input,
  SubmitButton,
} from "./Form.styled";

const QuestionForm = ({ onSubmit }) => {
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
        console.log(data);
        // if (data.length > 0) {
        // setUsers((prevUsers) =>
        //   page === 1 ? data : [...prevUsers, ...data]
        // );
        // setTotalCount((prevState) =>
        //   page === 1
        //     ? dataTotalCount - data.length
        //     : prevState - data.length
        // );
        // setError(null);
        // }
      } catch (error) {
        // setError(error);
        // notifyErr();
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
          <SubmitButton type="submit">ask me</SubmitButton>
        </DecoRotateInput>
      </DecoFloatInput>
    </Form>
  );
};

export default QuestionForm;
