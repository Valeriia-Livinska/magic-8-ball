// import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout/Layout";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import QnAListPage from "./pages/Q&AListPage/QnAListPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// const HomePage = lazy(() => import("./pages/Home/Home.jsx"));
// const LoginPage = lazy(() => import("./pages/Login/Login.jsx"));
// const QnAListPage = lazy(() => import("./pages/Q&A List/QnAList.jsx"));
// const RegisterPage = lazy(() => import("./pages/Register/Register.jsx"));
// const NotFound = lazy(() => import("./pages/Not found/NotFound.jsx"));

// try to use replace property while using a login page

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/qnalist" element={<QnAListPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
