export const cardsCandlesLoader = async () => {
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
