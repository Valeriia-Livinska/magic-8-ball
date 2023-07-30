import { useState } from "react";
import { HeaderNav, HeaderNavList, HeaderNavLink } from "./Navigation.styled";

// import { useState } from "react";
// import { HeaderNav, HeaderNavList, HeaderNavLink } from "./Navigation.styled";

export const Nav = () => {
  const [disabled, setDisabled] = useState(false);

  const onClickHandler = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 5000);
  };
  return (
    <HeaderNav>
      <HeaderNavList>
        <li>
          <HeaderNavLink to="/">Home</HeaderNavLink>
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
