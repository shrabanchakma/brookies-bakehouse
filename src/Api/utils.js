import { cakesLoader } from "../Loaders/cakesloader";
import { cardsCandlesLoader } from "../Loaders/cardsCandlesLoader";
import { cookiesLoader } from "../Loaders/cookiesLoader";
import { merchLoader } from "../Loaders/merchLoader";

// get cake data
export const getCakeData = async (id) => {
  const cakesData = await cakesLoader();

  const cake = cakesData.find((cake) => cake.id === parseInt(id));
  if (!cake) throw new Response("Not Found", { status: 404 });

  return cake;
};

// get cards and candles
export const getCardsCandles = async () => {
  try {
    const response = await fetch("/cardscandles.json"); // Update with actual path
    if (!response.ok) {
      throw new Error("Failed to load cards and candles data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// get Cookie Data
export const getCookieData = async (id) => {
  try {
    const cookiesData = await cookiesLoader();

    const cookie = cookiesData.find((cookie) => cookie.id === parseInt(id));
    if (!cookie) throw new Response("Not Found", { status: 404 });

    return cookie;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// get Merch Data
export const getMerchData = async (id) => {
  try {
    const merchData = await merchLoader();

    const merch = merchData.find((merchItem) => merchItem.id === parseInt(id));
    if (!merch) throw new Response("Not Found", { status: 404 });

    return merch;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// get cards candles Data
export const getCardsCandleData = async (id) => {
  try {
    const cardsCandlesData = await cardsCandlesLoader();

    const cardsCandle = cardsCandlesData.find(
      (cardsCandleItem) => cardsCandleItem.id === parseInt(id)
    );
    if (!cardsCandle) throw new Response("Not Found", { status: 404 });

    return cardsCandle;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
