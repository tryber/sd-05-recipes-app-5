import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinksById } from '../Services/drinkAPI';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/whiteHeartIcon.svg';

function preenche(drink) {
  if (drink.length !== 0) {
    const vet1 = [];
    const vet2 = [];
    for (let i = 1; i <= 15; i += 1) {
      const propri = `strIngredient${i}`;
      const propri2 = `strMeasure${i}`;
      vet1.push(drink[0][propri]);
      vet2.push(drink[0][propri2]);
    }

    // 
  }
  return null;
}
function CardDrinksDetails() {
  const { id } = useParams();
  const { setDrink, drink } = useContext(Context);

  useEffect(() => {
    getDrinksById(id).then((data) => setDrink(data.drinks));
  }, []);

  useEffect(() => {
    preenche(drink);
  }, [drink]);

  const ingredientes = preenche(drink);
  return (
    <div>
      {drink.map((ele) => (
        <div>
          <img alt={ele.strDrink} src={ele.strDrinkThumb} data-testid="recipe-photo" />
          <p data-testid="recipe-title">{ele.strDrink}</p>
          <img alt="share" src={shareIcon} data-testid="share-btn" />
          <img alt="fav" src={favIcon} data-testid="favorite-btn" />
          <p data-testid="recipe-category">{ele.strCategory}</p>
          {/* <div>{ingredientes.map((vet1, vet2) =>
          )}</div> */}
          <button type="button" className="start-recipe" data-testid="start-recipe-btn">
            Iniciar Receita
          </button>
        </div>
      ))}
    </div>
  );
}

export default CardDrinksDetails;
