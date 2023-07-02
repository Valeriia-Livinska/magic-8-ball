// import { Route, RouterProvider, Routes } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { routerMy } from "./components/router";
// import Layout from "./components/Layout/Layout";
// import { routerMy } from "./components/router";

// const HomePage = lazy(() => import("./pages/Home/Home.jsx"));
// const LoginPage = lazy(() => import("./pages/Login/Login.jsx"));
// const QnAListPage = lazy(() => import("./pages/Q&A List/QnAList.jsx"));
// const Register = lazy(() => import("./pages/Register/Register.jsx"));
// const NotFound = lazy(() => import("./pages/Not found/NotFound.jsx"));

// try to use replace property while using a login page
export const App = () => (
  <RouterProvider
    router={routerMy}
    fallbackElement={<div className="loader">LOADING!!!!</div>}
  />
);

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/qnalist" element={<QnAListPage />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   );
// };

export default App;
