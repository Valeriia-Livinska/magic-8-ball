import Container from "../../components/Container/Container";
import transition from "../../services/transition/transition";
import {
  HomeSection,
  HomeWrapper,
  FormStyled,
  FloatQuestionContainer,
  RotateQuestionContainer,
  TextInput,
  SubmitButton,
  ImgWrapper,
  MoonEffects,
} from "./Home.styled";
import moonOnHand from "../../assets/images/moonOnHand_4.png";

const Home = () => {
  return (
    <HomeSection>
      <Container>
        <HomeWrapper>
          <h1>Home page</h1>

          <FormStyled
            method="post"
            // action="destroy"
            // onSubmit={(event) => {
            //   if (
            //     !confirm("Please confirm you want to delete this record.")
            //   ) {
            //     event.preventDefault();
            //   }
            // }}
          >
            <FloatQuestionContainer>
              <RotateQuestionContainer>
                <TextInput
                  type="text"
                  name="question"
                  // value=""
                  // defaultValue={contact.twitter}
                  required
                  autoComplete="off"
                  // pattern="^[А-Яа-яЁё?\s]+$"
                  //  size="35"
                  placeholder=" Type in your question & submit."
                />
                <SubmitButton type="submit">submit</SubmitButton>
              </RotateQuestionContainer>
            </FloatQuestionContainer>
          </FormStyled>
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
