import { useState } from "react";
import Container from "../../components/Container/Container";
import QuestionForm from "../../components/QuestionForm/Form";
import transition from "../../services/transition/transition";
import {
  HomeSection,
  HomeWrapper,
  ImgWrapper,
  MoonEffects,
} from "./Home.styled";
import moonOnHand from "../../assets/images/moonOnHand_4.webp";

const Home = () => {
  const [query, setQuery] = useState("");
  // const [answer, setAnswer] = useState("");

  const getQuery = (query) => {
    setQuery(query);
  };

  console.log(query);
  return (
    <HomeSection>
      <Container>
        <HomeWrapper>
          <h1>Home page</h1>
          <QuestionForm onSubmit={getQuery} />
          <ImgWrapper>
            <img src={moonOnHand} alt="Moon fortune-telling" />
            <MoonEffects />
          </ImgWrapper>
        </HomeWrapper>
      </Container>
    </HomeSection>
  );
};

export default transition(Home);
