import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { HeaderStyled, NavContainer } from "./Header.styled";

import { useCycle } from "framer-motion";

const Header = () => {
  const [isOpen, toggleOpen] = useCycle("closed", "open");

  return (
    <HeaderStyled>
      <Container>
        <NavContainer $isopen={isOpen}>
          <Logo />
          <Navigation toggle={() => toggleOpen()} isopen={isOpen} />
        </NavContainer>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
