import Container from "../../components/Container/Container";
import { HomeWrapper, ImgWrapper } from "./Home1.styled";
import moonOnHand from "../../assets/images/moonOnHand_4.png";
import { Form } from "react-router-dom";

const Home1 = () => {
  return (
    <main>
      <section>
        <Container>
          <HomeWrapper>
            <h1>Home page</h1>

            <Form
              method="post"
              action="destroy"
              // onSubmit={(event) => {
              //   if (
              //     !confirm("Please confirm you want to delete this record.")
              //   ) {
              //     event.preventDefault();
              //   }
              // }}
            >
              {" "}
              <label>
                <span>Задайте вопрос</span>
                <input
                  type="text"
                  name="twitter"
                  placeholder=" Your question, please!"
                  // defaultValue={contact.twitter}
                />
              </label>
              <div>
                <button type="submit">Получить ответ</button>
              </div>
            </Form>
            <ImgWrapper>
              <img src={moonOnHand} alt="Moon fortune-telling" />
              <div id="moon-effects"></div>
            </ImgWrapper>
          </HomeWrapper>
        </Container>
      </section>
    </main>
  );
};

export default Home1;
