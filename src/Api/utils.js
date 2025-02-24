import { cakesLoader } from "../Loaders/cakesloader";

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
