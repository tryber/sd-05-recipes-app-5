import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

function CardDrinks() {
  const { drink } = useContext(Context);
  return (
    <div className='oi'>
      {drink.slice(0, 12).map((element, index) => (
        <Link to={`/bebidas/${element.idDrink}`}>
          <div className="Foood" key={element.idDrink} data-testid={`${index}-recipe-card`}>
            <p data-testid={`${index}-card-name`}>{element.strDrink}</p>
            <img
              className="fotoComida"
              data-testid={`${index}-card-img`}
              src={element.strDrinkThumb}
              alt={element.strDrink}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
export default CardDrinks;
