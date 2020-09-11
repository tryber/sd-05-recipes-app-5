import React from 'react';
import { useContext, useState } from 'react';
import Context from '../context/Context';
import { getFoodByName, getFoodByLetter, getFoodByIngredients } from '../Services/foodAPI';
import { getDrinksByName, getDrinksByLetter, getDrinksByIngredients } from '../Services/drinkAPI';

const GetDrinkApi = (target, input, save) => {
  switch (target) {
    case 'name':
      return getDrinksByName(input).then((data) => save(data.drink));
    case 'ing':
      return getDrinksByIngredients(input).then((data) => save(data.drink));
    case 'letter':
      return getDrinksByLetter(input).then((data) => save(data.drink));
    default:
  }
};

const GetFoodApi = (target, input, save) => {
  switch (target) {
    case 'name':
      return getFoodByName(input).then((data) => save(data.food));
    case 'ing':
      return getFoodByIngredients(input).then((data) => save(data.food));
    case 'letter':
      return getFoodByLetter(input).then((data) => save(data.food));
    default:
  }
};

const searchBtn = (recipeType, target, input, setDrink, setFood) => (
  <button
    data-testid="exec-search-btn"
    className="search-btn"
    type="button"
    onClick={() => {
      if (target === 'letter' && input.length > 1) {
        return alert('Sua busca deve conter somente 1 lettra');
      }
      return recipeType === 'Comidas'
        ? GetFoodApi(target, input, setFood)
        : GetDrinkApi(target, input, setDrink);
    }}
  >
    Buscar
  </button>
);

const SearchBar = ({ recipeType }) => {
  const [target, setTarget] = useState('name');
  const [input, setInput] = useState('');
  const { setFood, setDrink } = useContext(Context);
  return (
    <div>
      <input data-testid="search-input" onChange={(e) => setInput(e.target.value)} type="text" />
      <div>
        <input
          data-testid="ingredient-search-radio"
          onChange={() => setTarget('ing')}
          type="radio"
          id="ing"
          name="target"
        />
        <label htmlFor="ing">Ingredientes</label>
        <input
          data-testid="name-search-radio"
          onChange={() => setTarget('name')}
          type="radio"
          id="nome"
          name="target"
        />
        <label htmlFor="nome">Nome</label>
        <input
          data-testid="first-letter-search-radio"
          onChange={() => setTarget('letter')}
          type="radio"
          id="letra"
          name="target"
        />
        <label htmlFor="letra">Primeira Letra</label>
      </div>
      {searchBtn(recipeType, target, input, setDrink, setFood)}
    </div>
  );
};

export default SearchBar;
