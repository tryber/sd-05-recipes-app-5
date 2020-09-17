import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinksById } from '../Services/drinkAPI';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/whiteHeartIcon.svg';

function CardDrinksDetails() {
  const { id } = useParams();
  const { setDrink, drink } = useContext(Context);

  function preenche() {
    // let vet1 = [];
    // let vet2 = [];
    // for (let i = 1; i <= 15; i = i += 1) {
    //   if (`${drink.strIngredient}${i} !== null && ${drink.strIngredient}${i} !== ''`) {
    //     vet1.push(`${drink.strIngredient}${i}`);
    //     vet2.push(`${drink.strIngredient}${i}`);
    //   }
    // }

    // console.log(vet1);
    console.log(drink);
  }

  useEffect(() => {
    getDrinksById(id).then((data) => setDrink(data.drinks));
  }, []);

  useEffect(() => {
    preenche();
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
        </div>
      ))}
    </div>
  );
}

export default CardDrinksDetails;
