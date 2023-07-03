import Container from "../../components/Container/Container";
import { HomeStyled } from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <main>
        <section>
          <h1>Home page</h1>
          <HomeStyled>
            <div id="moon-image">
              <div id="moon-effects"></div>
            </div>
          </HomeStyled>
        </section>
      </main>
    </Container>
  );
};

export default Home;
