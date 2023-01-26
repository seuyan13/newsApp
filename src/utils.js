export function getUrl({ category, keyword }) {
  const API_KEY = "4a47e45e10be435b828f5f4f0c1a1acd";

  console.log(category, keyword);
  if (keyword) {
    return `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`;
  }
  if (category) {
    return `https://newsapi.org/v2/top-headlines?country=nz&category=${category}&apiKey=${API_KEY}`;
  }

  return `https://newsapi.org/v2/top-headlines?country=nz&apiKey=${API_KEY}`;
}
