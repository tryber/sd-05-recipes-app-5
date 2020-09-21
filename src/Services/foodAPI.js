const foodUrl = 'https://www.themealdb.com/api/json/v1/1/';

export default function tokenAPI() {
  const fetchAPI = fetch(foodUrl).then((resolve) => resolve.json());
  return fetchAPI;
}

export const getFood = () => {
  const URL = `${foodUrl}search.php?s=`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export const getFoodAreas = () => {
  const URL = `${foodUrl}list.php?a=list`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export const getFoodByArea = (area) => {
  const URL = `${foodUrl}filter.php?a=${area}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export const getFoodByName = (name) => {
  const URL = `${foodUrl}search.php?s=${name}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export const getFoodByIngredients = (ingredient) => {
  const URL = `${foodUrl}filter.php?i=${ingredient}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export const getFoodByLetter = (letter) => {
  const URL = `${foodUrl}search.php?f=${letter}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export const getFoodCategories = () => {
  const URL = `${foodUrl}list.php?c=list`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export const getFoodIngredients = () => {
  const URL = `${foodUrl}list.php?i=list`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};
export const getFCatFiltered = (cat) => {
  const URL = `${foodUrl}filter.php?c=${cat}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export const getRandomFood = () => {
  const URL = `${foodUrl}random.php`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export const getFoodsById = (id) => {
  const URL = `${foodUrl}lookup.php?i=${id}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};
