import { useState } from "react";
import { HeaderNav, HeaderNavList, HeaderNavLink } from "./Navigation.styled";
import { MenuToggle } from "../MenuToggle/MenuToggle";
// import { motion, useCycle } from "framer-motion";

// import { HeaderNav, HeaderNavList, HeaderNavLink } from "./Navigation.styled";

export const Navigation = (props) => {
  const [disabled, setDisabled] = useState(false);

  const onClickHandler = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 5000);
  };

  // const [isOpen, toggleOpen] = useCycle(false, true);
  console.log(props.isopen);

  return (
    <>
      <HeaderNav>
        {/* <HeaderNavList isopen={isOpen ? "open" : "closed"}> */}
        <HeaderNavList $isopen={props.isopen}>
          <li>
            <HeaderNavLink to="/" disabled={disabled}>
              Home
            </HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink
              to="/login"
              onClick={onClickHandler}
              disabled={disabled}
            >
              Login
            </HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink to="/qnalist" disabled={disabled}>
              Q&A List
            </HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink to="/register" disabled={disabled}>
              Register
            </HeaderNavLink>
          </li>
        </HeaderNavList>
      </HeaderNav>

      <MenuToggle toggle={props.toggle} isopen={props.isopen} />
    </>
  );
};

export default Navigation;

// export const Nav = (props) => {

//   const navButtons = [
//     {
//       name: "Home",
//       routePath: "/",
//       buttonBlocked: "false",
//     },
//     {
//       name: "Login",
//       routePath: "/login",
//       buttonBlocked: "false",
//     },
//     {
//       name: "Q&A List",
//       routePath: "/qnalist",
//       buttonBlocked: "false",
//     },
//     {
//       name: "Register",
//       routePath: "/register",
//       buttonBlocked: "false",
//     },
//   ];

//   const [pageIsChanging, setPageChanging] = useState(false);
//   console.log(pageIsChanging);

//   return (
//     <HeaderNav>
//       <HeaderNavList>
//         {navButtons.map((button) => (
//           <li
//             key={button.name}
//             style={{
//               zIndex: 2,
//             }}
//           >
//             <HeaderNavLink
//               to={button.routePath}
//               style={{
//                 zIndex: pageIsChanging ? -1 : 0,
//               }}
//               onClick={
//                 () => {
//                   setPageChanging(true);
//                   console.log("pageIsChanging =", pageIsChanging);
//                 }
//                 // setTimeout(() => {
//                 // setPageChanging(false);
//                 //   console.log(e, "pageIsChanging =", pageIsChanging);
//                 // }, 5000);
//               }
//             >
//               {button.name}
//             </HeaderNavLink>
//           </li>
//         ))}

//         {/* <li>
//           <HeaderNavLink to="/">Home</HeaderNavLink>
//         </li>
//         <li>
//           <HeaderNavLink to="/login">Login</HeaderNavLink>
//         </li>
//         <li>
//           <HeaderNavLink to="/qnalist">Q&A List</HeaderNavLink>
//         </li>
//         <li>
//           <HeaderNavLink to="/register">Register</HeaderNavLink>
//         </li> */}
//       </HeaderNavList>
//     </HeaderNav>
//   );
// };

// export default Nav;
