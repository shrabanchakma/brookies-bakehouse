import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/Shared/ErrorPage";
import Home from "../Components/Pages/Home/Home";
import Aboutus from "../Components/Pages/Aboutus";
import CookiesPage from "../Components/Pages/Cookies/CookiesPage";
import { cookiesLoader } from "../Loaders/cookiesLoader";
import MerchPage from "../Components/Pages/Merch/MerchPage";
import { merchLoader } from "../Loaders/merchLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <Aboutus />,
      },
      {
        path: "/collections/cookies",
        element: <CookiesPage />,
        loader: cookiesLoader,
      },
      {
        path: "/collections/merch",
        element: <MerchPage />,
        loader: merchLoader,
      },
    ],
  },
]);

export default router;
