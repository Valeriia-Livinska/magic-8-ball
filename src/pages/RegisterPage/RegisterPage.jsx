import transition from "../../components/Helpers/transition/transition";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";
import { RegisterPage } from "./RegisterPage.styled";

import "./RegisterPage.css";

const Register = () => {
  return (
    <RegisterPage>
      <h1>Register page</h1>
      <RegisterForm />
    </RegisterPage>
  );
};

export default transition(Register);
