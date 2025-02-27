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
import {
  getCakeData,
  getCardsCandleData,
  getCookieData,
  getMerchData,
} from "../Api/utils";
import CakeDetails from "../Components/Pages/CakeDetails/CakeDetails";
import CookieDetails from "../Components/Pages/CookieDetails/CookieDetails";
import MerchDetails from "../Components/Pages/MerchDetails/MerchDetails";
import CardsCandleDetails from "../Components/Pages/CardsCandleDetails/CardsCandleDetails";
import ContactSection from "../Components/Pages/ContactSection/ContactSection";
import Cart from "../Components/Pages/Cart/Cart";

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
      // cookies
      {
        path: "/collections/cookies",
        element: <CookiesPage />,
        loader: cookiesLoader,
      },
      {
        path: "/collections/cookies/:id",
        element: <CookieDetails />,
        loader: async ({ params }) => await getCookieData(params?.id),
      },
      // merch
      {
        path: "/collections/merch",
        element: <MerchPage />,
        loader: merchLoader,
      },
      {
        path: "/collections/merch/:id",
        element: <MerchDetails />,
        loader: async ({ params }) => await getMerchData(params?.id),
      },
      // cards and candles
      {
        path: "/collections/candles-cards",
        element: <CardsCandlesPage />,
        loader: cardsCandlesLoader,
      },
      {
        path: "/collections/candles-cards/:id",
        element: <CardsCandleDetails />,
        loader: async ({ params }) => await getCardsCandleData(params?.id),
      },
      // cakes
      {
        path: "/collections/cakes",
        element: <CakesPage />,
        loader: cakesLoader,
      },
      {
        path: "/collections/cakes/:id",
        element: <CakeDetails />,
        loader: async ({ params }) => await getCakeData(params?.id),
      },
      {
        path: "/pages/contact",
        element: <ContactSection />,
      },
      {
        path: "/pages/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
