import { HeaderNav, HeaderNavList, HeaderNavLink } from "./Navigation.styled";

export const Nav = () => {
  return (
    <HeaderNav>
      <HeaderNavList>
        <li>
          <HeaderNavLink to="/">Home</HeaderNavLink>
        </li>
        <li>
          <HeaderNavLink to="/login">Login</HeaderNavLink>
        </li>
        <li>
          <HeaderNavLink to="/qnalist">Q&A List</HeaderNavLink>
        </li>
        <li>
          <HeaderNavLink to="/register">Register</HeaderNavLink>
        </li>
      </HeaderNavList>
    </HeaderNav>
  );
};

export default Nav;
