import Container from "../../components/Container/Container";
import { HomeStyled } from "./Home.styled";
import { Form } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <main>
        <section>
          <h1>Home page</h1>
          <label>
            <span>Задайте вопрос</span>
            <input
              type="text"
              name="twitter"
              placeholder=" Your question, please!"
              // defaultValue={contact.twitter}
            />
          </label>
          <HomeStyled>
            <div id="moon-image">
              <div id="moon-effects"></div>
            </div>
          </HomeStyled>
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
            <button type="submit">Получить ответ</button>
          </Form>
        </section>
      </main>
    </Container>
  );
};

export default Home;
