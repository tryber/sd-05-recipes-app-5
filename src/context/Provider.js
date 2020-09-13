import React, { useState } from 'react';
import Context from './Context';
import PropTypes from 'prop-types';

function Provider({ children }) {
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const [receitas, setReceitas] = useState('Comidas');
  const dataContext = {
    food,
    setFood,
    drink,
    setDrink,
    receitas,
    setReceitas,
  };
  return <Context.Provider value={dataContext}>{children}</Context.Provider>;
}
Provider.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Provider;
