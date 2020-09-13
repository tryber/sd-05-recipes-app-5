import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import { getFoodByName, getFoodByLetter, getFoodByIngredients } from '../Services/foodAPI';
import { getDrinksByName, getDrinksByLetter, getDrinksByIngredients } from '../Services/drinkAPI';

const GetDrinkApi = (target, input, save) => {
  switch (target) {
    case 'name':
      return getDrinksByName(input).then((data) => {
        if (!data.drinks) {
          return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        }
        save(data.drinks);
      });
    case 'ing':
      return getDrinksByIngredients(input).then((data) => save(data.drinks));

    case 'letter':
      return getDrinksByLetter(input).then((data) => save(data.drinks));
    default:
  }
};

const GetFoodApi = (target, input, save) => {
  switch (target) {
    case 'name':
      return getFoodByName(input).then((data) => {
        if (!data.meals) {
          return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        }
        save(data.meals);
      });
    case 'ing':
      return getFoodByIngredients(input).then((data) => save(data.meals));
    case 'letter':
      return getFoodByLetter(input).then((data) => save(data.meals));
    default:
  }
};
const searchBtn = (receitas, target, input, setDrink, setFood) => (
  <button
    data-testid="exec-search-btn"
    className="search-btn"
    type="button"
    onClick={() => {
      if (target === 'letter' && input.length > 1) {
        return alert('Sua busca deve conter somente 1 (um) caracter');
      }
      return receitas === 'Comidas'
        ? GetFoodApi(target, input, setFood)
        : GetDrinkApi(target, input, setDrink);
    }}
  >
    Buscar
  </button>
);

const SearchBar = () => {
  const [target, setTarget] = useState('name');
  const [input, setInput] = useState('');
  const { setFood, setDrink, receitas, setReceitas } = useContext(Context);
  const {
    location: { pathname },
  } = useHistory();
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
      {searchBtn(receitas, target, input, setDrink, setFood)}
    </div>
  );
};

export default SearchBar;
