const drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default function tokenAPI() {
  const fetchAPI = fetch(drinkUrl).then((resolve) => resolve.json());
  return fetchAPI;
}

export const getDrinksByName = (name) => {
  const URL = `${drinkUrl}search.php?s=${name}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export const getDrinksByIngredients = (ingredient) => {
  const URL = `${drinkUrl}filter.php?i=${ingredient}`;
  return fetch(URL).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );
};

export const getDrinksByLetter = (letter) => {
  const URL = `${drinkUrl}search.php?f=${letter}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export const getDrinksCategories = () => {
  const URL = `${drinkUrl}list.php?c=list`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};
export const getDCatFiltered = (cat) => {
  const URL = `${drinkUrl}filter.php?c=${cat}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};
export const getDrinksIngredients = () => {
  const URL = `${drinkUrl}list.php?i=list`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export const getRandomDrinks = () => {
  const URL = `${drinkUrl}random.php`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export const getDrinksById = (id) => {
  const URL = `${drinkUrl}lookup.php?i=${id}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};
