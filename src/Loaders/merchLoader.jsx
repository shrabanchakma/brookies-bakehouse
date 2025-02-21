export async function merchLoader() {
  const response = await fetch("/merch.json");
  if (!response.ok) {
    throw new Error("Failed to fetch merch data");
  }
  const merch = await response.json();
  return merch;
}
