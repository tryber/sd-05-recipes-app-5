const foodUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s={request?}';

export default function tokenAPI() {
  const fetchAPI = fetch(foodUrl).then((resolve) => resolve.json());
  return fetchAPI;
}
