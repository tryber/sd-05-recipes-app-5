import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const [receitas, setReceitas] = useState('Comidas');
  const [categories, setCategories] = useState([]);
  const dataContext = {
    food,
    setFood,
    drink,
    setDrink,
    receitas,
    setReceitas,
    categories,
    setCategories,
  };
  return <Context.Provider value={dataContext}>{children}</Context.Provider>;
}
Provider.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Provider;
