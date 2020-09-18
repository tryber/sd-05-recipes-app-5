import React, { useContext } from 'react';
import Context from '../context/Context';

function CardDrinks() {
  const { drink } = useContext(Context);
  return (
    <div>
      {drink.slice(0, 12).map((element, index) => (
        <div key={element.idDrink} data-testid={`${index}-recipe-card`}>
          <p data-testid={`${index}-card-name`}>{element.strDrink}</p>
          <img
            data-testid={`${index}-card-img`}
            src={element.strDrinkThumb}
            width="15%"
            height="15%"
            alt={element.strDrink}
          />
        </div>
      ))}
    </div>
  );
}
export default CardDrinks;
