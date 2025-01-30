export async function cookiesLoader() {
  const response = await fetch("/cookies.json");
  if (!response.ok) {
    throw new Error("Failed to fetch cookies data");
  }
  const cookies = await response.json();
  return cookies;
}
