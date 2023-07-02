// import Container from "../../components/Container/Container";
import { backgroundColor } from "styled-system";
import Container from "../../components/Container/Container";
import { HomeStyled } from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <main>
        <section>
          <h1>Home page</h1>
          <HomeStyled>
            <div
              id="sphere__rotate"
              class="sphere__rotate"
              onclick="questFunction()"
              // style={{ backgroundColor: "white" }}
            >
              <div id="sphere__puls" class="sphere__puls"></div>
            </div>
          </HomeStyled>
        </section>
      </main>
    </Container>
  );
};

export default Home;
