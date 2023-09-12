import { useState } from "react";
import RequestForm from "../../components/Forms/RequestForm/RequestForm";
import AnswerField from "../../components/AnswerField";
import transition from "../../components/Helpers/transition/transition";
import { HomePageStyled, ImgWrapper, MoonEffects } from "./HomePage.styled";
import moonOnHand from "../../assets/images/moonOnHand_5.png";
import { randomAnswer } from "../../utils/randomAnswer";

const HomePage = () => {
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
    <HomePageStyled>
      <h1>Home page</h1>
      <RequestForm onSubmit={getQuery} getAnswer={getAnswer} />

      <ImgWrapper>
        <AnswerField answer={answer} />
        <img src={moonOnHand} alt="Moon fortune-telling" />
        <MoonEffects />
      </ImgWrapper>
    </HomePageStyled>
  );
};

export default transition(HomePage);
