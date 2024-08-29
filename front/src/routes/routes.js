import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorUrl from "../components/error/ErrorUrl";
import Home from "../components/home/Home";
import SignIn from "../components/registration/SignIn";
import Header from "../components/header/Header";
import Login from "../components/login/Login";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorUrl />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/registration",
        element: <SignIn />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
