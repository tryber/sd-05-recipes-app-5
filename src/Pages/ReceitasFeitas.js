/* import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import Header from '../components/Header';
// import { getFoodIngredients, getDrinksIngredients } from '../Services/foodAPI';

const receitasFeitas = () => {
  const {
    food,
    setFood,
    drinks,
    setDrinks,
    recipeDone,
    setRecipeDone,
  } = useContext(Context);

useEffect(() => {
  getFoodIngredients().then((data) => setFood(data.meals));
}, []);

useEffect(() => {
  getDrinksIngredients().then((data) => setIng(data.drinks));
}, []);

const ReceitasStorage = () => {
  const [recipeDone, setRecipeDone] = useState([]);
};

  // const btnFiltro = colocar All, Food, Drinks;
  // preciso chamar API - ok
  // Filtrar resultado e mapear
  // retornar isso para o botão

return (
  <div>
    <Header />
    <div>
      <h1>Nome da Receita</h1>
      <h1>Categoria</h1>
      <h1>Área</h1>
      <h1>Data da Receita</h1>
    </div>
    <div>
      <Link>
        <button>All</button>
      </Link>
      <Link>
        <button>Food</button>
      </Link>
      <Link>
        <button>Drinks</button>
      </Link>
    </div>
    <button data-testid="filter-by-all-btn">Compartilhar</button>
    giuliano travou aqui
  </div>
);
}

// data-testid="filter-by-food-btn"

// src/images/shareIcon.svg (botão compartilhar)

// export default ReceitasFeitas;
 */