export async function cakesLoader() {
  const response = await fetch("/cakes.json");
  if (!response.ok) {
    throw new Error("Failed to fetch cakes data");
  }
  const cakes = await response.json();
  return cakes;
}
