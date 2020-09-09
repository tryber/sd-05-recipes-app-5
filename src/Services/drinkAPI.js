const drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s={request?}';

export default function tokenAPI() {
  const fetchAPI = fetch(drinkUrl).then((resolve) => resolve.json());
  return fetchAPI;
}
