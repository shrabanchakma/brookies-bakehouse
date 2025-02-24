import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/Shared/ErrorPage";
import Home from "../Components/Pages/Home/Home";
import Aboutus from "../Components/Pages/Aboutus";
import CookiesPage from "../Components/Pages/Cookies/CookiesPage";
import { cookiesLoader } from "../Loaders/cookiesLoader";
import MerchPage from "../Components/Pages/Merch/MerchPage";
import { merchLoader } from "../Loaders/merchLoader";
import CardsCandlesPage from "../Components/Pages/CardsCandles/CardsCandlesPage";
import { cardsCandlesLoader } from "../Loaders/cardsCandlesLoader";
import CakesPage from "../Components/Pages/Cakes/cakespage";
import { cakesLoader } from "../Loaders/cakesloader";
import { getCakeData, getCookieData } from "../Api/utils";
import CakeDetails from "../Components/Pages/CakeDetails/CakeDetails";

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
      {
        path: "/collections/candles-cards",
        element: <CardsCandlesPage />,
        loader: cardsCandlesLoader,
      },
      {
        path: "/collections/cakes",
        element: <CakesPage />,
        loader: cakesLoader,
      },
      // cakes
      {
        path: "/collections/cakes/:id",
        element: <CakeDetails />,
        loader: async ({ params }) => await getCakeData(params?.id),
      },

      // cookies
      // {
      //   path: "/collections/cookies/:id",
      //   element: <ProductPage />,
      //   loader: async ({ params }) => await getCookieData(params?.id),
      // },
    ],
  },
]);

export default router;
