import React, { useState } from 'react';
import Context from './Context';

function Provider({ batata }) {
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const dataContext = {
    food,
    setFood,
    drink,
    setDrink,
  };
  return <Context.Provider value={dataContext}>{batata}</Context.Provider>;
}

export default Provider;
