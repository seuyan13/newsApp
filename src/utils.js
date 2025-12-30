export function getUrl({ category, keyword }) {
  const API_KEY = "Your_API_Key";

  console.log(category, keyword);
  if (keyword) {
    return `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`;
  }
  if (category) {
    return `https://newsapi.org/v2/top-headlines?country=nz&category=${category}&apiKey=${API_KEY}`;
  }

  return `https://newsapi.org/v2/top-headlines?country=nz&apiKey=${API_KEY}`;
}
