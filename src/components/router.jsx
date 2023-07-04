import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
// import Home from "../pages/Home/Home";
// import Login from "../pages/Login/Login";
// import QnAList from "../pages/Q&A List/QnAList";
// import Register from "../pages/Register/Register";

const HomePage = lazy(() => import("../pages/Home/Home1.jsx"));
const LoginPage = lazy(() => import("../pages/Login/Login.jsx"));
const QnAListPage = lazy(() => import("../pages/Q&A List/QnAList.jsx"));
const Register = lazy(() => import("../pages/Register/Register.jsx"));
const NotFound = lazy(() => import("../pages/Not found/NotFound.jsx"));

export const routerMy = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // обработка пользователем ошибок
    errorElement: <NotFound />,

    // вложенные роуты
    children: [
      {
        // index: true, пишется один раз для элемена по умолчанию
        index: true,
        element: <HomePage />,
        // любой loader задерживает рендер всей компоненты,
        // пока не будет резолв лоадера.
        // для борьбы с этим рекомендуют использовать спецкомпонент
        // в <RouterProvider router={myBasicRouter} fallbackElement={<>LOADING!!!!</> }
        // он показывается на время резолва
        // даже корневого Layout

        // loader: fetchMovie,
        errorElement: <NotFound />,
      },
      {
        path: "/login",
        element: <LoginPage />,
        // // errorElement: <ErrorPage />,
        // loader: fetchAllFacts,
        // // определяет нужно ли перезагружать компонент при изменениях
        // shouldRevalidate: (arg) => {
        //   console.log(arg);
        //   return true;
        // },
      },
      {
        path: "/qnalist",
        element: <QnAListPage />,
        // errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <Register />,
        errorElement: <NotFound />,
      },
    ],
  },
]);
