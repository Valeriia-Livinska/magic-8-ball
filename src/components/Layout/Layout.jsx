import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";

// lazy used in APP let you not call load until the first time you attempt to render a component
// then it will be cached - for this we need to use export default
// Suspense allow you to add some spinner or something that will let know to user that page is loading
// As soon as we assigned a parent route / and element Layout we need to render it child route elements.
// in Outlet we can use a context to pass through some data

const Layout = () => {
  return (
    <>
      <Header>
        <Logo/>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/qnalist">Q&A List</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </nav>
      </Header>
      <hr/>
      <Suspense
      // fallback={
      //   <Spinner />
      // }
      >
        <br></br>
        <br></br>
        <br></br>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
