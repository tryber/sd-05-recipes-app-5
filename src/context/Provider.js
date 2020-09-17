import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const [receitas, setReceitas] = useState('Comidas');
  const [dataFoodAreas, setDataFoodAreas] = useState([]);
  const [foodArea, setFoodArea] = useState(false);
  const [categories, setCategories] = useState([]);
  const [recipeDone, setRecipeDone] = useState([]);
  const dataContext = {
    food,
    setFood,
    drink,
    setDrink,
    receitas,
    setReceitas,
    dataFoodAreas,
    setDataFoodAreas,
    foodArea,
    setFoodArea,
    categories,
    setCategories,
    recipeDone,
    setRecipeDone
  };
  return <Context.Provider value={dataContext}>{children}</Context.Provider>;
}
Provider.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Provider;
