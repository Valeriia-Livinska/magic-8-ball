import { useState } from "react";
// import Container from "../../components/Container/Container";
import QuestionForm from "../../components/QuestionForm/Form";
import AnswerField from "../../components/AnswerField";
import transition from "../../components/Helpers/transition/transition";
import {
  // HomeSection,
  HomeWrapper,
  ImgWrapper,
  MoonEffects,
} from "./Home.styled";
import moonOnHand from "../../assets/images/moonOnHand_5.png";
import { randomAnswer } from "../../utils/randomAnswer";

const Home = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const getQuery = (query) => {
    setQuery(query);
  };

  const getAnswer = (answersArrr) => {
    const randAnswer = randomAnswer(answersArrr);
    setAnswer(randAnswer);
  };

  console.log(query);
  console.log(answer);

  return (
    <HomeWrapper>
      <h1>Home page</h1>
      <QuestionForm onSubmit={getQuery} getAnswer={getAnswer} />

      <ImgWrapper>
        <AnswerField answer={answer} />
        <img src={moonOnHand} alt="Moon fortune-telling" />
        <MoonEffects />
      </ImgWrapper>
    </HomeWrapper>
  );
};

export default transition(Home);
