const foodUrl = 'https://www.themealdb.com/api/json/v1/1/';

export const getFoodByName = (name) => {
  const URL = `${foodUrl}search.php?s=${name}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  );
};


export const getFoodByIngredients = (ingredient) => {
  const URL = `${foodUrl}filter.php?i=${ingredient}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  );
};


export const getFoodByLetter = (letter) => {
  const URL = `${foodUrl}search.php?f=${letter}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  );
};


export const getFoodCategories = () => {
  const URL = `${foodUrl}list.php?c=list`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  );
};


export const getFoodIngredients = () => {
  const URL = `${foodUrl}list.php?i=list`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  );
};


export const getRandomFood = () => {
  const URL = `${foodUrl}random.php`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  );
};
