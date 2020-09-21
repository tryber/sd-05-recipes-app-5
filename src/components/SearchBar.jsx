import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import { getFoodByName, getFoodByLetter, getFoodByIngredients } from '../Services/foodAPI';
import { getDrinksByName, getDrinksByLetter, getDrinksByIngredients } from '../Services/drinkAPI';

const GetDrinkApi = (target, input, save, history) => {
  switch (target) {
    case 'name':
      return getDrinksByName(input).then((data) => {
        if (!data.drinks) {
          return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        } else if (data.drinks.length === 1) {
          history.push(`/bebidas/${data.drinks[0].idDrink}`);
        }
        return save(data.drinks);
      });
    case 'ing':
      return getDrinksByIngredients(input).then((data) => save(data.drinks));

    case 'letter':
      return getDrinksByLetter(input).then((data) => save(data.drinks));
    default:
      return target;
  }
};

const GetFoodApi = (target, input, save, history) => {
  switch (target) {
    case 'name':
      return getFoodByName(input).then((data) => {
        if (!data.meals) {
          return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        } else if (data.meals.length === 1) {
          history.push(`/comidas/${data.meals[0].idMeal}`);
        }
        return save(data.meals);
      });
    case 'ing':
      return getFoodByIngredients(input).then((data) => save(data.meals));
    case 'letter':
      return getFoodByLetter(input).then((data) => save(data.meals));
    default:
      return target;
  }
};
const searchBtn = (receitas, target, input, setDrink, setFood, history) => (
  <button
    data-testid="exec-search-btn"
    className="search-btn"
    type="button"
    onClick={() => {
      if (target === 'letter' && input.length > 1) {
        return alert('Sua busca deve conter somente 1 (um) caracter');
      }
      return receitas === 'Comidas'
        ? GetFoodApi(target, input, setFood, history)
        : GetDrinkApi(target, input, setDrink, history);
    }}
  >
    Buscar
  </button>
);

const SearchBar = () => {
  const [target, setTarget] = useState('name');
  const [input, setInput] = useState('');
  const { setFood, setDrink, receitas, setReceitas } = useContext(Context);
  const history = useHistory();
  const { location: { pathname } } = useHistory();
  useEffect(() => {
    if (pathname === '/bebidas') {
      setReceitas('Bebidas');
    } else if (pathname === '/comidas') {
      setReceitas('Comidas');
    }
  }, [pathname]);
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
        <label htmlFor="ing">Ingrediente</label>
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
      {searchBtn(receitas, target, input, setDrink, setFood, history)}
    </div>
  );
};

export default SearchBar;
