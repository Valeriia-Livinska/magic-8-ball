import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Nav from "../Navigation/Navigation";
import { Header, NavContainer } from "./Layout.styled";

// import { LayoutStyled } from "./Layout.styled";

// lazy used in APP let you not call load until the first time you attempt to render a component
// then it will be cached - for this we need to use export default
// Suspense allow you to add some spinner or something that will let know to user that page is loading
// As soon as we assigned a parent route / and element Layout we need to render it child route elements.
// in Outlet we can use a context to pass through some data

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <NavContainer>
            <Logo />
            <Nav />
          </NavContainer>
        </Container>
      </Header>
      <Suspense
      // fallback={
      //   <Spinner />
      // }
      >
        <main
          style={{
            position: "relative",
          }}
        >
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
