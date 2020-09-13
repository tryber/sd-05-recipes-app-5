import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../context/Context';

function CardFoods() {
  const { food } = useContext(Context);
  if (food.length === 1) {
    return <Redirect to={`/comidas/${food[0].idMeal}`} />;
  }
  return (
    <div>
      {food.slice(0, 12).map((element, index) => (
        <div key={element.idMeal} data-testid={`${index}-recipe-card`}>
          <p data-testid={`${index}-card-name`}>{element.strMeal}</p>
          <img
            data-testid={`${index}-card-img`}
            src={element.strMealThumb}
            width="15%"
            height="15%"
            alt={element.strMeal}
          />
        </div>
      ))}
    </div>
  );
}
export default CardFoods;
