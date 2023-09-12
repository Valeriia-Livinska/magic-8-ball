import { SubmitButtonStyled } from "./SubmitButtonStyled.styled";

const SubmitButton = (p) => {
  return (
    <SubmitButtonStyled id={p.id} disabled={p.disabled}>
      {p.children}
    </SubmitButtonStyled>
  );
};
export default SubmitButton;
