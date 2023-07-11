import Container from "../../components/Container/Container";
import {
  FloatQuestionContainer,
  FormStyled,
  HomeWrapper,
  ImgWrapper,
  MoonEffects,
  RotateQuestionContainer,
  SubmitButton,
  TextInput,
} from "./Home1.styled";
import moonOnHand from "../../assets/images/moonOnHand_4.png";
// import { Form } from "react-router-dom";

const Home1 = () => {
  return (
    <main>
      <section>
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
      </section>
    </main>
  );
};

export default Home1;
