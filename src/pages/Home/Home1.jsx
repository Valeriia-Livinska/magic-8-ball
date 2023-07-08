import Container from "../../components/Container/Container";
import {
  FormStyled,
  HomeWrapper,
  ImgWrapper,
  MoonEffects,
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
              <div id="question-float">
                <div id="question-rotate">
                  <input
                    id="question-text"
                    type="text"
                    name="question"
                    // value=""
                    // defaultValue={contact.twitter}
                    required
                    autocomplete="off"
                    // pattern="^[А-Яа-яЁё?\s]+$"
                    //  size="35"
                    placeholder=" Type in your question & submit."
                  />

                  <button type="submit">submit</button>
                </div>
              </div>
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
