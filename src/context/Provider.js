import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const [receitas, setReceitas] = useState([])
  const dataContext = {
    food,
    setFood,
    drink,
    setDrink,
  };
  return <Context.Provider value={dataContext}>{children}</Context.Provider>;
}

export default Provider;
