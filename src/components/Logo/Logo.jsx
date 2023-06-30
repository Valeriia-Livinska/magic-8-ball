import { ReactComponent as LogoSvg } from "../../assets/images/logo2.svg";
import { LogoLink } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoLink
      aria-label="Moon fortune-telling"
      href="https://github.com/Valeriia-Livinska"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LogoSvg style={{ width: "50px", height: "50px" }} />
    </LogoLink>
  );
};
export default Logo;
