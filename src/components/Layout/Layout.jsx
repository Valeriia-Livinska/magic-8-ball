import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { useCycle } from "framer-motion";
import Header from "../Header/Header";
// import propTypes from "prop-types";

// lazy used in APP let you not call load until the first time you attempt to render a component
// then it will be cached - for this we need to use export default
// Suspense allow you to add some spinner or something that will let know to user that page is loading
// As soon as we assigned a parent route / and element Layout we need to render it child route elements.
// in Outlet we can use a context to pass through some data

const Layout = () => {

  return (
    <>
      <Header/>

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
