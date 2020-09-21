import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFoodByName } from '../Services/foodAPI';
import { getDrinksByName } from '../Services/drinkAPI';
import '../App.css';

let checkFood = true;

function Recomendation() {
  const { id } = useParams();
  const {
    location: { pathname },
  } = useHistory();
  const [rec, setRec] = useState([]);
  useEffect(() => {
    if (pathname === `/comidas/${id}`) {
      getDrinksByName('').then((data) => setRec(data.drinks));
    } else {
      getFoodByName('').then((data) => setRec(data.meals));
      checkFood = false;
    }
  }, []);
  if (!checkFood) {
    return (
      <div className="recipes-container">
        {rec.slice(0, 6).map((element, i) => (
          <div data-testid={`${i}-recomendation-card`}>
            <p data-testid={`${i}-recomendation-title`}>{element.strMeal} </p>
            <img alt={element.strMeal} src={element.strMealThumb} height="180px" width="180px" />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="recipes-container">
      {rec.slice(0, 6).map((element, i) => (
        <div data-testid={`${i}-recomendation-card`}>
          <p data-testid={`${i}-recomendation-title`}>{element.strDrink} </p>
          <img alt={element.strDrink} src={element.strDrinkThumb} height="180px" width="180px" />
        </div>
      ))}
    </div>
  );
}
export default Recomendation;
