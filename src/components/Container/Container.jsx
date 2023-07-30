import { StyledContainer } from "./Container.styled";

const Container = ({ children }) => {
  return <StyledContainer className="container">{children}</StyledContainer>;
};
export default Container;
