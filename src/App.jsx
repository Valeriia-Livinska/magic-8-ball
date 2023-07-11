// import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import QnAList from "./pages/Q&A List/QnAList";
import Register from "./pages/Register/Register";
import NotFound from "./pages/Not found/NotFound";

// const HomePage = lazy(() => import("./pages/Home/Home.jsx"));
// const LoginPage = lazy(() => import("./pages/Login/Login.jsx"));
// const QnAListPage = lazy(() => import("./pages/Q&A List/QnAList.jsx"));
// const RegisterPage = lazy(() => import("./pages/Register/Register.jsx"));
// const NotFound = lazy(() => import("./pages/Not found/NotFound.jsx"));

// try to use replace property while using a login page

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/qnalist" element={<QnAList />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
