import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinksById } from '../Services/drinkAPI';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/whiteHeartIcon.svg';

function preenche(drink) {
  if (drink.length !== 0) {
    const vet1 = [];
    for (let i = 1; i <= 15; i += 1) {
      const propri = `strIngredient${i}`;
      const propri2 = `strMeasure${i}`;
      vet1.push(drink[0][propri]);
      vet1.push(drink[0][propri2]);
    }
    return vet1;
  }
  return null;
}
function CardDrinksDetails() {
  const { id } = useParams();
  const { setDrink, drink } = useContext(Context);
  const [aux1, setAux1] = useState([]);

  useEffect(() => {
    getDrinksById(id).then((data) => setDrink(data.drinks));
  }, []);

  useEffect(() => {
    setAux1(preenche(drink));
  }, [drink]);

  return (
    <div>
      {drink.map((ele) => (
        <div>
          <img alt={ele.strDrink} src={ele.strDrinkThumb} data-testid="recipe-photo" />
          <p data-testid="recipe-title">{ele.strDrink}</p>
          <img alt="share" src={shareIcon} data-testid="share-btn" />
          <img alt="fav" src={favIcon} data-testid="favorite-btn" />
          <p data-testid="recipe-category">{ele.strCategory}</p>
          <button type="button" className="start-recipe" data-testid="start-recipe-btn">
            Iniciar Receita
          </button>
          {aux1 ? (
            <div>
              {aux1.map((element) => (
                <p>{element}</p>
              ))}
            </div>
          ) : (
            <div>{console.log('oi')}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CardDrinksDetails;
