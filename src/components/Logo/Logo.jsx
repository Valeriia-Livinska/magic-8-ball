import moonLogo from "../../assets/images/Moom_Logo_3_conv_1.svg";
import { LogoLink, LogoSvg } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoLink
      aria-label="Moon fortune-telling"
      href="https://github.com/Valeriia-Livinska"
      target="_blank"
      rel="noopener noreferrer"
      className="logotip"
    >
      <LogoSvg src={moonLogo} alt="Logotip" />
    </LogoLink>
  );
};
export default Logo;
