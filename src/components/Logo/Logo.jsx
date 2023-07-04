import { ReactComponent as LogoSvg } from "../../assets/images/Moom_Logo_3_conv_1.svg";
import { LogoLink } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoLink
      aria-label="Moon fortune-telling"
      href="https://github.com/Valeriia-Livinska"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LogoSvg style={{ width: "45px", height: "45px" }} />
    </LogoLink>
  );
};
export default Logo;
