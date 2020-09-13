import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Context from '../context/Context';
import { getFoodByName } from '../Services/foodAPI';
import { getDrinksByName } from '../Services/drinkAPI';

let checkType = '';
function Cards() {
  const {
    location: { pathname },
  } = useHistory();
  const { food, drink, setFood, setDrink } = useContext(Context);
  const [setMeal] = useState(true);
  useEffect(() => {
    if (pathname === '/bebidas') {
      checkType = 'bebidas';
      setMeal(false);
      getDrinksByName('').then((data) => setDrink(data.drinks));
    } else if (pathname === '/comidas') {
      checkType = 'comidas';
      setMeal(true);
      getFoodByName('').then((data) => setFood(data.meals));
    }
  }, [pathname]);
  if (checkType === 'bebidas') {
    if (drink.length === 1) {
      return <Redirect to={`/bebidas/${drink[0].idDrink}`} />;
    }
    return (
      <div>
        {drink.slice(0, 12).map((element, index) => (
          <div key={element.idDrink} data-testid={`${index}-recipe-card`}>
            <p data-testid={`${index}-card-name`}>{element.strDrink}</p>
            <img
              data-testid={`${index}-card-img`}
              src={element.strDrinkThumb} width="15%" height="15%" alt={element.strDrink}
            />
          </div>
        ))}
      </div>
    );
  } else if (checkType === 'comidas') {
    if (food.length === 1) { return <Redirect to={`/comidas/${food[0].idMeal}`} />; }
    return (
      <div>
        {food.slice(0, 12).map((element, index) => (
          <div key={element.idMeal} data-testid={`${index}-recipe-card`}>
            <p data-testid={`${index}-card-name`}>{element.strMeal}</p>
            <img
              data-testid={`${index}-card-img`}
              src={element.strMealThumb} width="15%" height="15%" alt={element.strDrink}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <p>Oi</p>
  );
}

export default Cards;
