import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Container from "./components/Container/Container";
import BgroundContainer from "./components/BgroundContainer/BgroundContainer";

const HomePage = lazy(() => import("./pages/Home/Home.jsx"));
const LoginPage = lazy(() => import("./pages/Login/Login.jsx"));
const QnAListPage = lazy(() => import("./pages/Q&A List/QnAList.jsx"));
const Register = lazy(() => import("./pages/Register/Register.jsx"));
const NotFound = lazy(() => import("./pages/Not found/NotFound.jsx"));

// try to use replace property while using a login page

const App = () => {
  return (
    <BgroundContainer>
      <Container>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/qnalist" element={<QnAListPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Container>
    </BgroundContainer>
  );
};

export default App;
